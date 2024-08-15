"use client";

import { createContext, useContext } from "react";

export const DataDispatchContext = createContext(null);

export const useDataDispatchContext = () => {
  return useContext(DataDispatchContext);
};

export const DataDispatchProvider = ({ defaultValue, children }) => {
  return (
    <DataDispatchContext.Provider value={defaultValue}>
      {children}
    </DataDispatchContext.Provider>
  );
};
