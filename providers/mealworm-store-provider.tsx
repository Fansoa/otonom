"use client";

import { createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  createMealwormStore,
  initMealwormStore,
} from "@/stores/mealworm-store.ts";

export const MealwormStoreContext = createContext(undefined);

export const MealwormStoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createMealwormStore(initMealwormStore());
  }

  return (
    <MealwormStoreContext.Provider value={storeRef.current}>
      {children}
    </MealwormStoreContext.Provider>
  );
};

export const useMealwormStore = (selector) => {
  const mealwormStoreContext = useContext(MealwormStoreContext);

  if (!mealwormStoreContext) {
    throw new Error(
      `useMealwormStore must be used within MealwormStoreProvider`,
    );
  }

  return useStore(mealwormStoreContext, selector);
};
