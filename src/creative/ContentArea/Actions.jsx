import "./Actions.css";

import { useUI } from "../../context/UIContext";
import { GalleryText, GetTicketsText, VideoText } from "../../lib/buttonTexts";

const FANDANGO_URL =
  "https://www.fandango.com/the-devil-wears-prada-2-2026-243909/movie-overview";

export default function Actions() {
  const { setActiveOverlay } = useUI();

  return (
    <section className="actions">
      <div className="actions__container">
        <button
          className="action-btn"
          onClick={() => setActiveOverlay("video")}
        >
          <VideoText />
        </button>
        <button
          className="action-btn"
          onClick={() => setActiveOverlay("gallery")}
        >
          <GalleryText />
        </button>
        <button
          className="action-btn"
          onClick={() => window.open(FANDANGO_URL, "_blank")}
        >
          <GetTicketsText />
        </button>
      </div>
    </section>
  );
}
