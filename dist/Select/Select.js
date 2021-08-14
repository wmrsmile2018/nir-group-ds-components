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

require("./Select.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Select = _ref => {
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
};

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