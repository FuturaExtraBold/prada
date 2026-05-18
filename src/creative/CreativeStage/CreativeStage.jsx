import "./CreativeStage.css";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { useUI } from "../../context/UIContext";
import useIntroTimeline from "../../hooks/useIntroTimeline";
import ActionsLayer from "../ActionsLayer/ActionsLayer";
import ContentArea from "../ContentArea/ContentArea";
import Overlay from "../Overlay/Overlay";

export default function CreativeStage() {
  const { activeOverlay, introKey } = useUI();

  const frameRef = useRef(null);
  const logoRef = useRef(null);
  const nowPlayingRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    if (activeOverlay === null) return;
    gsap.killTweensOf([frameRef.current, logoRef.current, nowPlayingRef.current]);
    gsap.to(frameRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
    gsap.to(logoRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
    gsap.to(nowPlayingRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
  }, [activeOverlay]);

  useIntroTimeline({ frameRef, logoRef, nowPlayingRef, actionsRef, replayKey: introKey });

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
