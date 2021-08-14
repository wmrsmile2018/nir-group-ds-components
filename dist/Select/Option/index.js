"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Option = require("./Option");

Object.keys(_Option).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Option[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Option[key];
    }
  });
});