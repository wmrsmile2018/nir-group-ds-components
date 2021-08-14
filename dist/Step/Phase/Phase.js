"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phase = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _InfoBlock = _interopRequireDefault(require("../../InfoBlock/"));

var _Button = _interopRequireDefault(require("../../Button/"));

var _StepContext = require("../StepContext");

var _icons = require("../../icons");

var _utils = require("../../utils/");

require("./Phase.scss");

const _excluded = ["className", "modificators", "title", "index", "isFailuer", "handler", "disabled", "showHandler"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const constNames = {
  term: "Срок",
  participant: "Ответственный участник",
  perfomer: " Исполнитель",
  status: " Статус"
};

const Phase = _ref => {
  let {
    className,
    modificators,
    title,
    index,
    isFailuer,
    handler,
    disabled,
    showHandler
  } = _ref,
      attr = _objectWithoutProperties(_ref, _excluded);

  const {
    step
  } = (0, _StepContext.useStep)();
  const classes = (0, _clsx.default)("phase", className, modificators, {
    "success": !isFailuer && step > index
  }, {
    "working": !isFailuer && step <= index
  }, {
    "failure": isFailuer
  });
  const fileds = (0, _react.useMemo)(() => (0, _utils.generateFields)(attr, constNames), [attr]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "phase__line"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "phase-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "phase-header__icon ".concat((0, _clsx.default)({
      success: step > index,
      working: step <= index
    }))
  }, (0, _icons.succesIcon)("phase__icon")), /*#__PURE__*/_react.default.createElement("p", {
    className: "phase-header__title"
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "phase-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "phase-content__information"
  }, fileds.map(el => /*#__PURE__*/_react.default.createElement(_InfoBlock.default, {
    key: el.id,
    value: el.value,
    label: el.title
  }))), showHandler && /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "phase-content__handler",
    color: "blue",
    onClick: handler,
    disabled: disabled,
    size: "M"
  }, "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C")));
};

exports.Phase = Phase;
Phase.propTypes = {
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  index: _propTypes.default.number.isRequired,
  handler: _propTypes.default.func,
  showHandler: _propTypes.default.bool,
  isFailuer: _propTypes.default.bool
};
Phase.defaultProps = {
  className: "",
  modificators: "",
  isFailuer: false,
  showHandlder: false,
  handler: () => {}
};