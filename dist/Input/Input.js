"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uuid = require("uuid");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputGroup = require("./InputGroup/");

var _InputDate = require("./InputDate/");

var _AutoSizeInput = require("./AutoSizeInput/");

var _InputList = require("./InputList/");

require("./Input.scss");

const _excluded = ["className", "modificators", "title", "id", "onChange", "value", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Input = _ref => {
  let {
    className,
    modificators,
    title,
    id,
    onChange,
    value,
    name
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const val = (0, _react.useMemo)(() => {
    if (value === null) {
      return undefined;
    }

    return typeof value === "string" ? value : value[name];
  }, [value]);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("input", className, {
    ["".concat(modificators)]: modificators
  });
  return /*#__PURE__*/_react.default.createElement("label", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input__title",
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement("input", _extends({
    value: val,
    onChange: onChange,
    id: newId,
    name: name
  }, rest)));
};

var _default = Input;
exports.default = _default;
Input.InputGroup = _InputGroup.InputGroup;
Input.InputDate = _InputDate.InputDate;
Input.AutoSizeInput = _AutoSizeInput.AutoSizeInput;
Input.InputList = _InputList.InputList;
Input.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onChange: _propTypes.default.func
};
Input.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  value: null,
  onChange: () => {}
};