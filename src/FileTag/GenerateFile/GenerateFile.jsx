import clsx from "clsx";
import parse from "html-react-parser";
import React, { useReducer } from "react";
import PropTypes from "prop-types";

import Button from "../../Button/";
import PdfGenerator from "../../PdfGenerator/";
import { useFileTag } from "../FileTagContext";

export const GenerateFile = ({ children }) => {
  const [show, setShow] = useReducer((show) => !show, false);
  const { title, subtitle, disabled } = useFileTag();
  const classes = clsx("generate-file", "template-tag", "open-pdf");

  return (
    <div className={classes}>
      {title && <p className="template-tag__title">{parse(title)}</p>}
      {subtitle && <p className="template-tag__subtitle">{parse(subtitle)}</p>}
      <Button
        className="template-tag__button"
        color="solidBlue"
        onClick={setShow}
        disabled={disabled}
      >
        Просмотр
      </Button>
      {show && (
        <div style={{ display: "none" }}>
          <PdfGenerator>{children}</PdfGenerator>
        </div>
      )}
    </div>
  );
};

GenerateFile.propTypes = {
  children: PropTypes.node.isRequired,
};
