"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./InfoCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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