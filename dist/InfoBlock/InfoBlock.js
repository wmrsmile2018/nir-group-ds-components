"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./InfoBlock.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getIsEmpty = value => {
  if (typeof value === "string") {
    return value === "" || value === null || value === undefined || value === "Данные отсутствуют";
  }

  return false;
};

const InfoBlock = _ref => {
  let {
    label,
    value,
    className,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("info-block", className, modificators);
  const isEmptyValue = getIsEmpty(value);
  return /*#__PURE__*/_react.default.createElement("p", {
    className: classes
  }, "".concat(label, ": "), /*#__PURE__*/_react.default.createElement("span", {
    className: "info-block__value ".concat(isEmptyValue && "info-block__value--no-data")
  }, isEmptyValue ? "Данные отсутствуют" : value));
};

var _default = InfoBlock;
exports.default = _default;
InfoBlock.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string
};
InfoBlock.defaultProps = {
  label: "",
  value: "",
  className: "",
  modificators: ""
};