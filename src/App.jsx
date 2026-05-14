import BigGreyBox from "./chrome/BigGreyBox/BigGreyBox";
import Header from "./chrome/Header/Header";
import { UIProvider, useUI } from "./context/UIContext";
import ContentArea from "./creative/ContentArea/ContentArea";
import GalleryOverlay from "./creative/GalleryOverlay/GalleryOverlay";
import VideoOverlay from "./creative/VideoOverlay/VideoOverlay";

function AppInner() {
  const { activeOverlay } = useUI();

  return (
    <main className="app">
      <Header />
      <ContentArea />
      <BigGreyBox />
      {activeOverlay === "video" && <VideoOverlay />}
      {activeOverlay === "gallery" && <GalleryOverlay />}
    </main>
  );
}

export default function App() {
  return (
    <UIProvider>
      <AppInner />
    </UIProvider>
  );
}
