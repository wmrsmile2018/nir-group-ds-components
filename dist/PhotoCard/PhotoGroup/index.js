"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PhotoGroup = require("./PhotoGroup");

Object.keys(_PhotoGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PhotoGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PhotoGroup[key];
    }
  });
});