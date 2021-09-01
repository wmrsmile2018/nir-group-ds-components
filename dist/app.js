"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _test = require("./test");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./style.scss";
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_test.TestComponent, null), document.getElementById("root"));