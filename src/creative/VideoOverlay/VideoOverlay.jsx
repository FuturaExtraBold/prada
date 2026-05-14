import "./VideoOverlay.css";

import Gallery from "../Gallery/Gallery";

export default function VideoOverlay() {
  return (
    <div className="video-overlay">
      <div className="video-overlay__background" aria-hidden="true" />
      <Gallery type="video" />
    </div>
  );
}
