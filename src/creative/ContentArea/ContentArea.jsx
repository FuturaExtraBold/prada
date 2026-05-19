import "./ContentArea.css";

import layoutImage from "../../assets/images-compressed/layout.webp";
import ContentDetail from "./ContentDetail";

export default function ContentArea({ frameRef, logoRef, nowPlayingRef }) {
  return (
    <section className="content-area">
      <img
        className="content-area__background"
        src={layoutImage}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1500"
        fetchPriority="high"
      />
      <div className="content-area__workable">
        <ContentDetail
          frameRef={frameRef}
          logoRef={logoRef}
          nowPlayingRef={nowPlayingRef}
        />
      </div>
    </section>
  );
}
