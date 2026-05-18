import "./Actions.css";

import { forwardRef } from "react";

import { useUI } from "../../context/UIContext";
import useButtonShimmer from "../../hooks/useButtonShimmer";
import { GalleryText, GetTicketsText, VideoText } from "../../lib/svgs";

const FANDANGO_URL =
  "https://www.fandango.com/the-devil-wears-prada-2-2026-243909/movie-overview";

const Actions = forwardRef(function Actions(_props, ref) {
  const { setActiveOverlay } = useUI();

  useButtonShimmer(ref);

  return (
    <section className="actions">
      <div ref={ref} className="actions__container">
        <button
          className="action-btn"
          aria-label="Watch video"
          onClick={() => setActiveOverlay("video")}
        >
          <VideoText />
          <span className="action-btn__shimmer" aria-hidden="true" />
        </button>
        <button
          className="action-btn"
          aria-label="View gallery"
          onClick={() => setActiveOverlay("gallery")}
        >
          <GalleryText />
          <span className="action-btn__shimmer" aria-hidden="true" />
        </button>
        <button
          className="action-btn"
          aria-label="Get tickets on Fandango"
          onClick={() => window.open(FANDANGO_URL, "_blank")}
        >
          <GetTicketsText />
          <span className="action-btn__shimmer" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
});

export default Actions;
