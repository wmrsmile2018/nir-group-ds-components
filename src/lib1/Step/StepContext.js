import React, { useContext } from "react";

const initialState = {
  stepCompleted: [],
};

export const StepContext = React.createContext(initialState);

export const useStep = () => useContext(StepContext);
