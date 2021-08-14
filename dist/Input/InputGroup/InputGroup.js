"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./InputGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InputGroup = _ref => {
  let {
    title,
    className,
    modificators,
    children
  } = _ref;
  const classes = (0, _clsx.default)("input-group", className, {
    [modificators]: modificators
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group__content"
  }, children));
};

exports.InputGroup = InputGroup;
InputGroup.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
InputGroup.defaultProps = {
  title: "",
  className: ""
};