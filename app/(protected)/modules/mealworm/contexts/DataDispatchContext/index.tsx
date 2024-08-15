"use client";

import { createContext, ReactNode, useContext } from "react";

export const DataDispatchContext = createContext(null);

export const useDataDispatchContext = () => {
  return useContext(DataDispatchContext);
};

export const DataDispatchProvider = ({
  defaultValue,
  children,
}: {
  defaultValue: any;
  children: ReactNode;
}) => {
  return (
    <DataDispatchContext.Provider value={defaultValue}>
      {children}
    </DataDispatchContext.Provider>
  );
};
