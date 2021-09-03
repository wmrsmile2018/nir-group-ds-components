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
  const styles = ".file-tag-group {\n  display: flex;\n  flex-direction: column; }\n  .file-tag-group .file-tag-group__title {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 2px;\n    margin-bottom: 14px; }\n  .file-tag-group .file-tag-group__content {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 30px;\n    column-gap: 20px; }\n";
  const fileName = "reac_FileTagGroup";
  const element = document.querySelector("style[data-sass-component='reac_FileTagGroup']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const FileTagGroup = _ref => {
  let {
    title,
    children,
    className,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("file-tag-group", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "file-tag-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "file-tag-group__content"
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo(FileTagGroup);

exports.default = _default;
FileTagGroup.propTypes = {
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
FileTagGroup.defaultProps = {
  title: "",
  className: "",
  modificators: ""
};