import "./ContentDetail.css";

import { forwardRef } from "react";

import logoImage from "../../assets/images-compressed/lockup.webp";
import { NowPlayingTagline } from "../../lib/svgs";
import PreviewFrame from "../PreviewFrame/PreviewFrame";

const ContentDetail = forwardRef(function ContentDetail(
  { frameRef, logoRef, nowPlayingRef },
  _ref,
) {
  return (
    <section className="content-detail">
      <PreviewFrame ref={frameRef} />
      <img
        ref={logoRef}
        className="content-detail__logo"
        src={logoImage}
        alt="The Devil Wears Prada 2 Logo"
      />
      <div ref={nowPlayingRef} className="content-detail__release-window">
        <NowPlayingTagline aria-label="Now Playing Only in Theaters" />
      </div>
    </section>
  );
});

export default ContentDetail;
