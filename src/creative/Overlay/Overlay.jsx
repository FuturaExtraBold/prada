import "./Overlay.css";

import { useRef } from "react";

import Gallery from "../Gallery/Gallery";

export default function Overlay({ type }) {
  const backgroundRef = useRef(null);

  return (
    <div className="overlay">
      <div ref={backgroundRef} className="overlay__background" aria-hidden="true" />
      <Gallery type={type} backgroundRef={backgroundRef} />
    </div>
  );
}
