"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabStep = void 0;

var _react = _interopRequireDefault(require("react"));

var _TabsContext = require("../TabsContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./TabStep.scss";
const TabStep = _ref => {
  let {
    children,
    index
  } = _ref;
  const {
    stepsIsMounted,
    step
  } = (0, _TabsContext.useTabs)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-step-content-".concat(index + 1)
  }, stepsIsMounted[index] && /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-step-content ".concat(step - 1 === index ? "visible" : "hidden")
  }, children));
}; // 1) если предыдущие шаги были успешно выполнены, можно переключаться по ним через ЛКМ
// 2) шаги, которые не были выполнены, по ним нельзя нажимать, и они окрашены в сервый цвет


exports.TabStep = TabStep;