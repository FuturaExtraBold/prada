import "./CreativeStage.css";

import { useRef } from "react";

import { useUI } from "../../context/UIContext";
import useIntroTimeline from "../../hooks/useIntroTimeline";
import ActionsLayer from "../ActionsLayer/ActionsLayer";
import ContentArea from "../ContentArea/ContentArea";
import Overlay from "../Overlay/Overlay";

export default function CreativeStage() {
  const { activeOverlay } = useUI();

  const frameRef = useRef(null);
  const logoRef = useRef(null);
  const nowPlayingRef = useRef(null);
  const actionsRef = useRef(null);

  useIntroTimeline({ frameRef, logoRef, nowPlayingRef, actionsRef });

  return (
    <div className="creative-stage">
      <ContentArea
        frameRef={frameRef}
        logoRef={logoRef}
        nowPlayingRef={nowPlayingRef}
      />
      {activeOverlay && <Overlay type={activeOverlay} />}
      <ActionsLayer ref={actionsRef} />
    </div>
  );
}
