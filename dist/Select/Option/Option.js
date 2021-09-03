"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SelectContext = require("../SelectContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.option {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n  display: flex;\n  color: #585858;\n  font-size: 16px;\n  line-height: 18px;\n  padding: 0px 20px;\n  box-sizing: border-box;\n  cursor: pointer; }\n  .option:hover {\n    background-color: #1ea7ff33; }\n  .option.disabled {\n    cursor: not-allowed;\n    background-color: #a2a0a14d; }\n    .option.disabled:hover {\n      background-color: #a2a0a14d; }\n";
  const fileName = "reac_Option";
  const element = document.querySelector("style[data-sass-component='reac_Option']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const Option = _ref => {
  let {
    className,
    modificators,
    value,
    title,
    disabled
  } = _ref;
  const classes = (0, _clsx.default)("option", className, modificators, {
    disabled: disabled
  });
  const {
    onChange,
    onSelect,
    setValue,
    dispatch,
    name,
    inputValue,
    setInputValue
  } = (0, _SelectContext.useSelect)();

  const handleOnClick = () => {
    if (!disabled) {
      setInputValue(title);
      onChange({
        name,
        value
      });
      onSelect({
        name,
        value
      });
      setValue(value);
      dispatch();
    }
  };

  return title.includes(inputValue) ? /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    onClick: handleOnClick
  }, title) : null;
};

var _default = /*#__PURE__*/_react.default.memo(Option);

exports.default = _default;
Option.propTypes = {
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool
};
Option.defaultProps = {
  className: "",
  disabled: false,
  modificators: ""
};