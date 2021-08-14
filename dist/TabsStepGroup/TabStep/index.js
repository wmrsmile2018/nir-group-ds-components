"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabStep = require("./TabStep");

Object.keys(_TabStep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TabStep[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TabStep[key];
    }
  });
});