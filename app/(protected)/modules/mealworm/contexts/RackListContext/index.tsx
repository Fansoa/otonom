"use client";

import { createContext, ReactNode, useContext } from "react";

export const RackListContext = createContext(null);

export const useRackListContext = () => {
  return useContext(RackListContext);
};

export const RackListProvider = ({
  defaultValue,
  children,
}: {
  defaultValue: any;
  children?: ReactNode;
}) => {
  return (
    <RackListContext.Provider value={defaultValue}>
      {children}
    </RackListContext.Provider>
  );
};
