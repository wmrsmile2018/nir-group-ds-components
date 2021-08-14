"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DSModalContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DSModalContainer = _ref => {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, " ds-modal-container")
  }, children);
};

exports.DSModalContainer = DSModalContainer;
DSModalContainer.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};