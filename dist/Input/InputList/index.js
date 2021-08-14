"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputList = require("./InputList");

Object.keys(_InputList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputList[key];
    }
  });
});