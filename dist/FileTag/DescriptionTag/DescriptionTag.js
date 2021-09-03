"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.description-tag {\n  display: flex;\n  flex-direction: column;\n  width: min-content; }\n  .description-tag .description-tag-informations {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    height: 77px;\n    font-size: 13px;\n    margin-top: 16px;\n    margin-left: 9px; }\n    .description-tag .description-tag-informations .description-tag-informations__prepared > p {\n      margin-bottom: 4px; }\n    .description-tag .description-tag-informations .description-tag__information {\n      line-height: 16px; }\n      .description-tag .description-tag-informations .description-tag__information > span,\n      .description-tag .description-tag-informations .description-tag__information > p {\n        color: #a2a0a1;\n        margin-right: 5px; }\n";
  const fileName = "reac_DescriptionTag";
  const element = document.querySelector("style[data-sass-component='reac_DescriptionTag']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

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

var _default = /*#__PURE__*/_react.default.memo(DescriptionTag);

exports.default = _default;
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