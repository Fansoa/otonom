"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export const SelectedItemContext = createContext(null);
export const SelectedItemDispatchContext = createContext(null);

export function useSelectedItemContext() {
  return useContext(SelectedItemContext);
}

export function useSelectedItemDispatchContext() {
  return useContext(SelectedItemDispatchContext);
}

export const SelectedItemAndSelectedItemDispatchProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={selectedItem}>
      <SelectedItemDispatchContext.Provider value={setSelectedItem}>
        {children}
      </SelectedItemDispatchContext.Provider>
    </SelectedItemContext.Provider>
  );
};
