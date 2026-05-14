import "./ActionButton.css";

import { useState } from "react";

export default function ActionButton({ imgOut, imgOver, alt, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="action-button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className="action-button__image"
        src={hovered ? imgOver : imgOut}
        alt={alt}
      />
    </button>
  );
}
