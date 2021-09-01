"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./RadioGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioGroup = _ref => {
  let {
    title,
    onChange,
    children,
    value,
    className
  } = _ref;
  const classes = (0, _clsx.default)("radio-group", className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    onChange: onChange,
    value: value
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "radio-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "radio-group__content"
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo(RadioGroup);

exports.default = _default;
RadioGroup.propTypes = {
  onChange: _propTypes.default.func,
  value: _propTypes.default.any,
  className: _propTypes.default.string,
  children: _propTypes.default.arrayOf(_propTypes.default.element).isRequired
};
RadioGroup.defaultProps = {
  onChange: () => {},
  value: null,
  className: ""
};