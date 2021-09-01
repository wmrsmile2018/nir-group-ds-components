"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = require("uuid");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckboxContainer = require("./CheckboxContainer/");

var _CheckboxGroup = require("./CheckboxGroup/");

require("./Checkbox.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Checkbox = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    className,
    isLeft,
    title,
    name,
    onChange,
    checked,
    value,
    modificators,
    id,
    disabled
  } = _ref;
  const flag = (0, _react.useMemo)(() => checked ? "active" : "inactive", []);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const inputRef = (0, _react.useRef)(null);
  const classes = (0, _clsx.default)("checkbox", className, {
    isLeft: isLeft
  }, {
    isRight: !isLeft
  }, {
    disabled: disabled
  }, modificators);

  const handleOnClick = () => {
    inputRef.current.click();
  }; // const handleOnChange = () => {
  //   onChange(!checked);
  // };
  // const handleOnChange = (evt) => {
  //   onChange(evt);
  // };


  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, isLeft && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__box ".concat(flag),
    onClick: handleOnClick
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: checked,
    ref: inputRef,
    onChange: onChange,
    value: value,
    name: name,
    id: newId,
    disabled: disabled
  })), !isLeft && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: newId
  }, title));
});

var _default = Checkbox;
exports.default = _default;
Checkbox.CheckboxContainer = _CheckboxContainer.CheckboxContainer;
Checkbox.CheckboxGroup = _CheckboxGroup.CheckboxGroup;
Checkbox.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  name: _propTypes.default.string,
  isLeft: _propTypes.default.bool,
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  modificators: _propTypes.default.string
};
Checkbox.defaultProps = {
  className: "",
  title: "",
  name: "",
  modificators: "",
  isLeft: false,
  checked: false,
  onChange: () => {}
};