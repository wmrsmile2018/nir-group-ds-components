"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DescriptionTag = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./DescriptionTag.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DescriptionTag = _ref => {
  let {
    className,
    children,
    modificators,
    prepared,
    date
  } = _ref;
  const classes = (0, _clsx.default)("description-tag", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "description-tag__content"
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "description-tag-informations"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "description-tag__information description-tag-informations__prepared"
  }, /*#__PURE__*/_react.default.createElement("p", null, "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D:"), prepared ? prepared : "Нет Данных"), /*#__PURE__*/_react.default.createElement("div", {
    className: "description-tag__information description-tag-informations__date"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u0414\u0430\u0442\u0430:"), date ? date : "Нет Данных")));
};

exports.DescriptionTag = DescriptionTag;
DescriptionTag.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  modificators: _propTypes.default.string,
  prepared: _propTypes.default.string,
  date: _propTypes.default.string
};
DescriptionTag.defaultProps = {
  className: "",
  modificators: "",
  prepared: "",
  date: ""
};