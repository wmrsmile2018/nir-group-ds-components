"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _weakKey = _interopRequireDefault(require("weak-key"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  const styles = ".test-component {\n  padding: 20px;\n  width: 100%;\n  height: 100%; }\n\n.test-tag {\n  width: 136px;\n  height: 174px;\n  background-color: red; }\n\n.test-background {\n  background-color: red; }\n";
  const fileName = "reac_test";
  const element = document.querySelector("style[data-sass-component='reac_test']");

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
  TabStep,
  withHandlers
} = _index.TabsStepGroup;
const {
  Phase
} = _index.Step;
const {
  RadioGroup
} = _index.RadioButton;
const {
  CheckboxContainer,
  CheckboxGroup
} = _index.Checkbox;
const {
  PhotoGroup
} = _index.PhotoCard;
const {
  Option
} = _index.Select;
const {
  FileTagGroup,
  DescriptionTag
} = _index.FileTag;
const {
  InputGroup,
  InputDate,
  AutoSizeInput,
  InputList
} = _index.Input;
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
const stepsMap = [{
  id: "step1",
  color: "#238495",
  size: "big",
  title: "Этап №1 Подача заявки"
}, {
  id: "step2",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №2 Анализ заявки"
}, {
  id: "step3",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №3 Заключение договора"
}, {
  id: "step4",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №4 Экспертная группа"
}, {
  id: "step5",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №5 Программа проверки"
}, {
  id: "step6",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №6 Выездная проверка"
}, {
  id: "step7",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №7 Оценка экспертов"
}, {
  id: "step8",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №8 Оценка экспертами"
}, {
  id: "step9",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №9 Отбор образцов"
}, {
  id: "step10",
  color: "#A2A0A1",
  size: "big",
  title: "Этап №10 Регистрация образцов"
}, {
  id: "step11",
  color: "#A2A0A1",
  size: "small",
  title: "Этап №11 Программа испытаний"
}, {
  id: "step12",
  color: "#A2A0A1",
  size: "big",
  title: "Этап №12 Испытания продукции"
}, {
  id: "step13",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №13 Назначение ответственного лица"
}, {
  id: "step14",
  color: "#0E7ABF",
  size: "small",
  title: "Этап №14 Оценка соответствия"
}, {
  id: "step15",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №15 Решение по сертификации"
}, {
  id: "step16",
  color: "#0E7ABF",
  size: "big",
  title: "Этап №16 Выдача сертификата"
}];
const radioButons = [{
  value: "val1",
  text: "someText1"
}, {
  value: "val2",
  text: "someText2"
}, {
  value: "val5",
  text: "someText2"
}, {
  value: "val6",
  text: "someText2"
}, {
  value: "val3",
  text: "someText2"
}, {
  value: "val4",
  text: "someText2"
}];
const checkboxButtons = [{
  title: "Выбрать все органы по сертификации",
  value: "1",
  container: null
}, {
  title: "Орган по сертификации продукции, работ (услуг) НОУ СЦ «ВНИИГАЗ-Сертификат»",
  value: "2",
  container: {
    organization: "Некоммерческая организация учреждение «Сертификационный центр «ВНИИГАЗ-Сертификат»",
    registration: "Зарегистрирован в системе ИГС2.0 с 10.10.2020"
  }
}, {
  title: "Орган по сертификации продукции, работ (услуг) ООО НПП «ИНИЦИАТИВА»",
  value: "3",
  container: {
    organization: "Общество с ограниченной ответственностью НПП «ИНИЦИАТИВА» ",
    registration: ""
  }
}];

const TestComponent = () => {
  const [steps, setSteps] = (0, _react.useState)({
    cur: 0,
    stepsCompleted: []
  });
  const [state, setState] = (0, _react.useState)({
    login: "",
    password: "",
    autosize: "",
    list: ["test"]
  });
  const handleOnChange = (0, _react.useCallback)(_ref2 => {
    let {
      target
    } = _ref2;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [target.name]: target.value
    }));
  }, [state]);

  const handleOnClick = _ref3 => {
    let {
      target
    } = _ref3;
    window.target = target;
  };

  const handleOnChangeVote = (0, _react.useCallback)(data => {
    // console.log(`[${target.name}]: ${target.value}`);
    console.log(data);
  }, []);
  const handleOnClickNext = (0, _react.useCallback)(() => {
    setSteps({
      cur: steps.cur + 1,
      stepsCompleted: [...steps.stepsCompleted].concat(steps.cur + 1)
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "test-component"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "info-part"
  }, false && /*#__PURE__*/_react.default.createElement(_index.TabsStepGroup, {
    render: (handlers, updateHandlers) => tabs.map((el, i) => {
      const Component = withHandlers({
        handlers,
        updateHandlers
      })(el.component);
      return /*#__PURE__*/_react.default.createElement(TabStep, {
        key: el.key,
        index: i,
        tab: el.tab
      }, /*#__PURE__*/_react.default.createElement(Component, null));
    })
  }), true && /*#__PURE__*/_react.default.createElement(_index.Select, {
    title: "\u0412\u044B\u0431\u043E\u0440 \u0441\u0445\u0435\u043C\u044B \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
    name: "select",
    onChange: data => {
      console.log("change", data);
    },
    onSelect: data => {
      console.log("select", data);
    }
  }, /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello1",
    value: "val1",
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello2",
    value: "val2"
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello3",
    value: "val2"
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello4",
    value: "val1",
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello5",
    value: "val2"
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello6",
    value: "val1",
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello7",
    value: "val2"
  }), /*#__PURE__*/_react.default.createElement(Option, {
    title: "hello8",
    value: "val1",
    disabled: true
  })), false && /*#__PURE__*/_react.default.createElement(InputList, {
    state: state.list,
    onChange: handleOnChange,
    name: "list",
    title: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 (\u0421\u0422\u041E \u0413\u0430\u0437\u043F\u0440\u043E\u043C, \u0413\u041E\u0421\u0422 \u0438 \u0434\u0440.)"
  }), false && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.Progress, {
    steps: stepsMap,
    stepsCompleted: steps.stepsCompleted,
    curStep: steps.cur
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleOnClickNext
  }, "\u0414\u0430\u043B\u0435\u0435")), false && /*#__PURE__*/_react.default.createElement(FileTagGroup, {
    title: "\u041F\u0440\u043E\u0435\u043A\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430"
  }, /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "generate",
    title: "title",
    subtitle: "subtitle"
  }, "hello my dear"), /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "upload",
    typeFile: "pdf",
    title: "title",
    onClick: data => {
      console.log(data);
    },
    subtitle: "subtitle"
  }), /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "upload",
    typeFile: "img",
    title: "title",
    onClick: data => {
      console.log(data);
    },
    subtitle: "subtitle"
  }), /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "upload",
    typeFile: "pdf",
    typeId: "1",
    title: "title",
    onClick: data => {
      console.log(data);
    },
    subtitle: "subtitle"
  }), /*#__PURE__*/_react.default.createElement(DescriptionTag, {
    prepared: "\u0422\u043E\u0449\u0435\u0432 \u0422\u043E\u0449\u0435\u0432 \u0422\u043E\u0449\u0435\u0432 \u0422\u043E\u0449\u0435\u0432",
    date: "01.01.2021"
  }, /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "open",
    typeFile: "img",
    title: "title",
    src: "https://via.placeholder.com/350x150",
    subtitle: "subtitle"
  })), /*#__PURE__*/_react.default.createElement(DescriptionTag, null, /*#__PURE__*/_react.default.createElement(_index.FileTag, {
    type: "open",
    typeFile: "pdf",
    title: "title",
    src: "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
    subtitle: "subtitle"
  }))), false && /*#__PURE__*/_react.default.createElement(PhotoGroup, {
    title: "\u0424\u043E\u0442\u043E\u043E\u0442\u0447\u0435\u0442 \u0432\u044B\u0435\u0437\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438"
  }, /*#__PURE__*/_react.default.createElement(_index.PhotoCard, {
    imgUrl: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    perfomer: "perfomer",
    date: "date",
    geoPos: "geoPos",
    comments: "comments",
    isValid: true
  }), /*#__PURE__*/_react.default.createElement(_index.PhotoCard, {
    imgUrl: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    perfomer: "perfomer",
    date: "date",
    geoPos: "geoPos",
    comments: "comments"
  })), false && /*#__PURE__*/_react.default.createElement(_index.Step, {
    title: "\u042D\u0442\u0430\u043F \u211613 \u041E\u0446\u0435\u043D\u043A\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F",
    date: "10.10.2020",
    step: 2,
    tags: Array.from(Array(5).keys(), el => /*#__PURE__*/_react.default.createElement("div", {
      key: (0, _weakKey.default)({
        [el.toString()]: el
      }),
      className: "test-tag"
    }))
  }, /*#__PURE__*/_react.default.createElement(Phase, {
    index: 1,
    title: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E \u0432\u044B\u0434\u0430\u0447\u0435 \u0438\u043B\u0438 \u043E\u0442\u043A\u0430\u0437\u0435 \u0432 \u0432\u044B\u0434\u0430\u0447\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F",
    handler: () => {},
    showHandler: true,
    term: "term",
    participant: "participant",
    perfomer: "perfomer",
    status: "status"
  }), /*#__PURE__*/_react.default.createElement(Phase, {
    index: 2,
    title: "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0430\u043D\u0430\u043B\u0438\u0437 \u0432\u0441\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
    handler: () => {},
    showHandler: false,
    term: "term",
    participant: "participant",
    perfomer: "perfomer",
    status: "status"
  }), /*#__PURE__*/_react.default.createElement(Phase, {
    index: 3,
    title: "\u041F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 \u0430\u043D\u0430\u043B\u0438\u0437 \u0432\u0441\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
    handler: () => {},
    showHandler: true,
    term: "term",
    participant: "participant",
    perfomer: "perfomer",
    status: "status"
  })), false && /*#__PURE__*/_react.default.createElement(_index.InfoCard, {
    title: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u2116009876 \u043E\u0442 10.10.2020"
  }, Array.from(Array(5).keys(), el => /*#__PURE__*/_react.default.createElement(_index.InfoBlock, {
    key: (0, _weakKey.default)({
      [el.toString()]: el
    }),
    label: "Центральный орган систем",
    value: "Кольца опорно-направляющие тип I (с опорами скольжения), тип II (с опорами качения), тип III (скомбиниров анными sadsads ad s"
  }))), false && /*#__PURE__*/_react.default.createElement(_index.BorderCard, {
    title: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u2116009876 \u043E\u0442 10.10.2020",
    tags: Array.from(Array(5).keys(), el => /*#__PURE__*/_react.default.createElement("div", {
      key: (0, _weakKey.default)({
        [el.toString()]: el
      }),
      className: "test-tag"
    }))
  }, /*#__PURE__*/_react.default.createElement(_index.InfoBlock, {
    label: "Центральный орган систем",
    value: "Кольца опорно-направляющие тип I (с опорами скольжения), тип II (с опорами качения), тип III (с комбинированными опорами) asdsaa sda sdas das dsad ad sad asd для переходов магистральных"
  }), Array.from(Array(5).keys(), el => /*#__PURE__*/_react.default.createElement(_index.InfoBlock, {
    key: (0, _weakKey.default)({
      [el.toString()]: el
    }),
    label: "Центральный орган систем",
    value: "Кольца опорно-направляющие тип"
  })))), false && /*#__PURE__*/_react.default.createElement("div", {
    className: "vote"
  }, /*#__PURE__*/_react.default.createElement(_index.Vote, {
    className: "parent",
    title: "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435",
    onChange: handleOnChangeVote,
    params: [{
      text: "Согласовать состав экспертной группы"
    }, {
      text: "Отказать в согласовании состава экспертной группы"
    }]
  })), false && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(InputGroup, {
    title: "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430",
    className: "parent"
  }, /*#__PURE__*/_react.default.createElement(AutoSizeInput, {
    title: "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435",
    state: state.autosize,
    className: "parent",
    onChange: handleOnChange,
    name: "autosize"
  }), /*#__PURE__*/_react.default.createElement(InputDate, {
    className: "parent",
    name: "date",
    modificators: "some-modificators",
    value: state.date,
    onChange: handleOnChange,
    title: "\u0441\u0440\u043E\u043A\u0438"
  }), /*#__PURE__*/_react.default.createElement(_index.Input, {
    onChange: handleOnChange,
    className: "parent",
    title: "login",
    name: "login",
    state: state.login
  }), /*#__PURE__*/_react.default.createElement(_index.Input, {
    onChange: handleOnChange,
    state: state.password,
    className: "parent",
    title: "password",
    name: "password",
    type: "password"
  }), /*#__PURE__*/_react.default.createElement(CheckboxGroup, {
    title: "\u0412\u044B\u0431\u043E\u0440 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u043F\u043E \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",
    className: "parent"
  }, /*#__PURE__*/_react.default.createElement(_index.Checkbox, {
    className: "parent",
    name: "vote",
    onChange: handleOnChange,
    title: "Выбрать все органы по сертификации",
    value: "test1",
    disabled: true
  }), checkboxButtons.map(el => {
    const Component = () => /*#__PURE__*/_react.default.createElement(_index.Checkbox, {
      key: el.value,
      className: "parent",
      name: "vote",
      onChange: handleOnChange,
      title: el.title,
      value: el.value,
      checked: state.vote === el.value
    });

    return el.container ? /*#__PURE__*/_react.default.createElement(CheckboxContainer, {
      key: el.value,
      className: "parent",
      organization: el.container.organization,
      registration: el.container.registration
    }, /*#__PURE__*/_react.default.createElement(Component, null)) : /*#__PURE__*/_react.default.createElement(Component, null);
  })), /*#__PURE__*/_react.default.createElement(RadioGroup, {
    title: "\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u044B"
  }, radioButons.map(el => /*#__PURE__*/_react.default.createElement(_index.RadioButton, {
    key: el.value,
    className: "parent",
    name: "contact",
    onChange: handleOnChange,
    text: el.text,
    value: el.value,
    noBorder: true
  }))))));
};

exports.TestComponent = TestComponent;