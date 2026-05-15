import "./ContentArea.css";

import logoImage from "../../assets/images-compressed/lockup.webp";
import { NowPlayingTagline } from "../../lib/svgs";
import PreviewFrame from "../PreviewFrame/PreviewFrame";

export default function ContentDetail() {
  return (
    <section className="content-detail">
      <PreviewFrame />
      <img
        className="content-detail__logo"
        src={logoImage}
        alt="The Devil Wears Prada 2 Logo"
      />
      <div className="content-detail__release-window">
        <NowPlayingTagline aria-label="Now Playing Only in Theaters" />
      </div>
    </section>
  );
}
