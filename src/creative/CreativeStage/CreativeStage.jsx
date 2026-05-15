import "./CreativeStage.css";

import { useUI } from "../../context/UIContext";
import ActionsLayer from "../ActionsLayer/ActionsLayer";
import ContentArea from "../ContentArea/ContentArea";
import Overlay from "../Overlay/Overlay";

export default function CreativeStage() {
  const { activeOverlay } = useUI();

  return (
    <div className="creative-stage">
      <ContentArea />
      {activeOverlay && <Overlay type={activeOverlay} />}
      <ActionsLayer />
    </div>
  );
}
