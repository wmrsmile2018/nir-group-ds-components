"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TabsStepGroupContext = require("./TabsStepGroupContext/");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const style = {
  height: 1000,
  width: 800
};

const Component1 = _ref => {
  let {
    handlers,
    updateHandlers
  } = _ref;
  const {
    onSave,
    onBack,
    onNext
  } = handlers;
  (0, _react.useEffect)(() => {// console.log(handlers);
    // updateHandlers({
    //   ...handlers,
    //   // disableNext: true,
    // });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      updateHandlers(_objectSpread(_objectSpread({}, handlers), {}, {
        disableSave: false
      }));
    }
  }, "save"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onBack
  }, "back"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      updateHandlers(_objectSpread(_objectSpread({}, handlers), {}, {
        disableNext: false
      }));
    }
  }, "next"), /*#__PURE__*/_react.default.createElement("div", {
    style: style
  }, "some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v some text some text some text some textsome textsome textsome textsome textsome text v"));
};

const tabs = [{
  component: Component1,
  tab: "Персональные данные",
  key: "1"
}, {
  component: Component1,
  tab: "Профиль эксперта",
  key: "2"
}, {
  component: Component1,
  tab: "Связанные организации",
  key: "3"
}];

const TestComponent = () => {
  // const [activeKey, setActiveKey] = useState(1);
  // const handleOnClickTab = (current) => {
  //   setActiveKey(current);
  // };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-component"
  }, /*#__PURE__*/_react.default.createElement(_TabsStepGroupContext.TabsStepGroup, {
    render: (handlers, updateHandlers) => tabs.map((el, i) => {
      const Component = (0, _TabsStepGroupContext.withHandlers)({
        handlers,
        updateHandlers
      })(el.component);
      return /*#__PURE__*/_react.default.createElement(_TabsStepGroupContext.TabStep, {
        key: el.key,
        index: i,
        tab: el.tab
      }, /*#__PURE__*/_react.default.createElement(Component, null));
    })
  }));
};

exports.TestComponent = TestComponent;