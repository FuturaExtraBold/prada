import "./PreviewFrame.css";

import { forwardRef, useEffect, useRef, useState } from "react";

import imagePoster from "../../assets/images-compressed/poster.webp";
import trailerSrc from "../../assets/video/trailer.mp4";
import { useUI } from "../../context/UIContext";

const PreviewFrame = forwardRef(function PreviewFrame(_props, ref) {
  const { activeOverlay } = useUI();
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (activeOverlay !== null && videoRef.current) {
      videoRef.current.muted = true;
      setMuted(true);
    }
  }, [activeOverlay]);

  function handleClick() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  return (
    <section ref={ref} className="preview-frame" onClick={handleClick}>
      <video
        ref={videoRef}
        className="preview-frame__trailer"
        src={trailerSrc}
        poster={imagePoster}
        autoPlay
        muted
        loop
        playsInline
      />
      {muted && (
        <div className="preview-frame__unmute" aria-hidden="true">
          <MuteIcon />
        </div>
      )}
    </section>
  );
});

function MuteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3.63 3.63a1 1 0 0 0-1.41 1.41L7.29 10.1 7 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3l4.72 3.54c.35.26.78.1.78-.37v-3.38l4.73 4.73a1 1 0 0 0 1.41-1.41L3.63 3.63zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53A7.93 7.93 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06A6.002 6.002 0 0 1 19 12zm-7-8L9.91 5.09 12 7.18V4zM16.5 12A4.5 4.5 0 0 0 14 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
    </svg>
  );
}

export default PreviewFrame;
