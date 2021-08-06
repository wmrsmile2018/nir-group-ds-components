import React, { useContext } from "react";

const initialState = {
  title: "",
  onClick: () => {},
  subtitle: "",
  disabled: false,
  typeId: "",
  src: "",
  typeFile: "pdf",
  onDele: null,
};

export const FileTagContext = React.createContext(initialState);

export const useFileTag = () => useContext(FileTagContext);
