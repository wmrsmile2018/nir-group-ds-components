"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _uuid = require("uuid");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icons = require("../../icons");

var _Button = _interopRequireDefault(require("../../Button/"));

const _excluded = ["className", "modificators", "title", "id", "onChange", "state", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.input-list {\n  display: flex;\n  width: 100%;\n  flex-direction: column; }\n  .input-list .input-list__title {\n    color: #a2a0a1;\n    font-size: 16px;\n    line-height: 18px;\n    margin-bottom: 4px; }\n  .input-list .input-list-inputfield {\n    display: flex;\n    height: 40px;\n    font-size: 16px;\n    position: relative; }\n    .input-list .input-list-inputfield .input-list__button {\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 100%;\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px;\n      width: 94px; }\n    .input-list .input-list-inputfield > input {\n      width: 100%;\n      height: 100%;\n      color: #585858;\n      padding: 10px;\n      padding-right: 104px;\n      border-radius: 5px;\n      border: 1px solid #a2a0a1;\n      background: none;\n      box-sizing: border-box; }\n      .input-list .input-list-inputfield > input:hover {\n        border-color: #1ea7ff; }\n      .input-list .input-list-inputfield > input:focus {\n        border-color: #0e7abf; }\n  .input-list .input-list-array {\n    margin-top: 14px;\n    display: flex;\n    gap: 10px;\n    flex-wrap: wrap; }\n    .input-list .input-list-array > div {\n      display: flex;\n      align-items: center;\n      height: 32px;\n      background-color: #0e7abe33;\n      color: #0e7abf;\n      font-size: 16px;\n      line-height: 18px;\n      padding: 7px 10px 7px 8px; }\n      .input-list .input-list-array > div .input-list-array-element__clear {\n        margin-left: 32px;\n        height: 12px;\n        width: 12px;\n        cursor: pointer; }\n        .input-list .input-list-array > div .input-list-array-element__clear:hover {\n          fill: #f51010; }\n";
  const fileName = "reac_InputList";
  const element = document.querySelector("style[data-sass-component='reac_InputList']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const InputList = _ref => {
  let {
    className,
    modificators,
    title,
    id,
    onChange,
    state,
    name
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  // const value = useMemo(() => (typeof state === "string" ? state : state[name]), [state]);
  const [value, setValue] = (0, _react.useState)("");
  const [list, setList] = (0, _react.useState)(state);
  const newId = (0, _react.useMemo)(() => id || (0, _uuid.v4)(), []);
  const classes = (0, _clsx.default)("input-list", className, {
    ["".concat(modificators)]: modificators
  });

  const handleOnAdd = () => {
    const newValue = [...list, value];

    if (value && list.indexOf(value) === -1) {
      onChange({
        target: {
          value: newValue,
          name
        }
      });
      setList(newValue);
    }
  };

  const handleOnChange = _ref2 => {
    let {
      target
    } = _ref2;
    setValue(target.value);
  };

  const handleOnDelete = val => {
    const newValue = list.filter(el => el !== val);
    onChange({
      target: {
        value: newValue,
        name
      }
    });
    setList(newValue);
  };

  return /*#__PURE__*/_react.default.createElement("label", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input-list__title",
    htmlFor: newId
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-list-inputfield"
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    value: value,
    onChange: handleOnChange,
    id: newId,
    name: name
  }, rest)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "input-list__button",
    color: "blue",
    onClick: handleOnAdd
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-list-array"
  }, list.map(el => /*#__PURE__*/_react.default.createElement("div", {
    className: "input-list-array-element",
    key: (0, _uuid.v4)()
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input-list-array-element__text"
  }, el), /*#__PURE__*/_react.default.createElement("p", {
    className: "input-list-array-element__clear",
    onClick: () => {
      handleOnDelete(el);
    }
  }, (0, _icons.clearIcon)("input-list-array-element__icon"))))));
};

var _default = /*#__PURE__*/_react.default.memo(InputList);

exports.default = _default;
InputList.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  state: _propTypes.default.arrayOf(_propTypes.default.string),
  onChange: _propTypes.default.func
};
InputList.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  state: "",
  onChange: () => {}
};