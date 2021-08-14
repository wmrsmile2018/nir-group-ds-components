"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalAccount = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

var _DSModalContainer = require("@/DSComponents/DSModalContainer/DSModalContainer");

var _Portal = require("@components/Portal/Portal");

var _AccountModalInfoBlock = require("./AccountModalInfoBlock/AccountModalInfoBlock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModalAccount = _ref => {
  let {
    domNode,
    showModal,
    title
  } = _ref;
  const history = (0, _reactRouter.useHistory)();

  const handleOnClickGoToSettings = _ref2 => {
    let {} = _ref2;
    showModal(false);
    history.push("/app/settings/organization/price_list?action=review");
  };

  return /*#__PURE__*/_react.default.createElement(_Portal.Portal, {
    domNode: domNode
  }, /*#__PURE__*/_react.default.createElement(_DSModalContainer.DSModalContainer, {
    className: "ds-modal-mask-dark account-modal-info-block--modal"
  }, /*#__PURE__*/_react.default.createElement(_AccountModalInfoBlock.AccountModalInfoBlock, {
    showSkip: false,
    showUnavailable: true,
    handleOnClickGoToSettings: handleOnClickGoToSettings,
    title: title
  })));
};

exports.ModalAccount = ModalAccount;
ModalAccount.propTypes = {
  domNode: _propTypes.default.node,
  showModal: _propTypes.default.func
};