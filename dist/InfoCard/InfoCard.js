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
  const styles = ".arrow-icon {\n  stroke: #a2a0a1; }\n  .arrow-icon:hover {\n    stroke: #0e7abf; }\n  .arrow-icon.active {\n    transform: rotate(180deg); }\n  .arrow-icon.disabled:hover {\n    stroke: #a2a0a1; }\n\n.clear-icon:hover {\n  fill: #f51010; }\n\ninput {\n  outline: none;\n  border: none; }\n\np {\n  margin: 0; }\n\n.info-card {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  box-sizing: info-box; }\n  .info-card .info-card__title {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 14px; }\n  .info-card .info-card__information {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    overflow-wrap: break-word;\n    word-break: break-word; }\n";
  const fileName = "reac_InfoCard";
  const element = document.querySelector("style[data-sass-component='reac_InfoCard']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const InfoCard = _ref => {
  let {
    children,
    className,
    modificators,
    title
  } = _ref;
  const classes = (0, _clsx.default)("info-card", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "info-card__title"
  }, " ", title), /*#__PURE__*/_react.default.createElement("div", {
    className: "info-card__information"
  }, children));
};

var _default = /*#__PURE__*/_react.default.memo(InfoCard);

exports.default = _default;
InfoCard.propTypes = {
  children: _propTypes.default.node.isRequired,
  titlle: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  shadow: _propTypes.default.bool
};
InfoCard.defaultProps = {
  className: "",
  modificators: "",
  shadow: false,
  titlle: ""
};