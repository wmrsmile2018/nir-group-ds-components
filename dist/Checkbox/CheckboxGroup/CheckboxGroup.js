"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".checkbox-group {\n  display: flex;\n  flex-direction: column; }\n  .checkbox-group .checkbox-group__title {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 2px; }\n  .checkbox-group .checkbox-group__content {\n    display: flex;\n    flex-direction: column; }\n    .checkbox-group .checkbox-group__content > div {\n      margin-top: 12px; }\n";
  const fileName = "reac_CheckboxGroup";
  const element = document.querySelector("style[data-sass-component='reac_CheckboxGroup']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const CheckboxGroup = _ref => {
  let {
    title,
    children,
    className,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("checkbox-group", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-group__content"
  }, children));
}; // export default React.memo(CheckboxGroup)


exports.CheckboxGroup = CheckboxGroup;
CheckboxGroup.propTypes = {
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
CheckboxGroup.defaultProps = {
  title: "",
  className: "",
  modificators: ""
};