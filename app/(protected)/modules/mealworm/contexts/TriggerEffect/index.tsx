import { createContext, useContext } from "react";

const TriggerEffectContext = createContext(null);

export const useTriggerEffectContext = () => {
  return useContext(TriggerEffectContext);
};

export const TriggerEffectProvider = ({ defaultValue, children }) => {
  return (
    <TriggerEffectContext.Provider value={defaultValue}>
      {children}
    </TriggerEffectContext.Provider>
  );
};
