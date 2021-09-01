"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../utils/pdfCreator/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PdfGenerator = _ref => {
  let {
    func,
    children,
    fileName
  } = _ref;

  // const [isCalled, setIsCalled] = useState(false);
  const donwloadPDFFile = () => {
    let data = document.getElementById("pdfFile");
    const opt = {
      filename: "".concat(fileName, ".pdf"),
      image: {
        type: "jpeg",
        quality: 0.5
      },
      html2canvas: {
        scale: 10,
        letterRendering: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "p",
        precision: 10
      },
      pagebreak: {
        mode: "avoid-all",
        before: "#page2el"
      }
    };
    console.log((0, _index.default)());
    (0, _index.default)().from(data).set(opt) // .save(`${fileName}.pdf`)
    // .outputImg("dataurlnewwindow", `${fileName}.png`)
    .output("dataurlnewwindow", "".concat(fileName, ".pdf"), "pdf"); // .open(`${fileName}.pdf`);
  };

  (0, _react.useEffect)(() => {
    donwloadPDFFile();
    window.scroll(0, 0); // window.open("http://www.africau.edu/images/default/sample.pdf");
    // if (!isCalled) {
    //   func(donwloadPDFFile);
    //   setIsCalled(true);
    // }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "pdfFile",
    className: "pdfFile"
  }, children);
};

var _default = /*#__PURE__*/_react.default.memo(PdfGenerator); // <Portal>
//     </Portal>


exports.default = _default;