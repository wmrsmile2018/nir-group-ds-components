"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _DescriptionTag = require("./DescriptionTag/");

var _FileTagContext = require("./FileTagContext");

var _GenerateFile = require("./GenerateFile/");

var _OpenFile = require("./OpenFile/");

var _UploadFile = require("./UploadFile/");

var _FileTagGroup = require("./FileTagGroup/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.template-tag,\n.upload-photo {\n  width: 136px;\n  height: 174px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 3px;\n  position: relative; }\n  .template-tag.open-img,\n  .upload-photo.open-img {\n    background-image: url(\"./svg/bg.svg\");\n    color: white; }\n  .template-tag.open-pdf,\n  .upload-photo.open-pdf {\n    border: 0.5px solid #a2a0a1;\n    color: #585858; }\n  .template-tag .template-tag__clear,\n  .upload-photo .template-tag__clear {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    right: 10px;\n    top: 5px;\n    transition: fill 0.2s;\n    cursor: pointer; }\n    .template-tag .template-tag__clear:hover,\n    .upload-photo .template-tag__clear:hover {\n      fill: #f51010; }\n  .template-tag .template-tag__title,\n  .upload-photo .template-tag__title {\n    width: 111px;\n    margin-left: 4px;\n    font-size: 16px;\n    flex: 1 0 auto;\n    margin-top: 11px;\n    line-height: 17px; }\n  .template-tag .template-tag__subtitle,\n  .upload-photo .template-tag__subtitle {\n    width: 101px;\n    font-size: 9px;\n    flex: 0 0 auto;\n    margin-bottom: 4px; }\n  .template-tag .template-tag__button,\n  .upload-photo .template-tag__button {\n    border-radius: 1px;\n    width: 104px;\n    flex-shrink: 0;\n    margin-bottom: 14px;\n    font-size: 13px; }\n    .template-tag .template-tag__button.disabled,\n    .upload-photo .template-tag__button.disabled {\n      color: white;\n      background: #a2a0a1; }\n\n.upload-photo,\n.upload-file {\n  border: 0.5px solid #a2a0a1;\n  box-sizing: border-box; }\n  .upload-photo .upload-photo__image,\n  .upload-file .upload-photo__image {\n    margin-top: 16px;\n    width: 104px;\n    height: 96px;\n    flex: 1 0 auto;\n    background-repeat: no-repeat;\n    background-image: url(\"./svg/uploadPhoto.svg\"); }\n  .upload-photo .upload-file__image,\n  .upload-file .upload-file__image {\n    margin-top: 16px;\n    width: 104px;\n    height: 96px;\n    flex: 1 0 auto;\n    background-repeat: no-repeat;\n    background-image: url(\"./svg/uploadFile.svg\"); }\n";
  const fileName = "reac_FileTag";
  const element = document.querySelector("style[data-sass-component='reac_FileTag']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const FileTag = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    className,
    modificators,
    title,
    onClick,
    subtitle,
    disabled,
    src,
    children,
    typeId,
    // для загрузки, чтобы понять, определенные документы или любые
    type,
    // чтобы понять, генерировать, открывать или загружать
    typeFile,
    // для проверки на img или pdf
    onDelete // для удаления добавленного файла

  } = _ref;
  const classes = (0, _clsx.default)("file-tag", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(_FileTagContext.FileTagContext.Provider, {
    value: {
      title,
      onClick,
      subtitle,
      disabled,
      typeId,
      src,
      typeFile,
      onDelete
    }
  }, type === "generate" && /*#__PURE__*/_react.default.createElement(_GenerateFile.GenerateFile, null, children), type === "upload" && /*#__PURE__*/_react.default.createElement(_UploadFile.UploadFile, null), type === "open" && /*#__PURE__*/_react.default.createElement(_OpenFile.OpenFile, null)));
});

FileTag.GenerateFile = _GenerateFile.GenerateFile;
FileTag.OpenFile = _OpenFile.OpenFile;
FileTag.UploadFile = _UploadFile.UploadFile;
FileTag.DescriptionTag = _DescriptionTag.DescriptionTag;
FileTag.FileTagGroup = _FileTagGroup.FileTagGroup;
FileTag.DescriptionTag = _DescriptionTag.DescriptionTag;
var _default = FileTag;
exports.default = _default;
FileTag.propTypes = {
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  title: _propTypes.default.string,
  onClick: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  subtitle: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  src: _propTypes.default.string,
  children: _propTypes.default.node,
  typeId: _propTypes.default.string,
  type: _propTypes.default.oneOf(["generate", "open", "upload"]).isRequired,
  typeFile: _propTypes.default.oneOf(["pdf", "img"])
};
FileTag.defaultProps = {
  className: "",
  modificators: "",
  title: "",
  onClick: () => {},
  onDelete: null,
  subtitle: "",
  disabled: false,
  src: "",
  children: null,
  typeId: "",
  typeFile: "pdf"
};