"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./CheckboxGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CheckboxGroup = _ref => {
  let {
    title,
    children,
    className,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("checkbox-group", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-group__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-group__content"
  }, children));
}; // export default React.memo(CheckboxGroup)


exports.CheckboxGroup = CheckboxGroup;
CheckboxGroup.propTypes = {
  title: _propTypes.default.string,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
CheckboxGroup.defaultProps = {
  title: "",
  className: "",
  modificators: ""
};