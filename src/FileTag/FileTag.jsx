import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { DescriptionTag } from "./DescriptionTag/";
import { FileTagContext } from "./FileTagContext";
import { GenerateFile } from "./GenerateFile/";
import { OpenFile } from "./OpenFile/";
import { UploadFile } from "./UploadFile/";
import { FileTagGroup } from "./FileTagGroup/";

import "./FileTag.scss";

const FileTag = ({
  className,
  modificators,
  title,
  onClick,
  subtitle,
  disabled,
  src,
  children,
  typeId, // для загрузки, чтобы понять, определенные документы или любые
  type, // чтобы понять, генерировать, открывать или загружать
  typeFile, // для проверки на img или pdf
  onDelete, // для удаления добавленного файла
}) => {
  const classes = classNames("file-tag", className, modificators);

  return (
    <div className={classes}>
      <FileTagContext.Provider
        value={{ title, onClick, subtitle, disabled, typeId, src, typeFile, onDelete }}
      >
        {type === "generate" && <GenerateFile>{children}</GenerateFile>}
        {type === "upload" && <UploadFile />}
        {type === "open" && <OpenFile />}
      </FileTagContext.Provider>
    </div>
  );
};

FileTag.GenerateFile = GenerateFile;
FileTag.OpenFile = OpenFile;
FileTag.UploadFile = UploadFile;
FileTag.DescriptionTag = DescriptionTag;
FileTag.FileTagGroup = FileTagGroup;
FileTag.DescriptionTag = DescriptionTag;

export default FileTag;

FileTag.propTypes = {
  className: PropTypes.string,
  modificators: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  subtitle: PropTypes.string,
  disabled: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.node,
  typeId: PropTypes.string,
  type: PropTypes.oneOf(["generate", "open", "upload"]).isRequired,
  typeFile: PropTypes.oneOf(["pdf", "img"]),
};

FileTag.defaultProps = {
  className: "",
  modificators: "",
  title: "",
  onClick: () => {},
  onDelete: null,
  subtitle: "",
  disabled: false,
  src: "",
  children: null,
  typeId: "",
  typeFile: "pdf",
};
