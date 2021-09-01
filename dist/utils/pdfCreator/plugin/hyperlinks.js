"use strict";

var _worker = _interopRequireDefault(require("../worker.js"));

var _utils = require("../utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add hyperlink functionality to the PDF creation.
// Main link array, and refs to original functions.
var linkInfo = [];
var orig = {
  toContainer: _worker.default.prototype.toContainer,
  toPdf: _worker.default.prototype.toPdf
};

_worker.default.prototype.toContainer = function toContainer() {
  return orig.toContainer.call(this).then(function toContainer_hyperlink() {
    // Retrieve hyperlink info if the option is enabled.
    if (this.opt.enableLinks) {
      // Find all anchor tags and get the container's bounds for reference.
      var container = this.prop.container;
      var links = container.querySelectorAll('a');
      var containerRect = (0, _utils.unitConvert)(container.getBoundingClientRect(), this.prop.pageSize.k);
      linkInfo = []; // Loop through each anchor tag.

      Array.prototype.forEach.call(links, function (link) {
        // Treat each client rect as a separate link (for text-wrapping).
        var clientRects = link.getClientRects();

        for (var i = 0; i < clientRects.length; i++) {
          var clientRect = (0, _utils.unitConvert)(clientRects[i], this.prop.pageSize.k);
          clientRect.left -= containerRect.left;
          clientRect.top -= containerRect.top;
          var page = Math.floor(clientRect.top / this.prop.pageSize.inner.height) + 1;
          var top = this.opt.margin[0] + clientRect.top % this.prop.pageSize.inner.height;
          var left = this.opt.margin[1] + clientRect.left;
          linkInfo.push({
            page,
            top,
            left,
            clientRect,
            link
          });
        }
      }, this);
    }
  });
};

_worker.default.prototype.toPdf = function toPdf() {
  return orig.toPdf.call(this).then(function toPdf_hyperlink() {
    // Add hyperlinks if the option is enabled.
    if (this.opt.enableLinks) {
      // Attach each anchor tag based on info from toContainer().
      linkInfo.forEach(function (l) {
        this.prop.pdf.setPage(l.page);
        this.prop.pdf.link(l.left, l.top, l.clientRect.width, l.clientRect.height, {
          url: l.link.href
        });
      }, this); // Reset the active page of the PDF to the final page.

      var nPages = this.prop.pdf.internal.getNumberOfPages();
      this.prop.pdf.setPage(nPages);
    }
  });
};