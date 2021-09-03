"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.reduce.js");

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RadioButton = _interopRequireDefault(require("../RadioButton/"));

var _AutoSizeInput = require("../Input/AutoSizeInput/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  const styles = ".vote .auto-size-input {\n  margin-top: 14px; }\n";
  const fileName = "reac_Vote";
  const element = document.querySelector("style[data-sass-component='reac_Vote']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const {
  RadioGroup
} = _RadioButton.default;
const votingParametres = [{
  id: "agree"
}, {
  id: "disagree"
}];

const Vote = _ref => {
  let {
    className,
    modificators,
    params,
    title,
    onChange
  } = _ref;
  const [state, setState] = (0, _react.useState)({
    showComments: false,
    comments: "",
    vote: ""
  });
  const classes = (0, _clsx.default)("vote", className, modificators);
  const handleOnClick = (0, _react.useCallback)(_ref2 => {
    let {
      target
    } = _ref2;

    if (target.value === "disagree") {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        showComments: true
      }));
    }
  }, []);
  const radioButons = (0, _react.useMemo)(() => params.reduce((res, cur, i) => res.concat(_objectSpread(_objectSpread({}, votingParametres[i]), cur)), []), [params]);

  const handleOnChange = _ref3 => {
    let {
      target
    } = _ref3;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [target.name]: target.value
    }));
    onChange({
      vote: state.vote,
      comments: state.comments,
      [target.name]: target.value
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(RadioGroup, {
    title: title,
    className: "vote"
  }, radioButons.map(el => /*#__PURE__*/_react.default.createElement(_RadioButton.default, {
    key: el.id,
    className: "vote-radio-group",
    name: "vote",
    onChange: handleOnClick,
    text: el.text,
    value: el.id,
    onChange: handleOnChange,
    noBorder: true
  }))), state.vote === "disagree" && /*#__PURE__*/_react.default.createElement(_AutoSizeInput.AutoSizeInput, {
    title: "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0442\u043A\u0430\u0437\u0430 \u0432 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0438",
    state: state.comments,
    className: "vote",
    onChange: handleOnChange,
    name: "comments"
  }));
};

var _default = /*#__PURE__*/_react.default.memo(Vote);

exports.default = _default;
Vote.propTypes = {
  className: _propTypes.default.string,
  modificators: _propTypes.default.string,
  params: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  title: _propTypes.default.string.isRequired
};
Vote.defaultProps = {
  className: "",
  modificators: ""
};