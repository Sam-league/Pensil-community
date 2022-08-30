import React, { createContext, useReducer } from "react";
import { Reducer as reducer } from "./Reducer";

const initialState = {
  dark_mode: true,
};

export const ModeProvider = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const darkmode = () => {
    dispatch({ type: "darkmode" });
  };
  const lightmode = () => {
    dispatch({ type: "lightmode" });
  };

  return (
    <ModeProvider.Provider value={{ ...state, darkmode, lightmode }}>
      {children}
    </ModeProvider.Provider>
  );
};
