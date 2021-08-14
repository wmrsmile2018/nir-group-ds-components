"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountModalInfoBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _comp = _interopRequireDefault(require("./svg/comp.svg"));

require("./AccountModalInfoBlock.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccountModalInfoBlock = _ref => {
  let {
    showSkip = true,
    showUnavailable = false,
    handleOnClickGoToSettings,
    handleOnClickSkip,
    title
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "account-modal-info-block"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "account-modal-info-block--title"
  }, showUnavailable && /*#__PURE__*/_react.default.createElement("span", null, "\u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D ", /*#__PURE__*/_react.default.createElement("br", null)), title), /*#__PURE__*/_react.default.createElement("div", {
    className: "account-modal-info-block--sub-title"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _comp.default,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "\u0423\u043F\u0440\u043E\u0449\u0435\u043D\u043D\u0430\u044F \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C")), /*#__PURE__*/_react.default.createElement("p", {
    className: "account-modal-info-block--discription"
  }, "\u0423\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u0432\u0430\u043C \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E."), /*#__PURE__*/_react.default.createElement("p", {
    className: "account-modal-info-block--discription"
  }, "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0430\u044F \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u0430\u0435\u0442 \u043D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043A \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0437\u0430\u044F\u0432\u043E\u043A \u043D\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E, \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438."), /*#__PURE__*/_react.default.createElement("p", {
    className: "account-modal-info-block--discription"
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0443\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u043F\u0440\u043E\u0441\u0442\u043E: \u0432\u043D\u0435\u0441\u0438\u0442\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u044E\u0449\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"), /*#__PURE__*/_react.default.createElement("button", {
    className: "ds-button-shadow account-modal-info-block-goTo",
    onClick: handleOnClickGoToSettings
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"), showSkip && /*#__PURE__*/_react.default.createElement("button", {
    className: "ds-button-shadow account-modal-info-block-skip",
    onClick: handleOnClickSkip
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435 \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"));
};

exports.AccountModalInfoBlock = AccountModalInfoBlock;
AccountModalInfoBlock.propTypes = {
  showSkip: _propTypes.default.bool,
  showUnavailable: _propTypes.default.bool,
  handleOnClickGoToSettings: _propTypes.default.func,
  handleOnClickSkip: _propTypes.default.func,
  title: _propTypes.default.string
};