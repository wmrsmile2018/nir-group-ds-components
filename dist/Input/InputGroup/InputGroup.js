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
  const styles = ".input-group {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  .input-group .input-group__title {\n    color: #585858;\n    font-weight: bold;\n    font-size: 19px; }\n  .input-group .input-group__content > * {\n    margin-top: 14px; }\n";
  const fileName = "reac_InputGroup";
  const element = document.querySelector("style[data-sass-component='reac_InputGroup']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const InputGroup = _ref => {
  let {
    title,
    className,
    modificators,
    children
  } = _ref;
  const classes = (0, _clsx.default)("input-group", className, {
    [modificators]: modificators
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "input-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group__content"
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo(InputGroup);

exports.default = _default;
InputGroup.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
InputGroup.defaultProps = {
  title: "",
  className: ""
};