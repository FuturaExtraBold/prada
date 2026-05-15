import "./Overlay.css";

import Gallery from "../Gallery/Gallery";

export default function Overlay({ type }) {
  return (
    <div className="overlay">
      <div className="overlay__background" aria-hidden="true" />
      <Gallery type={type} />
    </div>
  );
}
