"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GenerateFile = require("./GenerateFile");

Object.keys(_GenerateFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _GenerateFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GenerateFile[key];
    }
  });
});