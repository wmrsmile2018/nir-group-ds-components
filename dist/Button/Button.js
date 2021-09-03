"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

const _excluded = ["className", "size", "children", "shadow", "border", "color", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".button {\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  background-color: transparent;\n  height: 37px;\n  padding: 0; }\n  .button:hover, .button:focus {\n    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25); }\n  .button:active {\n    background-color: #f6f7f9; }\n  .button:disabled {\n    box-shadow: none;\n    cursor: not-allowed; }\n\n.button--large {\n  font-size: 1rem;\n  line-height: 1.25rem;\n  padding: 9px 0 9px 0;\n  max-width: 179px;\n  width: 179px;\n  border-radius: 5px; }\n\n.button--medium {\n  font-size: 16px;\n  line-height: 18px;\n  padding: 9px 0 9px 0;\n  max-width: 152px;\n  width: 152px;\n  border-radius: 5px; }\n\n.button--small {\n  font-size: 0.8125rem;\n  line-height: 1.125rem;\n  padding: 4px 20px 3px 20px;\n  max-width: 140px;\n  width: 140px;\n  border-radius: 3px; }\n\n.button--dashed {\n  border: 1px dashed; }\n\n.button--no-border {\n  border: none; }\n\n.button--default-color {\n  color: #0b7abf;\n  border-color: #0b7abf;\n  background-color: #ffffff; }\n\n.button--blue {\n  color: #0b7abf;\n  border: 1px solid #0b7abf;\n  background-color: #f1f7fb; }\n\n.button--solid-blue {\n  color: #fff;\n  background-color: #0b7abf; }\n  .button--solid-blue:active {\n    background-color: rgba(11, 122, 191, 0.5); }\n\n.button--green {\n  color: #238495;\n  border-color: #238495;\n  background-color: #e8f2f4; }\n\n.button--black {\n  color: #121212;\n  border-color: #121212;\n  border: 1px solid black; }\n\n.button--gray {\n  background-color: #a2a0a1;\n  color: white; }\n  .button--gray:active {\n    background-color: #585858; }\n\n.button--shadow {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161); }\n";
  const fileName = "reac_Button";
  const element = document.querySelector("style[data-sass-component='reac_Button']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})(); // size may be S, L
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

var _default = /*#__PURE__*/_react.default.memo(Button);

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