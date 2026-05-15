import "./Lockup.css";

import lockup from "../../assets/images-compressed/lockup/lockup.webp";
import nowPlaying from "../../assets/images-compressed/lockup/now-playing.webp";

export default function Lockup() {
  return (
    <div className="gallery-lockup">
      <img
        className="gallery-lockup__logo"
        src={lockup}
        alt="The Devil Wears Prada 2"
      />
      <img
        className="gallery-lockup__now-playing"
        src={nowPlaying}
        alt="Now Playing in Theaters"
      />
    </div>
  );
}
