import "./ContentArea.css";

import layoutDefault from "../../assets/images/layout/layout.jpg";
import layoutGallery from "../../assets/images/layout/layout-gallery.jpg";
import layoutVideo from "../../assets/images/layout/layout-video.jpg";
import { useUI } from "../../context/UIContext";
import ContentDetail from "./ContentDetail";

const bgMap = {
  video: layoutVideo,
  gallery: layoutGallery,
};

export default function ContentArea() {
  const { activeOverlay } = useUI();
  const bg = bgMap[activeOverlay] ?? layoutDefault;

  return (
    <section className="content-area">
      <div
        className="content-area__background"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <div className="content-area__workable">
        <ContentDetail />
      </div>
    </section>
  );
}
