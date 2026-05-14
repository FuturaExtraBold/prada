import "./GalleryOverlay.css";

import Gallery from "../Gallery/Gallery";

export default function GalleryOverlay() {
  return (
    <div className="gallery-overlay">
      <div className="gallery-overlay__background" aria-hidden="true" />
      <Gallery type="image" />
    </div>
  );
}
