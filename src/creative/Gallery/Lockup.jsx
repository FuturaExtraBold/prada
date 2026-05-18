import "./Lockup.css";

import lockup from "../../assets/images-compressed/lockup.webp";
import { NowPlayingText } from "../../lib/svgs";

export default function Lockup({ logoRef, nowPlayingRef }) {
  return (
    <div className="gallery-lockup">
      <img
        ref={logoRef}
        className="gallery-lockup__logo"
        src={lockup}
        alt="The Devil Wears Prada 2"
      />
      <div ref={nowPlayingRef} className="gallery-lockup__now-playing">
        <NowPlayingText aria-label="Now Playing in Theaters" />
      </div>
    </div>
  );
}
