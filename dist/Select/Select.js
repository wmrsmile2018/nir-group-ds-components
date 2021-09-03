"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _uuid = require("uuid");

var _icons = require("../icons");

var _Option = require("./Option/");

var _SelectContext = require("./SelectContext");

var _useHooks = require("../useHooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.select {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n  .select .select__title {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 14px;\n    line-height: 22px; }\n  .select .select-input-field {\n    display: flex;\n    justify-content: space-between;\n    padding: 11px 15px 11px 20px;\n    border: 1px solid #a2a0a1;\n    cursor: text; }\n    .select .select-input-field:hover {\n      border-color: #1ea7ff; }\n    .select .select-input-field:focus {\n      border-color: #0e7abf; }\n    .select .select-input-field .select-input__input-field {\n      width: 100%;\n      color: #585858;\n      font-size: 16px;\n      border: none;\n      position: relative;\n      background-color: white; }\n      .select .select-input-field .select-input__input-field::placeholder {\n        color: #a2a0a1; }\n    .select .select-input-field .select-input__arrow-icon {\n      cursor: pointer; }\n  .select.disabled .select-input-field,\n  .select.disabled .select-input__arrow-icon,\n  .select.disabled .select-input__input-field {\n    cursor: not-allowed; }\n    .select.disabled .select-input-field:not(.disable):hover,\n    .select.disabled .select-input__arrow-icon:not(.disable):hover,\n    .select.disabled .select-input__input-field:not(.disable):hover {\n      border-color: #a2a0a1;\n      fill: #a2a0a1;\n      stroke: #a2a0a1; }\n    .select.disabled .select-input-field:not(.disable):focus,\n    .select.disabled .select-input__arrow-icon:not(.disable):focus,\n    .select.disabled .select-input__input-field:not(.disable):focus {\n      box-shadow: none;\n      border-color: #a2a0a1;\n      fill: #a2a0a1;\n      stroke: #a2a0a1; }\n  .select .select-input-options {\n    position: absolute;\n    width: 100%;\n    height: fit-content;\n    background-color: white;\n    padding: 4px 00px;\n    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.302);\n    top: 82px;\n    z-index: 1; }\n";
  const fileName = "reac_Select";
  const element = document.querySelector("style[data-sass-component='reac_Select']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const Select = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    className,
    modificators,
    title,
    id,
    onChange: _onChange,
    onSelect,
    state,
    name,
    disabled,
    children
  } = _ref;
  const selectRef = (0, _react.useRef)(null);
  const [showOptions, dispatch] = (0, _react.useReducer)(showOptions => !disabled && !showOptions, false);
  const [value, setValue] = (0, _react.useState)(typeof state === "string" ? state : state[name], [state]);
  const [inputValue, setInputValue] = (0, _react.useState)(value);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("select", className, modificators, {
    disabled: disabled
  });

  const handleOnChange = _ref2 => {
    let {
      target
    } = _ref2;
    setInputValue(target.value);
  };

  (0, _useHooks.useOnClickOutside)(selectRef, () => {
    showOptions && dispatch();
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    onChange: () => !disabled && _onChange(value),
    ref: selectRef
  }, title && /*#__PURE__*/_react.default.createElement("p", {
    className: "select__title",
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "select-input-field",
    onClick: dispatch
  }, /*#__PURE__*/_react.default.createElement("input", {
    value: inputValue,
    placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430",
    className: "select-input__input-field",
    onChange: handleOnChange,
    name: name,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "select-input__arrow-icon"
  }, (0, _icons.arrowIcon)("select-input__icon ".concat((0, _clsx.default)({
    active: showOptions,
    disabled: disabled
  }))))), showOptions && /*#__PURE__*/_react.default.createElement("div", {
    className: "select-input-options"
  }, /*#__PURE__*/_react.default.createElement(_SelectContext.SelectContext.Provider, {
    value: {
      setInputValue,
      inputValue,
      onChange: _onChange,
      onSelect,
      setValue,
      dispatch,
      name
    }
  }, children)));
});

var _default = Select;
exports.default = _default;
Select.Option = _Option.Option;
Select.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  state: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onChange: _propTypes.default.func,
  modificators: _propTypes.default.string,
  onSelect: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};
Select.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  state: "",
  onChange: () => {},
  modificators: "",
  onSelect: () => {},
  disabled: false,
  children: null
};