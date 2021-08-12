import classNames from "classnames";
import parse from "html-react-parser";
import React, { useRef } from "react";
import clsx from "clsx";

import Button from "../../Button/";
import { useFileTag } from "../FileTagContext";

export const UploadFile = () => {
  const { onClick, title, subtitle, disabled, typeId, typeFile } = useFileTag();
  const classes = classNames(
    "template-tag",
    { "upload-file": typeFile === "pdf" },
    { "upload-photo": typeFile === "img" },
  );
  const inputRef = useRef(null);

  const handleOnClick = () => {
    inputRef.current.click();
  };

  const handleOnUpload = () => {
    onClick(inputRef.current.files[0]);
  };

  return (
    <div className={classes}>
      {typeId ? (
        [
          <p className="template-tag__title">{parse(title)}</p>,
          <p className="template-tag__subtitle">{parse(subtitle)}</p>,
        ]
      ) : (
        <>
          {typeFile === "pdf" && <div className="upload-file__image"></div>}
          {typeFile === "img" && <div className="upload-photo__image"></div>}{" "}
        </>
      )}
      <input
        style={{ display: "none" }}
        accept={clsx({ "application/pdf": typeFile === "pdf", "image/*": typeFile === "img" })}
        type="file"
        ref={inputRef}
        onChange={handleOnUpload}
      />
      <Button
        className="template-tag__button"
        color="gray"
        onClick={handleOnClick}
        disabled={disabled}
      >
        {typeId ? "Загрузить" : typeFile === "pdf" ? "Другой документ" : "Добавить фото"}
      </Button>
    </div>
  );
};
