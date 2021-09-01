"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

require("./CheckboxContainer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CheckboxContainer = _ref => {
  let {
    children,
    className,
    organization,
    registration,
    modificators
  } = _ref;
  const classes = (0, _clsx.default)("checkbox-container", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox__ontainer-wrapper"
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-container__description"
  }, organization && /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-container__organiztion"
  }, organization), registration && /*#__PURE__*/_react.default.createElement("p", {
    className: "checkbox-container__registration"
  }, registration)));
}; // export default React.memo(CheckboxContainer)


exports.CheckboxContainer = CheckboxContainer;
CheckboxContainer.propTypes = {
  children: _propTypes.default.node.isRequired,
  organization: _propTypes.default.string.isRequired,
  registration: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  modificators: _propTypes.default.string
};
CheckboxContainer.defaultProps = {
  className: "",
  modificators: ""
};