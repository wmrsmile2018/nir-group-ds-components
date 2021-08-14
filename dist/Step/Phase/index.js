"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Phase = require("./Phase");

Object.keys(_Phase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Phase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Phase[key];
    }
  });
});