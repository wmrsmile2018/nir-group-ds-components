"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TabsContext = require("./TabsContext");

var _TabControl = require("./TabControl/");

var _TabStep = require("./TabStep/");

var _withHandlers = require("./withHandlers");

require("./TabsStepGroup.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const TabsStepGroup = _ref => {
  let {
    render
  } = _ref;
  const scrollingBlockRef = (0, _react.useRef)(null);
  const [currentStep, setCurrentStep] = (0, _react.useState)(1);
  const [state, setState] = (0, _react.useState)({
    onSave: () => {},
    onNext: () => {},
    onBack: () => {},
    disableSave: true,
    disableNext: false
  });
  const components = (0, _react.useMemo)(() => render(state, setState), [render]);
  const [stepsIsMounted, setStepsIsMounted] = (0, _react.useState)(Array(components.length).fill(false));
  const [stepsCompleted, setStepsCompleted] = (0, _react.useState)(Array(components.length).fill(false));
  const navigations = (0, _react.useMemo)(() => {
    return components.map(el => ({
      tab: el.props.tab,
      index: el.props.index
    }));
  }, [components]);
  (0, _react.useEffect)(() => {
    scrollingBlockRef.current.scroll(0, 0);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      disableNext: !stepsCompleted[currentStep - 1]
    }));
  }, [currentStep]);
  (0, _react.useEffect)(() => {
    if (components.length) {
      setStepsIsMounted(components.map((_, i) => currentStep - 1 >= i ? true : stepsIsMounted[i]));
    }
  }, [components, currentStep]);

  const handleOnClickNext = () => {
    if (currentStep < components.length) {
      const cpArr = [...stepsCompleted];
      cpArr[currentStep - 1] = true;
      setStepsCompleted(cpArr);
      setCurrentStep(currentStep + 1);
    }

    state.onNext();
  };

  const handleOnClickSave = () => {
    state.onSave();
  };

  const handleOnClickBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    state.onBack();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-left-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-navigations"
  }, navigations.map(el => /*#__PURE__*/_react.default.createElement("div", {
    key: el.index,
    className: "tab-step__navigation ".concat(currentStep - 1 === el.index ? "active" : "inactive")
  }, el.tab))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs__controls-wrapper"
  }, currentStep === components.length ? /*#__PURE__*/_react.default.createElement(_TabControl.TabControl, {
    onClick: handleOnClickSave,
    className: "tabs__control",
    text: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
    disabled: state.disableSave,
    color: "solidBlue"
  }) : /*#__PURE__*/_react.default.createElement(_TabControl.TabControl, {
    onClick: handleOnClickNext,
    className: "tabs__control",
    text: "\u0414\u0430\u043B\u0435\u0435",
    disabled: state.disableNext,
    color: "solidBlue"
  }), /*#__PURE__*/_react.default.createElement(_TabControl.TabControl, {
    onClick: handleOnClickBack,
    className: "tabs__control",
    text: "\u041D\u0430\u0437\u0430\u0434",
    disabled: currentStep === 1,
    color: "black"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-content",
    ref: scrollingBlockRef
  }, /*#__PURE__*/_react.default.createElement(_TabsContext.TabsContext.Provider, {
    value: {
      stepsIsMounted,
      step: currentStep
    }
  }, components), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-step-content__placeholder",
    style: {
      minHeight: 150
    }
  })))));
};

var _default = /*#__PURE__*/_react.default.memo(TabsStepGroup);

exports.default = _default;
TabsStepGroup.TabStep = _TabStep.TabStep;
TabsStepGroup.withHandlers = _withHandlers.withHandlers;
TabsStepGroup.propTypes = {
  render: _propTypes.default.func.isRequired
};