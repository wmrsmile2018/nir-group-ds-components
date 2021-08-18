import React, { useEffect } from "react";
import html2pdf from "../utils/pdfCreator/index";

const PdfGenerator = ({ func, children, fileName }) => {
  // const [isCalled, setIsCalled] = useState(false);
  const donwloadPDFFile = () => {
    let data = document.getElementById("pdfFile");
    const opt = {
      filename: `${fileName}.pdf`,
      image: { type: "jpeg", quality: 0.5 },
      html2canvas: { scale: 10, letterRendering: true },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "p",
        precision: 10,
      },
      pagebreak: {
        mode: "avoid-all",
        before: "#page2el",
      },
    };
    console.log(html2pdf());
    html2pdf()
      .from(data)
      .set(opt)
      // .save(`${fileName}.pdf`)
      // .outputImg("dataurlnewwindow", `${fileName}.png`)
      .output("dataurlnewwindow", `${fileName}.pdf`, "pdf");
    // .open(`${fileName}.pdf`);
  };

  useEffect(() => {
    donwloadPDFFile();
    window.scroll(0, 0);
    // window.open("http://www.africau.edu/images/default/sample.pdf");
    // if (!isCalled) {
    //   func(donwloadPDFFile);
    //   setIsCalled(true);
    // }
  }, []);

  return (
    <div id="pdfFile" className="pdfFile">
      {children}
    </div>
  );
};

export default React.memo(PdfGenerator);

// <Portal>
//     </Portal>
