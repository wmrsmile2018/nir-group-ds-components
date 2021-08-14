"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

require("./Button.scss");

const _excluded = ["className", "size", "children", "shadow", "border", "color", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// size may be S, L
// shadow boolean
// border may be solid, dashed, none
// color may be default, black, green, blue
// button.add?
// button.delete?
const BUTTON_SIZE_CLASS = {
  "S": "button--small",
  "M": "button--medium",
  "L": "button--large",
  "": ""
};
const BUTTON_BORDER_CLASS = {
  solid: "",
  none: "button--no-border",
  dashed: "button--dashed"
};
const BUTTON_COLOR_CLASS = {
  default: "button--default-color",
  green: "button--green",
  blue: "button--blue",
  solidBlue: "button--solid-blue",
  black: "button--black",
  gray: "button--gray"
};

const Button = _ref => {
  let {
    className,
    size,
    children,
    shadow,
    border,
    color,
    disabled
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const classes = (0, _clsx.default)("button", className, {
    "disabled": disabled
  }, {
    "button--shadow": shadow
  }, BUTTON_SIZE_CLASS[size], BUTTON_COLOR_CLASS[color], BUTTON_BORDER_CLASS[border]);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: classes,
    disabled: disabled
  }, rest), children);
};

exports.Button = Button;
var _default = Button;
exports.default = _default;
Button.propTypes = {
  className: _propTypes.default.string,
  shadow: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["S", "M", "L", ""]),
  children: _propTypes.default.node.isRequired,
  border: _propTypes.default.oneOf(["solid", "dashed", "none"]),
  color: _propTypes.default.oneOf(["default", "green", "blue", "solidBlue", "black", "gray"])
};
Button.defaultProps = {
  color: "default",
  className: "",
  shadow: false,
  size: "",
  border: "none"
};