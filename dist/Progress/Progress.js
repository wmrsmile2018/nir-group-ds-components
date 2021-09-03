"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _bigCompleted = _interopRequireDefault(require("./svg/bigCompleted.svg"));

var _COS = _interopRequireDefault(require("./svg/COS.svg"));

var _lab = _interopRequireDefault(require("./svg/lab.svg"));

var _organ = _interopRequireDefault(require("./svg/organ.svg"));

var _smallCompleted = _interopRequireDefault(require("./svg/smallCompleted.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  const styles = ".progress {\n  display: flex;\n  width: 1166px;\n  height: 181px; }\n  .progress .progress__COS,\n  .progress .progress__lab,\n  .progress .progress__organ {\n    position: absolute;\n    display: flex;\n    left: calc(50% - 30px); }\n    .progress .progress__COS p,\n    .progress .progress__lab p,\n    .progress .progress__organ p {\n      color: #238495;\n      font-size: 16px;\n      margin: 0;\n      margin-left: 9.6px; }\n  .progress .progress__lab {\n    width: 228px;\n    left: calc(50% - 125px);\n    top: -141px; }\n    .progress .progress__lab p {\n      color: #a2a0a1; }\n  .progress .progress__organ {\n    left: calc(50% - 97px); }\n    .progress .progress__organ p {\n      color: #0e7abf; }\n  .progress .progress__information-wrapper {\n    display: flex;\n    height: 35px;\n    align-items: center; }\n  .progress .progress__firstStep {\n    min-width: 56px;\n    margin-right: 4px;\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 0;\n    position: relative;\n    align-items: flex-end; }\n    .progress .progress__firstStep .progress__piece {\n      height: 35px;\n      min-width: 56px;\n      transform: translateY(-76px);\n      display: flex;\n      align-items: center; }\n      .progress .progress__firstStep .progress__piece .progress__information {\n        width: 314px;\n        height: 35px;\n        background: url(\"./svg/borderGreen.svg\") left bottom repeat-x;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .progress .progress__firstStep .progress__piece .progress__information p {\n          margin: 0;\n          font-size: 16px;\n          color: #238495; }\n      .progress .progress__firstStep .progress__piece .progress__dot {\n        border-radius: 50%;\n        border: #238495 solid 2px;\n        width: 16px;\n        height: 16px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .progress .progress__firstStep .progress__piece .progress__dot p {\n          position: absolute;\n          margin: 0;\n          transform: translate(-10px, -16px);\n          color: #238495;\n          font-size: 11px; }\n      .progress .progress__firstStep .progress__piece .progress__dot.finished {\n        background: #238495; }\n      .progress .progress__firstStep .progress__piece .progress__Rightline {\n        height: 1px;\n        box-sizing: border-box;\n        border-bottom: 1px solid #0e7abf;\n        width: 38px;\n        transform: translateX(2px); }\n    .progress .progress__firstStep .progress__border {\n      position: absolute;\n      transform: translateY(-26px);\n      height: 50px;\n      width: 100%;\n      border: 1px dotted #238495;\n      border-bottom-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border-top: none; }\n  .progress .progress__mainSteps {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    flex-grow: 1;\n    position: relative; }\n    .progress .progress__mainSteps .progress__border {\n      position: absolute;\n      transform: translateY(-26px);\n      height: 50px;\n      width: 100%;\n      border: 1px dotted #0e7abf;\n      border-bottom-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border-top: none; }\n    .progress .progress__mainSteps .progress__bar {\n      transform: translateY(-76px); }\n      .progress .progress__mainSteps .progress__bar .progress__piece {\n        position: relative;\n        height: 35px;\n        display: flex;\n        align-items: center; }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__Rightline {\n          position: relative;\n          z-index: 0;\n          height: 1px;\n          box-sizing: border-box;\n          border-bottom: 1px solid #0e7abf;\n          width: 36px;\n          transform: translateX(2px); }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__Leftline {\n          z-index: 0;\n          height: 1px;\n          box-sizing: border-box;\n          border-bottom: 1px solid #0e7abf;\n          width: 36px;\n          transform: translateX(-2px); }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__information {\n          width: 314px;\n          height: 35px;\n          background: url(\"./svg/borderBlue.svg\") left bottom repeat-x;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n          .progress .progress__mainSteps .progress__bar .progress__piece .progress__information p {\n            margin: 0;\n            font-size: 16px;\n            color: #0e7abf; }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot {\n          position: relative;\n          display: flex;\n          border-radius: 50%;\n          justify-content: center;\n          align-items: center;\n          box-sizing: border-box; }\n          .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot p {\n            position: absolute;\n            top: 0;\n            font-size: 11px;\n            color: #0e7abf; }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot.finished {\n          background: #0e7abf;\n          border: none; }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot.big {\n          border: #0e7abf solid 2px;\n          width: 16px;\n          height: 16px; }\n          .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot.big p {\n            position: absolute;\n            margin: 0;\n            transform: translate(-10px, -16px);\n            font-size: 11px; }\n        .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot.small {\n          border: #0e7abf solid 1.5px;\n          width: 12px;\n          height: 12px; }\n          .progress .progress__mainSteps .progress__bar .progress__piece .progress__dot.small p {\n            position: absolute;\n            margin: 0;\n            transform: translate(-10px, -16px);\n            font-size: 11px; }\n      .progress .progress__mainSteps .progress__bar .progress__piece.small .progress__Rightline {\n        width: 42px; }\n    .progress .progress__mainSteps .progress__middleSteps {\n      display: flex;\n      position: relative;\n      justify-content: space-between; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__information {\n        width: 314px;\n        height: 35px;\n        background: url(\"./svg/borderGray.svg\") left bottom repeat-x !important;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n        .progress .progress__mainSteps .progress__middleSteps .progress__information p {\n          margin: 0;\n          font-size: 16px;\n          color: #a2a0a1 !important; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__border {\n        border-color: #a2a0a1;\n        min-width: 175px;\n        transform: rotate(180deg) translate(25px, 116px); }\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece .progress__dot.finished {\n        background: #a2a0a1 !important;\n        border: none; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece .progress__dot {\n        border-color: #a2a0a1 !important; }\n        .progress .progress__mainSteps .progress__middleSteps .progress__piece .progress__dot p {\n          color: #a2a0a1; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece .progress__Leftline,\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece .progress__Rightline {\n        border-color: #a2a0a1; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece.small .progress__Leftline {\n        width: 42px;\n        height: 1px;\n        box-sizing: border-box;\n        border-bottom: 1px solid #a2a0a1;\n        transform: translateX(-38px);\n        position: absolute; }\n      .progress .progress__mainSteps .progress__middleSteps .progress__piece.big .progress__Leftline {\n        z-index: 1;\n        height: 1px;\n        box-sizing: border-box;\n        border-bottom: 1px solid #a2a0a1;\n        width: 36px;\n        transform: translateX(-38px);\n        position: absolute; }\n";
  const fileName = "reac_Progress";
  const element = document.querySelector("style[data-sass-component='reac_Progress']");

  if (!element) {
    const styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

const Progress = _ref => {
  let {
    steps,
    stepsCompleted,
    curStep,
    className
  } = _ref;

  const generateCode = () => {
    const array = steps.map((el, i) => {
      const mainObj = /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__piece ".concat(el.size)
      }, curStep - 1 === i ? /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__information-wrapper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__information"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "progress__text"
      }, el.title)), i !== 15 && /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__Rightline ".concat(el.size)
      })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (curStep - 1 === 0 && i === 1 || i === 9) && /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__Leftline ".concat(el.size)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__dot ".concat(el.size, " ").concat(stepsCompleted.indexOf(i + 1) !== -1 ? "finished" : "")
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "progress__step"
      }, i + 1), stepsCompleted.indexOf(i + 1) !== -1 && (el.size === "big" ? /*#__PURE__*/_react.default.createElement("img", {
        src: _bigCompleted.default,
        alt: "bigSize"
      }) : /*#__PURE__*/_react.default.createElement("img", {
        src: _smallCompleted.default,
        alt: "smallSize"
      }))), i !== 15 && /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__Rightline ".concat(el.size)
      })));

      return i === 0 ? /*#__PURE__*/_react.default.createElement("div", {
        key: el.id,
        className: "progress__firstStep"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__piece ".concat(el.size)
      }, curStep - 1 === i ? /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__information-wrapper"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__information"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "progress__text"
      }, el.title))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__dot ".concat(el.size, " finished")
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "progress__step"
      }, i + 1), /*#__PURE__*/_react.default.createElement("img", {
        src: _bigCompleted.default,
        alt: "bigSize"
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__Rightline"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__border"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "progress__COS"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _COS.default,
        alt: "COS"
      }), /*#__PURE__*/_react.default.createElement("p", null, "\u0426\u041E\u0421"))) : /*#__PURE__*/_react.default.createElement("div", {
        key: el.id,
        className: "progress__bar progress__othersSteps"
      }, mainObj);
    });
    const first = array[0];
    const leftPart = array.slice(1, 9);
    const middlePart = array.slice(9, 12);
    const rightPart = array.slice(12, 16);
    return [first, /*#__PURE__*/_react.default.createElement("div", {
      key: "mainSteps",
      className: "progress__mainSteps"
    }, leftPart, /*#__PURE__*/_react.default.createElement("div", {
      className: "progress__middleSteps"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "progress__lab"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _lab.default,
      alt: "lab"
    }), /*#__PURE__*/_react.default.createElement("p", null, "\u0418\u0441\u043F\u044B\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u044F")), /*#__PURE__*/_react.default.createElement("div", {
      className: "progress__border"
    }), middlePart), rightPart, /*#__PURE__*/_react.default.createElement("div", {
      className: "progress__border"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "progress__organ"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _organ.default,
      alt: "organ"
    }), /*#__PURE__*/_react.default.createElement("p", null, "\u041E\u0440\u0433\u0430\u043D \u043F\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438")))];
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "progress ".concat(className)
  }, generateCode());
};

var _default = /*#__PURE__*/_react.default.memo(Progress);

exports.default = _default;