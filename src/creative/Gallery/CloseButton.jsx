import "./CloseButton.css";

import { forwardRef } from "react";

import { CloseX } from "../../lib/svgs";

const CloseButton = forwardRef(function CloseButton({ onClose }, ref) {
  return (
    <button
      ref={ref}
      className="close-button"
      aria-label="Close"
      onClick={onClose}
    >
      <CloseX />
    </button>
  );
});

export default CloseButton;
