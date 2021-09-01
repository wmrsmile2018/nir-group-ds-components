"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TabsStepGroup.default;
  }
});

var _TabsStepGroup = _interopRequireDefault(require("./TabsStepGroup"));

var _withHandlers = require("./withHandlers");

Object.keys(_withHandlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _withHandlers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withHandlers[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }