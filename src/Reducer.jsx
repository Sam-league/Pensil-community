import React from "react";

export const Reducer = (state, action) => {
  if (action.type === "darkmode") return { dark_mode: true };
  if (action.type === "lightmode") return { dark_mode: false };
};
