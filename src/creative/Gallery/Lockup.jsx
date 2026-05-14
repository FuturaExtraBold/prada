import "./Lockup.css";

import lockupSmall from "../../assets/images/lockup/lockup-small.png";
import nowPlaying from "../../assets/images/lockup/now-playing.png";

export default function Lockup() {
  return (
    <div className="gallery-lockup">
      <img className="gallery-lockup__logo" src={lockupSmall} alt="The Devil Wears Prada 2" />
      <img className="gallery-lockup__now-playing" src={nowPlaying} alt="Now Playing in Theaters" />
    </div>
  );
}
