"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _clsx = _interopRequireDefault(require("clsx"));

var _RadioGroup = require("./RadioGroup/");

require("./RadioButton.scss");

const _excluded = ["className", "text", "noBorder", "disabled", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const RadioButton = _ref => {
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
};

exports.RadioButton = RadioButton;
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