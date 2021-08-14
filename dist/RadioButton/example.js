"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _uuid = require("uuid");

var _RadioButton = require("@DSComponents/RadioButton/");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-alert */

/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
const {
  RadioGroup
} = _RadioButton.RadioButton;
const radioButons = [{
  value: "val1",
  text: "someText1"
}, {
  value: "val2",
  text: "someText2"
}, {
  value: "val3",
  text: "someText3"
}, {
  value: "val4",
  text: "someText4"
}, {
  value: "val5",
  text: "someText5"
}];

const TestComponent = () => {
  // const [activeKey, setActiveKey] = useState(1);
  // const handleOnClickTab = (current) => {
  //   setActiveKey(current);
  // };
  console.log(RadioGroup);

  const handleOnClick = _ref => {
    let {
      target
    } = _ref;
    window.target = target;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-component"
  }, /*#__PURE__*/_react.default.createElement(RadioGroup, {
    title: "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u044B"
  }, radioButons.map(el => /*#__PURE__*/_react.default.createElement(_RadioButton.RadioButton, {
    key: (0, _uuid.v4)(),
    className: "hello",
    name: "contact",
    onChange: handleOnClick,
    text: el.text,
    value: el.value
  }))));
};

exports.TestComponent = TestComponent;