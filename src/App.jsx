import BigGreyBox from "./chrome/BigGreyBox/BigGreyBox";
import Header from "./chrome/Header/Header";
import { UIProvider } from "./context/UIContext";
import CreativeStage from "./creative/CreativeStage/CreativeStage";
import Splash from "./creative/Splash/Splash";

export default function App() {
  return (
    <UIProvider>
      <main className="app">
        <Splash />
        <Header />
        <CreativeStage />
        <BigGreyBox />
      </main>
    </UIProvider>
  );
}
