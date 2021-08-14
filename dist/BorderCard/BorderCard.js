"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./BorderCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _default = BorderCard;
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