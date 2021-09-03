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
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.border-card {\n  width: 1200px;\n  display: flex;\n  padding: 17px 30px 30px 40px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.161);\n  border-left: 5px solid #0e7abf;\n  box-sizing: border-box;\n  justify-content: space-between; }\n  .border-card .border-card__title {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 23px; }\n  .border-card .border-card-content {\n    width: 800px;\n    display: flex;\n    flex-direction: column; }\n  .border-card .border-card-content__information {\n    width: 800px;\n    text-align: justify; }\n  .border-card .border-card__tags {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 292px;\n    margin-top: 13px;\n    gap: 20px;\n    justify-content: flex-end; }\n  .border-card .border-card__information {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    overflow-wrap: break-word;\n    word-break: break-word; }\n";
  const fileName = "reac_BorderCard";
  const element = document.querySelector("style[data-sass-component='reac_BorderCard']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const BorderCard = _ref => {
  let {
    children,
    className,
    modificators,
    title,
    tags
  } = _ref;
  const classes = (0, _clsx.default)("border-card", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-card-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "border-card__title"
  }, " ", title), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-card__information"
  }, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "border-card__tags"
  }, tags));
};

var _default = /*#__PURE__*/_react.default.memo(BorderCard);

exports.default = _default;
BorderCard.propTypes = {
  children: _propTypes.default.node.isRequired,
  tags: _propTypes.default.arrayOf(_propTypes.default.node),
  titlle: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  shadow: _propTypes.default.bool
};
BorderCard.defaultProps = {
  className: "",
  modificators: "",
  shadow: false,
  tags: [],
  titlle: ""
};