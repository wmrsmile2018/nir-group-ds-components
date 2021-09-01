"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _weakKey = _interopRequireDefault(require("weak-key"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _FileTagContext = require("../FileTagContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UploadFile = () => {
  const {
    onClick,
    title,
    subtitle,
    disabled,
    typeId,
    typeFile
  } = (0, _FileTagContext.useFileTag)();
  const classes = (0, _clsx.default)("template-tag", {
    "upload-file": typeFile === "pdf"
  }, {
    "upload-photo": typeFile === "img"
  });
  const inputRef = (0, _react.useRef)(null);

  const handleOnClick = () => {
    inputRef.current.click();
  };

  const handleOnUpload = () => {
    onClick(inputRef.current.files[0]);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, typeId ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__title"
  }, (0, _htmlReactParser.default)(title)), /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__subtitle"
  }, (0, _htmlReactParser.default)(subtitle))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeFile === "pdf" && /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-file__image"
  }), typeFile === "img" && /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-photo__image"
  }), " "), /*#__PURE__*/_react.default.createElement("input", {
    style: {
      display: "none"
    },
    accept: (0, _clsx.default)({
      "application/pdf": typeFile === "pdf",
      "image/*": typeFile === "img"
    }),
    type: "file",
    ref: inputRef,
    onChange: handleOnUpload
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "template-tag__button",
    color: "gray",
    onClick: handleOnClick,
    disabled: disabled
  }, typeId ? "Загрузить" : typeFile === "pdf" ? "Другой документ" : "Добавить фото"));
};

var _default = /*#__PURE__*/_react.default.memo(UploadFile);

exports.default = _default;