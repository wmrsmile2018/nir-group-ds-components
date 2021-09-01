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

require("./FileTag.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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