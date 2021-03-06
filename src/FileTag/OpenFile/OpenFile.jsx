import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";

import Button from "../../Button/";
import { useFileTag } from "../FileTagContext";
import { clearIcon } from "../../icons";

const OpenFile = () => {
  const { title, subtitle, disabled, typeFile, src, onDelete } = useFileTag();
  const classes = clsx(
    "open-file",
    "template-tag",
    { "open-img": typeFile === "img" },
    { "open-pdf": typeFile === "pdf" },
  );

  const handleOnClick = () => {
    window.open(src);
  };

  return (
    <div className={classes}>
      {onDelete && (
        <p className="template-tag__clear" onClick={onDelete}>
          {clearIcon("template-tag__icon")}
        </p>
      )}
      {title && <p className="template-tag__title">{parse(title)}</p>}
      {subtitle && <p className="template-tag__subtitle">{parse(subtitle)}</p>}
      <Button
        className="template-tag__button"
        color="solidBlue"
        onClick={handleOnClick}
        disabled={disabled}
      >
        Просмотр
      </Button>
    </div>
  );
};


export default React.memo(OpenFile)