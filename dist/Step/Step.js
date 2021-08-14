"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _InfoBlock = _interopRequireDefault(require("../InfoBlock"));

var _StepContext = require("./StepContext");

var _icons = require("../icons");

var _Phase = require("./Phase/");

require("./Step.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Step = _ref => {
  let {
    className,
    title,
    date,
    modificators,
    tags,
    step,
    children
  } = _ref;
  const [isHide, setHide] = (0, _react.useReducer)(state => !state, false);
  const classes = (0, _clsx.default)("step", className, modificators);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "step-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "step-header"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "step-header__title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "step-header__arrow ".concat((0, _clsx.default)({
      open: !isHide
    })),
    onClick: setHide
  }, (0, _icons.arrowIcon)("step-group__icon"))), !isHide && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoBlock.default, {
    className: "step-content__date",
    label: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
    value: date
  }), /*#__PURE__*/_react.default.createElement(_StepContext.StepContext.Provider, {
    value: {
      step
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "step-content__information"
  }, children)))), !isHide && /*#__PURE__*/_react.default.createElement("div", {
    className: "step__tag"
  }, tags));
};

var _default = Step;
exports.default = _default;
Step.Phase = _Phase.Phase;
Step.propTypes = {
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  modificators: _propTypes.default.string,
  tags: _propTypes.default.arrayOf(_propTypes.default.node)
};
Step.defaultProps = {
  className: "",
  title: "",
  modificators: "",
  tags: []
};