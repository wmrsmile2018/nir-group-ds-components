"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UploadFile = require("./UploadFile");

Object.keys(_UploadFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _UploadFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _UploadFile[key];
    }
  });
});