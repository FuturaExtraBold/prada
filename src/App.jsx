import { useEffect, useState } from "react";

import BigGreyBox from "./chrome/BigGreyBox/BigGreyBox";
import Header from "./chrome/Header/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import { UIProvider } from "./context/UIContext";
import CreativeStage from "./creative/CreativeStage/CreativeStage";
import Splash from "./creative/Splash/Splash";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true);
    } else {
      window.addEventListener("load", () => setReady(true), { once: true });
    }
  }, []);

  if (!ready) return null;

  return (
    <ErrorBoundary>
      <UIProvider>
        <main className="app">
          <Splash />
          <Header />
          <CreativeStage />
          <BigGreyBox />
        </main>
      </UIProvider>
    </ErrorBoundary>
  );
}
