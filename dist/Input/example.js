"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Vote = require("@dsComponents/Vote/");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  InputGroup,
  InputDate
} = _Vote.Input;

const App = () => {
  const [state, setState] = (0, _react.useState)({
    date: null,
    login: "",
    password: ""
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-component"
  }, /*#__PURE__*/_react.default.createElement(InputGroup, {
    title: "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430"
  }, /*#__PURE__*/_react.default.createElement(InputDate, {
    className: "parent",
    name: "date",
    modificators: "some-modificators",
    state: state,
    onChange: setState,
    title: "\u0441\u0440\u043E\u043A\u0438"
  }), /*#__PURE__*/_react.default.createElement(_Vote.Input, {
    onChange: setState,
    className: "parent",
    title: "login",
    name: "login",
    state: state
  }), /*#__PURE__*/_react.default.createElement(_Vote.Input, {
    onChange: setState,
    state: state,
    className: "parent",
    title: "password",
    name: "password",
    type: "password"
  })));
};

var _default = App;
exports.default = _default;