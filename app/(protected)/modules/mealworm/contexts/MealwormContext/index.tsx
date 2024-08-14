import { createContext, ReactNode, useContext, useState } from "react";

export const MealwormContext = createContext(null);
export const MealwormDispatchContext = createContext(null);

export function useMealworm() {
  return useContext(MealwormContext);
}

export function useMealwormDispatch() {
  return useContext(MealwormDispatchContext);
}

export const MealwormProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <MealwormContext.Provider value={selectedItem}>
      <MealwormDispatchContext.Provider value={setSelectedItem}>
        {children}
      </MealwormDispatchContext.Provider>
    </MealwormContext.Provider>
  );
};
