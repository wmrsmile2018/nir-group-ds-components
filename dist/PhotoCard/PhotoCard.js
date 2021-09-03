"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactModalImage = require("react-modal-image");

var _PhotoGroup = require("./PhotoGroup/");

var _utils = require("../utils/");

var _InfoBlock = _interopRequireDefault(require("../InfoBlock/"));

const _excluded = ["className", "isValid", "modificators", "imgUrl"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

(function () {
  const styles = ".photo-card {\n  display: flex; }\n  .photo-card .photo-card__photo {\n    width: 136px;\n    height: 174px;\n    margin-right: 30px; }\n    .photo-card .photo-card__photo > img {\n      cursor: zoom-in; }\n    .photo-card .photo-card__photo .__react_modal_image__modal_container {\n      cursor: zoom-out; }\n    .photo-card .photo-card__photo .__react_modal_image__medium_img {\n      cursor: default; }\n  .photo-card .photo-card__inforamtion {\n    display: flex;\n    flex-direction: column;\n    gap: 10px; }\n";
  const fileName = "reac_PhotoCard";
  const element = document.querySelector("style[data-sass-component='reac_PhotoCard']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const constNames = {
  "perfomer": "Исполнитель",
  "date": "Дата",
  "geoPos": "Геолокаци",
  "comments": "Комментарии"
};

const PhotoCard = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    className,
    isValid,
    modificators,
    imgUrl
  } = _ref,
      attr = _objectWithoutProperties(_ref, _excluded);

  const [showBox, dispatch] = (0, _react.useReducer)(showBox => !showBox, false);
  const classes = (0, _clsx.default)("photo-card", className, modificators, (0, _clsx.default)({
    success: isValid,
    failure: !isValid
  }));
  const fileds = (0, _react.useMemo)(() => (0, _utils.generateFields)(attr, constNames), [attr]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-card__photo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imgUrl,
    alt: "photo",
    onClick: dispatch,
    className: (0, _clsx.default)({
      opened: showBox,
      closed: !showBox
    })
  }), showBox && /*#__PURE__*/_react.default.createElement(_reactModalImage.Lightbox, {
    medium: imgUrl,
    alt: "photo",
    onClose: dispatch,
    imageBackgroundColor: "rgba(88, 88, 88, 0.8)",
    hideZoom: true,
    hideDownload: true,
    showRotate: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-card__inforamtion"
  }, fileds.map(el => /*#__PURE__*/_react.default.createElement(_InfoBlock.default, {
    key: el.id,
    value: el.value,
    label: el.title
  }))));
});

var _default = PhotoCard;
exports.default = _default;
PhotoCard.PhotoGroup = _PhotoGroup.PhotoGroup;
PhotoCard.propTypes = {
  className: _propTypes.default.string,
  isValid: _propTypes.default.bool,
  modificators: _propTypes.default.string,
  imgUrl: _propTypes.default.string
};
PhotoCard.defaultProps = {
  className: "",
  isValid: false,
  modificators: "",
  imgUrl: ""
};