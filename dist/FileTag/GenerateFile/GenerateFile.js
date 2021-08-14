"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenerateFile = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _clsx = _interopRequireDefault(require("clsx"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _PdfGenerator = _interopRequireDefault(require("../../PdfGenerator/"));

var _FileTagContext = require("../FileTagContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GenerateFile = _ref => {
  let {
    children
  } = _ref;
  const [show, setShow] = (0, _react.useReducer)(show => !show, false);
  const {
    title,
    subtitle,
    disabled
  } = (0, _FileTagContext.useFileTag)();
  const classes = (0, _clsx.default)("generate-file", "template-tag", "open-pdf");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, title && /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__title"
  }, (0, _htmlReactParser.default)(title)), subtitle && /*#__PURE__*/_react.default.createElement("p", {
    className: "template-tag__subtitle"
  }, (0, _htmlReactParser.default)(subtitle)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "template-tag__button",
    color: "solidBlue",
    onClick: setShow,
    disabled: disabled
  }, "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"), show && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "none"
    }
  }, /*#__PURE__*/_react.default.createElement(_PdfGenerator.default, null, children)));
};

exports.GenerateFile = GenerateFile;
GenerateFile.propTypes = {
  children: _propTypes.default.node.isRequired
};