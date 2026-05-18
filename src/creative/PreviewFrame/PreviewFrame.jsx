import "./PreviewFrame.css";

import { forwardRef, useEffect, useRef, useState } from "react";

import imagePoster from "../../assets/images-compressed/poster.webp";
import replayIcon from "../../assets/images-compressed/replay-audio-icon.webp";
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
    if (!videoRef.current) return;
    if (muted) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setMuted(false);
    } else {
      videoRef.current.muted = true;
      setMuted(true);
    }
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
        preload="none"
      />
      <img
        className="preview-frame__icon"
        src={replayIcon}
        alt="Click to replay with audio"
        width="128"
        height="128"
        style={{ opacity: muted ? 1 : 0 }}
      />
    </section>
  );
});

export default PreviewFrame;
