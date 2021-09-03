"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDatePicker = _interopRequireDefault(require("react-date-picker"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uuid = require("uuid");

var _icons = require("../../icons");

const _excluded = ["className", "title", "id", "name", "modificators", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.input-date .input-date__title {\n  color: #a2a0a1;\n  font-size: 16px; }\n\n.input-date .react-date-picker__calendar {\n  width: 280px; }\n\n.input-date .react-date-picker {\n  height: 100%;\n  width: 100%; }\n  .input-date .react-date-picker .input-date__clear-icon {\n    width: 12px;\n    height: 12px;\n    transition: fill 0.2s; }\n  .input-date .react-date-picker .input-date__calendar-icon {\n    width: 15px;\n    height: 15px;\n    transition: fill 0.2s; }\n  .input-date .react-date-picker.react-date-picker--closed .input-date__clear-icon:hover {\n    fill: #f51010; }\n  .input-date .react-date-picker.react-date-picker--closed .input-date__calendar-icon:hover {\n    fill: #119be0; }\n  .input-date .react-date-picker.react-date-picker--open:hover {\n    border-color: #1ea7ff; }\n  .input-date .react-date-picker.react-date-picker--open:focus {\n    border-color: #0e7abf; }\n\n.input-date .react-date-picker__inputGroup__input {\n  background: none; }\n\n.input-date .react-calendar__navigation {\n  padding: 0 10px;\n  height: 40px;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 10px; }\n  .input-date .react-calendar__navigation > button {\n    transition: color 0.3s; }\n    .input-date .react-calendar__navigation > button:enabled:hover {\n      background: none; }\n  .input-date .react-calendar__navigation .react-calendar__navigation__arrow {\n    min-width: 22px;\n    color: #a2a0a1;\n    padding: 0;\n    font-size: 24px; }\n    .input-date .react-calendar__navigation .react-calendar__navigation__arrow:enabled:hover {\n      color: #585858; }\n  .input-date .react-calendar__navigation .react-calendar__navigation__label {\n    color: #585858;\n    font-weight: bold;\n    font-size: 16px; }\n    .input-date .react-calendar__navigation .react-calendar__navigation__label:enabled:hover {\n      color: #0e7abf; }\n\n.input-date .react-date-picker__wrapper {\n  border: 1px solid #a2a0a1;\n  border-radius: 5px; }\n  .input-date .react-date-picker__wrapper:hover {\n    border-color: #1ea7ff; }\n\n.input-date .react-date-picker__inputGroup {\n  padding: 10px;\n  color: #585858;\n  font-size: 16px; }\n\n.input-date .react-calendar__tile {\n  transition: background 0.3s, border 0.3s; }\n\n.input-date .react-calendar__month-view__days__day {\n  color: #585858; }\n\n.input-date .react-calendar__tile--now {\n  background: #0e7abf;\n  color: white; }\n  .input-date .react-calendar__tile--now:enabled:hover, .input-date .react-calendar__tile--nowenabled:focus {\n    background: #0e7abf;\n    color: white; }\n\n.input-date .react-calendar__tile--now {\n  color: white;\n  background: #119be0; }\n\n.input-date .react-calendar__month-view__days__day--weekend {\n  color: #f51010; }\n\n.input-date .react-calendar__month-view__days__day--neighboringMonth {\n  color: #e2e2e2; }\n\n.input-date .react-calendar__tile--active {\n  background: #0e7abf;\n  color: white; }\n";
  const fileName = "reac_InputDate";
  const element = document.querySelector("style[data-sass-component='reac_InputDate']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const InputDate = _ref => {
  let {
    className,
    title,
    id,
    name,
    modificators,
    value,
    onChange
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const val = (0, _react.useMemo)(() => {
    if (value === null) return null;
    return value instanceof Date ? value : value[name];
  }, [value]);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("input-date", className, {
    [modificators]: modificators
  });
  const handleOnChange = (0, _react.useCallback)(data => {
    onChange({
      target: {
        value: data,
        name
      }
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input-date__title",
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement(_reactDatePicker.default, _extends({
    id: newId,
    onChange: handleOnChange,
    value: val,
    clearIcon: (0, _icons.clearIcon)("input-date__clear-icon"),
    calendarIcon: (0, _icons.calendarIcon)("input-date__calendar-icon")
  }, rest)));
};

var _default = /*#__PURE__*/_react.default.memo(InputDate);

exports.default = _default;
InputDate.propTypes = {
  id: _propTypes.default.string,
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  modificators: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onChange: _propTypes.default.func
};
InputDate.defaultProps = {
  id: "",
  title: "",
  className: "",
  name: "",
  modificators: "",
  onChange: () => {},
  value: null
};

const Icon = () => {
  const [state, dispatch] = useReducer(state => !state, false);
  const classes = (0, _clsx.default)("icon", {
    toggle: state
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("img", {
    img: src1,
    onMouseEnter: dispatch
  }), /*#__PURE__*/_react.default.createElement("img", {
    img: src2
  }));
};

exports.Icon = Icon;