"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".checkbox-container .checkbox-container__description {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: 38px;\n  margin-top: 6px;\n  margin-bottom: 3px;\n  font-size: 13px;\n  margin-left: 28px;\n  line-height: 16px;\n  gap: 6px; }\n\n.checkbox-container .checkbox-container__organiztion {\n  color: #a2a0a1; }\n\n.checkbox-container .checkbox-container__registration {\n  color: #fcc875; }\n";
  const fileName = "reac_CheckboxContainer";
  const element = document.querySelector("style[data-sass-component='reac_CheckboxContainer']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const CheckboxContainer = _ref => {
  let {
    children,
    className,
    organization,
    registration,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("checkbox-container", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__ontainer-wrapper"
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-container__description"
  }, organization && /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-container__organiztion"
  }, organization), registration && /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-container__registration"
  }, registration)));
}; // export default React.memo(CheckboxContainer)


exports.CheckboxContainer = CheckboxContainer;
CheckboxContainer.propTypes = {
  children: _propTypes.default.node.isRequired,
  organization: _propTypes.default.string.isRequired,
  registration: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string
};
CheckboxContainer.defaultProps = {
  className: "",
  modificators: ""
};