"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

require("./Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = _ref => {
  let {
    logoLink,
    logo,
    userNav,
    appNav
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header__logo"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: logoLink
  }, logo)), /*#__PURE__*/_react.default.createElement("div", {
    className: "header__user-nav"
  }, userNav)), /*#__PURE__*/_react.default.createElement("div", {
    className: "header__app-nav"
  }, appNav));
};

Header.propTypes = {
  logo: _propTypes.default.node,
  logoLink: _propTypes.default.string,
  userNav: _propTypes.default.node,
  appNav: _propTypes.default.node
};
var _default = Header;
exports.default = _default;