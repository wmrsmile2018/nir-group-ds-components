"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = _ref => {
  let {
    className,
    children,
    idNode
  } = _ref;
  const el = document.getElementById(idNode);
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    id: "portal",
    className: "modal ".concat(className)
  }, children), el);
};

var _default = Modal;
exports.default = _default;
Modal.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  idNode: _propTypes.default.string.isRequired
};
Modal.defaultProps = {
  className: ""
};