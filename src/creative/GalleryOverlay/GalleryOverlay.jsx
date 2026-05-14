import "./GalleryOverlay.css";

import Gallery from "../Gallery/Gallery";

export default function GalleryOverlay() {
  return (
    <div className="gallery-overlay">
      <Gallery type="image" />
    </div>
  );
}
