"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withHandlers = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withHandlers = props => WrappeedComponent => {
  return () => /*#__PURE__*/_react.default.createElement(WrappeedComponent, props);
};

exports.withHandlers = withHandlers;