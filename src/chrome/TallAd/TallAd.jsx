import "./TallAd.css";

import { useRef, useState } from "react";

import posterSrc from "../../assets/images-compressed/vert-ad/vert-ad-poster.webp";
import videoSrc from "../../assets/video/tall-ad.mp4";
import ActionButton from "../../components/ActionButton/ActionButton";
import useButtonShimmer from "../../hooks/useButtonShimmer";
import { GetTicketsText } from "../../lib/svgs";

const FANDANGO_URL =
  "https://www.fandango.com/the-devil-wears-prada-2-2026-243909/movie-overview";

export default function TallAd() {
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const btnWrapRef = useRef(null);

  useButtonShimmer(btnWrapRef);

  function handleMouseEnter() {
    if (!videoRef.current || videoVisible) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setVideoVisible(true);
  }

  function handleVideoEnd() {
    setVideoVisible(false);
  }

  function handleClick() {
    window.open(FANDANGO_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className="tall-ad"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <img
        className="tall-ad__poster"
        src={posterSrc}
        alt="The Devil Wears Prada 2 — Get Tickets"
        width="300"
        height="600"
      />
      <video
        ref={videoRef}
        className="tall-ad__video"
        src={videoSrc}
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{ opacity: videoVisible ? 1 : 0 }}
      />
      <div ref={btnWrapRef} className="tall-ad__btn-wrap">
        <ActionButton
          small
          ariaLabel="Get tickets on Fandango"
          onClick={(e) => {
            e.stopPropagation();
            window.open(FANDANGO_URL, "_blank", "noopener,noreferrer");
          }}
        >
          <GetTicketsText />
        </ActionButton>
      </div>
    </div>
  );
}
