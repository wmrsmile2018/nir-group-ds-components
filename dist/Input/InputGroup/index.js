"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputGroup = require("./InputGroup");

Object.keys(_InputGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputGroup[key];
    }
  });
});