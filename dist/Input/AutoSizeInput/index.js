"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AutoSizeInput = require("./AutoSizeInput");

Object.keys(_AutoSizeInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AutoSizeInput[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AutoSizeInput[key];
    }
  });
});