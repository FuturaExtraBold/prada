import "./CloseButton.css";

import { forwardRef } from "react";

import { useUI } from "../../context/UIContext";
import { CloseX } from "../../lib/svgs";

const CloseButton = forwardRef(function CloseButton(_props, ref) {
  const { setActiveOverlay } = useUI();

  return (
    <button
      ref={ref}
      className="close-button"
      aria-label="Close"
      onClick={() => setActiveOverlay(null)}
    >
      <CloseX />
    </button>
  );
});

export default CloseButton;
