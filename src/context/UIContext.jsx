import { createContext, useContext, useState } from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [activeOverlay, setActiveOverlay] = useState(null);

  return (
    <UIContext.Provider value={{ activeOverlay, setActiveOverlay }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
