import { createContext, useContext, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [activeOverlay, setActiveOverlay] = useState(null);
  const [introKey, setIntroKey] = useState(0);

  function triggerIntroReplay() {
    setIntroKey((k) => k + 1);
  }

  return (
    <UIContext.Provider
      value={{ activeOverlay, setActiveOverlay, introKey, triggerIntroReplay }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
