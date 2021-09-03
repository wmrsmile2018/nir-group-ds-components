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
  const styles = ".photo-group {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%; }\n  .photo-group .photo-group__title {\n    color: #585858;\n    font-weight: bold;\n    font-size: 19px; }\n  .photo-group .photo-group__content > * {\n    margin-top: 14px; }\n";
  const fileName = "reac_PhotoGroup";
  const element = document.querySelector("style[data-sass-component='reac_PhotoGroup']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const PhotoGroup = _ref => {
  let {
    title,
    className,
    modificators,
    children
  } = _ref;
  const classes = (0, _clsx.default)("photo-group", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "photo-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-group__content"
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo(PhotoGroup);

exports.default = _default;
PhotoGroup.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
PhotoGroup.defaultProps = {
  title: "",
  className: ""
};