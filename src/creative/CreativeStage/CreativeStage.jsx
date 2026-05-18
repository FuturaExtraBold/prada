import "./CreativeStage.css";

import { useEffect, useRef, useState } from "react";

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
  const prevOverlay = useRef(activeOverlay);

  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    if (prevOverlay.current !== null && activeOverlay === null) {
      setReplayKey((k) => k + 1);
    }
    prevOverlay.current = activeOverlay;
  }, [activeOverlay]);

  useIntroTimeline({ frameRef, logoRef, nowPlayingRef, actionsRef, replayKey });

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
