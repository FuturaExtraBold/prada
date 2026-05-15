import "./CloseButton.css";

import { useUI } from "../../context/UIContext";
import { CloseX } from "../../lib/svgs";

export default function CloseButton() {
  const { setActiveOverlay } = useUI();

  return (
    <button
      className="close-button"
      aria-label="Close"
      onClick={() => setActiveOverlay(null)}
    >
      <CloseX />
    </button>
  );
}
