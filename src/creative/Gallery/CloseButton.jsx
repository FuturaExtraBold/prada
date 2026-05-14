import "./CloseButton.css";

import closeOut from "../../assets/images/ui/close-out.png";
import closeOver from "../../assets/images/ui/close-over.png";
import { useUI } from "../../context/UIContext";
import ActionButton from "../ActionButton/ActionButton";

export default function CloseButton() {
  const { setActiveOverlay } = useUI();

  return (
    <div className="close-button">
      <ActionButton
        imgOut={closeOut}
        imgOver={closeOver}
        alt="Close"
        onClick={() => setActiveOverlay(null)}
      />
    </div>
  );
}
