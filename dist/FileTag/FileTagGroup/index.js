"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileTagGroup = require("./FileTagGroup");

Object.keys(_FileTagGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FileTagGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FileTagGroup[key];
    }
  });
});