import "./HalfPage.css";

import { useRef, useState } from "react";

import posterSrc from "../../assets/images-compressed/vert-ad/vert-ad-poster.webp";
import videoSrc from "../../assets/video/tall-ad.mp4";
import ActionButton from "../../components/ActionButton/ActionButton";
import useButtonShimmer from "../../hooks/useButtonShimmer";
import { FANDANGO_URL } from "../../lib/constants";
import { GetTicketsText } from "../../lib/svgs";

export default function HalfPage() {
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

  return (
    <a
      className="half-page"
      href={FANDANGO_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="The Devil Wears Prada 2 — Get Tickets on Fandango"
      onMouseEnter={handleMouseEnter}
    >
      <img
        className="half-page__poster"
        src={posterSrc}
        alt=""
        aria-hidden="true"
        width="300"
        height="600"
      />
      <video
        ref={videoRef}
        className={`half-page__video${videoVisible ? " half-page__video--visible" : ""}`}
        src={videoSrc}
        muted
        playsInline
        preload="none"
        onEnded={handleVideoEnd}
      />
      <div ref={btnWrapRef} className="half-page__btn-wrap">
        <ActionButton small tabIndex={-1} aria-hidden="true">
          <GetTicketsText />
        </ActionButton>
      </div>
    </a>
  );
}
