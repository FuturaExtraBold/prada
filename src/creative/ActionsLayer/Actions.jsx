import "./Actions.css";

import { forwardRef } from "react";

import ActionButton from "../../components/ActionButton/ActionButton";
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
        <ActionButton
          ariaLabel="Watch video"
          onClick={() => setActiveOverlay("video")}
        >
          <VideoText />
        </ActionButton>
        <ActionButton
          ariaLabel="View gallery"
          onClick={() => setActiveOverlay("gallery")}
        >
          <GalleryText />
        </ActionButton>
        <ActionButton
          ariaLabel="Get tickets on Fandango"
          onClick={() => window.open(FANDANGO_URL, "_blank")}
        >
          <GetTicketsText />
        </ActionButton>
      </div>
    </section>
  );
});

export default Actions;
