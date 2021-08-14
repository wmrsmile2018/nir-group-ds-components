"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhotoGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./PhotoGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PhotoGroup = _ref => {
  let {
    title,
    className,
    modificators,
    children
  } = _ref;
  const classes = (0, _clsx.default)("photo-group", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "photo-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-group__content"
  }, children));
};

exports.PhotoGroup = PhotoGroup;
PhotoGroup.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
PhotoGroup.defaultProps = {
  title: "",
  className: ""
};