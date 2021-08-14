"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OpenFile = require("./OpenFile");

Object.keys(_OpenFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _OpenFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _OpenFile[key];
    }
  });
});