"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

require("./Navigation.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Navigation = _ref => {
  let {
    options
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav__list"
  }, options.links.map((link, i) => /*#__PURE__*/_react.default.createElement("li", {
    className: "nav__list-item",
    key: "nav-item-".concat(i)
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: link.to,
    className: "nav__list-item-link",
    activeClassName: "nav__list-item-link--active",
    exact: false,
    isActive: link.isActive ? link.isActive : match => !!match
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: link.width,
    height: link.height
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: link.iconHref
  })), link.text)))));
};

Navigation.propTypes = {
  options: _propTypes.default.shape({
    links: _propTypes.default.arrayOf(_propTypes.default.shape({
      to: _propTypes.default.string,
      iconHref: _propTypes.default.string,
      text: _propTypes.default.string,
      width: _propTypes.default.string,
      height: _propTypes.default.string
    }))
  })
};
var _default = Navigation;
exports.default = _default;