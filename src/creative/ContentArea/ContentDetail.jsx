import "./ContentDetail.css";

import logoImage from "../../assets/images-compressed/lockup.webp";
import { NowPlayingTagline } from "../../lib/svgs";
import PreviewFrame from "../PreviewFrame/PreviewFrame";

export default function ContentDetail({ frameRef, logoRef, nowPlayingRef }) {
  return (
    <section className="content-detail">
      <PreviewFrame ref={frameRef} />
      <img
        ref={logoRef}
        className="content-detail__logo"
        src={logoImage}
        alt="The Devil Wears Prada 2 Logo"
        width="238"
        height="171"
      />
      <div ref={nowPlayingRef} className="content-detail__release-window">
        <NowPlayingTagline aria-label="Now Playing Only in Theaters" />
      </div>
    </section>
  );
}
