"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFields = void 0;

require("core-js/modules/es.array.reduce.js");

const generateFields = (obj, names) => Object.entries(names).reduce((acc, cur) => acc.concat({
  id: cur[0],
  title: cur[1],
  value: obj[cur[0]]
}), []);

exports.generateFields = generateFields;