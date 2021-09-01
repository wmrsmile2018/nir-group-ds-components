"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _FileTagContext = require("../FileTagContext");

var _icons = require("../../icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OpenFile = () => {
  const {
    title,
    subtitle,
    disabled,
    typeFile,
    src,
    onDelete
  } = (0, _FileTagContext.useFileTag)();
  const classes = (0, _clsx.default)("open-file", "template-tag", {
    "open-img": typeFile === "img"
  }, {
    "open-pdf": typeFile === "pdf"
  });

  const handleOnClick = () => {
    window.open(src);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, onDelete && /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__clear",
    onClick: onDelete
  }, (0, _icons.clearIcon)("template-tag__icon")), title && /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__title"
  }, (0, _htmlReactParser.default)(title)), subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__subtitle"
  }, (0, _htmlReactParser.default)(subtitle)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "template-tag__button",
    color: "solidBlue",
    onClick: handleOnClick,
    disabled: disabled
  }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"));
};

var _default = /*#__PURE__*/_react.default.memo(OpenFile);

exports.default = _default;