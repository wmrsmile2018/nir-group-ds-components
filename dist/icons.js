"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearIcon = exports.calendarIcon = exports.arrowIcon = exports.succesIcon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const succesIcon = className => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7.341",
  height: "6.223",
  viewBox: "0 0 7.341 6.223",
  className: "success-icon ".concat(className)
}, /*#__PURE__*/_react.default.createElement("path", {
  fill: "none",
  strokeWidth: "1.5",
  d: "M.599 2.504c2.427 3.213 2.214 2.957 2.214 2.957l3.94-5",
  "data-name": "Path 7419"
}));

exports.succesIcon = succesIcon;

const arrowIcon = className => /*#__PURE__*/_react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13.554",
  height: "7.207",
  viewBox: "0 0 13.554 7.207",
  className: "arrow-icon ".concat(className)
}, /*#__PURE__*/_react.default.createElement("g", {
  "data-name": "\u0421\u043B\u043E\u0439 2",
  transform: "rotate(180 6.923 3.75)"
}, /*#__PURE__*/_react.default.createElement("g", {
  "data-name": "\u2014\u043B\u043E\u0439_1",
  transform: "translate(1 1)"
}, /*#__PURE__*/_react.default.createElement("path", {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1",
  d: "M12.14 0L6.219 6 0 0",
  "data-name": "Path 7268"
})))); // stroke="#585858"


exports.arrowIcon = arrowIcon;

const calendarIcon = className => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 33 33",
    version: "1.1",
    viewBox: "0 0 33 33",
    xmlSpace: "preserve",
    className: "calendar-icon ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.5 0h-24A4.505 4.505 0 000 4.5v24C0 30.98 2.019 33 4.5 33h24c2.48 0 4.5-2.02 4.5-4.5v-24C33 2.019 30.98 0 28.5 0zm3 28.5c0 1.648-1.35 3-3 3h-24c-1.65 0-3-1.352-3-3v-24c0-1.649 1.35-3 3-3h24c1.65 0 3 1.351 3 3v24z"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "9.25",
    cy: "4.773",
    r: "1.273"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "16.5",
    cy: "4.773",
    r: "1.273"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "23.75",
    cy: "4.773",
    r: "1.273"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.134 12.902H15.73V16.99H11.134z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.271 12.902H21.866V16.99H17.271z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.404 12.902H28V16.99H23.404z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 18.359H9.594999999999999V22.445H5z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.134 18.359H15.73V22.445H11.134z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.271 18.359H21.866V22.445H17.271z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.404 18.359H28V22.445H23.404z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5 23.816H9.594999999999999V27.902H5z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M11.134 23.816H15.73V27.902H11.134z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.271 23.816H21.866V27.902H17.271z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M23.404 23.816H28V27.902H23.404z"
  }));
};

exports.calendarIcon = calendarIcon;

const clearIcon = className => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 413.348 413.348",
    className: "clear-icon ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
  }));
};

exports.clearIcon = clearIcon;