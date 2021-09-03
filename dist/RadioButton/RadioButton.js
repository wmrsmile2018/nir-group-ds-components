"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _clsx = _interopRequireDefault(require("clsx"));

var _RadioGroup = require("./RadioGroup/");

const _excluded = ["className", "text", "noBorder", "disabled", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".radio-button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 8px 30px 10px 15px;\n  background-color: #ecedec;\n  border-radius: 5px; }\n  .radio-button--noborder {\n    border: none;\n    background-color: transparent;\n    padding: 0; }\n  .radio-button--blue {\n    background-color: #e8f2f4;\n    color: #05406f; }\n  .radio-button .radio-button__text {\n    color: #585858;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    line-height: 15px; }\n  .radio-button--disabled {\n    pointer-events: none; }\n\n.radio-button-box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  min-width: 15px;\n  background-color: #0e7abf;\n  border-radius: 50%;\n  position: relative;\n  margin-right: 7px;\n  transition: all 0.3s; }\n  .radio-button-box > span {\n    width: 13px;\n    height: 13px;\n    min-width: 12px;\n    border-radius: 50%;\n    background-color: white;\n    display: block;\n    transition: background-color 0.3s; }\n\n.radio-button input[type=\"radio\"] {\n  display: none; }\n\n.radio-button input[type=\"radio\"]:checked + .radio-button-box > span {\n  width: 11px;\n  height: 11px;\n  min-width: 11px;\n  background-color: #0e7abf;\n  border: 2px solid white;\n  box-sizing: border-box;\n  border-radius: 50%; }\n\n.radio-button input[type=\"radio\"]:disabled + .radio-button__box {\n  background-color: #a2a0a1; }\n\n.radio-button input[type=\"radio\"]:disabled + .radio-button__box::before {\n  background-color: white; }\n\n.radio-button input[type=\"radio\"]:checked:disabled + .radio-button__box::before {\n  background-color: #a2a0a1; }\n\n.radio-button input[type=\"radio\"]:disabled ~ .radio-button__text {\n  transition: all 0.3s;\n  color: #a2a0a1; }\n\n.radio-button:hover {\n  cursor: pointer; }\n  .radio-button:hover input[type=\"radio\"]:not(:disabled) + .radio-button__box {\n    box-shadow: 0 0 3px #0e7abf70; }\n";
  const fileName = "reac_RadioButton";
  const element = document.querySelector("style[data-sass-component='reac_RadioButton']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const RadioButton = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    className,
    text,
    noBorder,
    disabled,
    id
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("radio-button", className, {
    "radio-button--noborder": noBorder
  }, {
    "radio-button--disabled": disabled
  });
  return /*#__PURE__*/_react.default.createElement("label", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "radio",
    className: "visually-hidden",
    id: newId
  }, rest)), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-button-box"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "radio-button__circle"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "radio-button__text",
    htmlFor: newId
  }, text));
});

var _default = RadioButton;
exports.default = _default;
RadioButton.RadioGroup = _RadioGroup.RadioGroup;
RadioButton.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  text: _propTypes.default.string,
  id: _propTypes.default.string,
  noBorder: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RadioButton.defaultProps = {
  className: "",
  onChange: () => {},
  text: "",
  id: "",
  noBorder: false,
  disabled: false
};