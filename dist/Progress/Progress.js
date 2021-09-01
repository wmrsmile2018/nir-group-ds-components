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

require("./Progress.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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