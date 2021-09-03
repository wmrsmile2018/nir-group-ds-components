"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".info-block {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  line-height: 18px;\n  color: #a2a0a1; }\n\n.info-block__value {\n  color: #585858; }\n  .info-block__value--no-data {\n    color: #ba4545; }\n";
  const fileName = "reac_InfoBlock";
  const element = document.querySelector("style[data-sass-component='reac_InfoBlock']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

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

var _default = /*#__PURE__*/_react.default.memo(InfoBlock);

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