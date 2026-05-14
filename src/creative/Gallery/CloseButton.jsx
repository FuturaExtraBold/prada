import "./CloseButton.css";

import { useUI } from "../../context/UIContext";
import { CloseX } from "../../lib/buttonTexts";

export default function CloseButton() {
  const { setActiveOverlay } = useUI();

  return (
    <button className="close-button" onClick={() => setActiveOverlay(null)}>
      <CloseX />
    </button>
  );
}
