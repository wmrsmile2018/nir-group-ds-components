"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sprite = _interopRequireDefault(require("../../../images/sprite.svg"));

require("./HeaderRightPanel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RightPanel = _ref => {
  let {
    userName,
    userCaption,
    notifyCount,
    exitApplication,
    onNotificationsClickHandler
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__notify-post"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__notifications",
    onClick: onNotificationsClickHandler
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "21",
    height: "25"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "".concat(_sprite.default, "#bell-icon")
  })), notifyCount !== 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__notifications-count"
  }, notifyCount)), /*#__PURE__*/_react.default.createElement("svg", {
    className: "right-panel__post-icon",
    width: "30",
    height: "22"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "".concat(_sprite.default, "#letter-icon")
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__user-info-container"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "right-panel__avatar-icon",
    width: "30",
    height: "30"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "".concat(_sprite.default, "#avatar-icon")
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__user-info"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "right-panel__user-name"
  }, userName), /*#__PURE__*/_react.default.createElement("p", {
    className: "right-panel__user-organization"
  }, userCaption))), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-panel__exit",
    onClick: exitApplication
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "22",
    height: "28"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "".concat(_sprite.default, "#exit-icon")
  })), /*#__PURE__*/_react.default.createElement("p", null, "\u0412\u044B\u0439\u0442\u0438")));
};

RightPanel.propTypes = {
  notifyCount: _propTypes.default.number,
  userName: _propTypes.default.string,
  userCaption: _propTypes.default.string,
  organization: _propTypes.default.object,
  exitApplication: _propTypes.default.func,
  onNotificationsClickHandler: _propTypes.default.func
};
var _default = RightPanel;
exports.default = _default;