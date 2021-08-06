import React, { useContext } from "react";

const initialState = {
  onChange: () => {},
  onSelect: () => {},
  stateValue: "",
  setValue: () => {},
  dispatch: () => {},
  name: "",
};

export const SelectContext = React.createContext(initialState);

export const useSelect = () => useContext(SelectContext);
