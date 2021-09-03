"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _autosize = _interopRequireDefault(require("autosize"));

const _excluded = ["className", "modificators", "title", "value", "onChange", "name", "id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.auto-size-input {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-sizing: border-box; }\n  .auto-size-input .auto-size-input__title {\n    font-size: 16px;\n    color: #a2a0a1;\n    margin-bottom: 4px; }\n  .auto-size-input .auto-size-input__textarea {\n    width: 100%;\n    height: 40px;\n    font-size: 16px;\n    color: #585858;\n    padding: 10px;\n    box-sizing: border-box;\n    border-color: #a2a0a1;\n    border-radius: 5px;\n    outline: none; }\n    .auto-size-input .auto-size-input__textarea:hover {\n      border-color: #1ea7ff; }\n    .auto-size-input .auto-size-input__textarea:focus {\n      border-color: #0e7abf; }\n";
  const fileName = "reac_AutoSizeInput";
  const element = document.querySelector("style[data-sass-component='reac_AutoSizeInput']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const AutoSizeInput = _ref => {
  let {
    className,
    modificators,
    title,
    value,
    onChange,
    name,
    id
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const textarea = (0, _react.useRef)(null);
  const val = (0, _react.useMemo)(() => {
    if (value === null) {
      return undefined;
    }

    return typeof value === "string" ? value : value[name];
  }, [value]);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("auto-size-input", className, modificators);
  (0, _react.useEffect)(() => {
    (0, _autosize.default)(textarea);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "auto-size-input__title",
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement("textarea", _extends({
    className: "auto-size-input__textarea",
    ref: _autosize.default,
    rows: 1,
    onChange: onChange,
    name: name,
    id: newId,
    value: val
  }, rest)));
};

var _default = /*#__PURE__*/_react.default.memo(AutoSizeInput);

exports.default = _default;
AutoSizeInput.propTypes = {
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  title: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onChange: _propTypes.default.func,
  name: _propTypes.default.string,
  id: _propTypes.default.string
};
AutoSizeInput.defaultProps = {
  className: "",
  modificators: "",
  title: "",
  value: null,
  name: "",
  id: "",
  onChange: () => {}
};