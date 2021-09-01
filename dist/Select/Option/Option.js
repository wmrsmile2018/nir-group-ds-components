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

require("./Option.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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