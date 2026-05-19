import "./Splash.css";

import gsap from "gsap";
import { useRef, useState } from "react";

import splashSrc from "../../assets/video/splash.mp4";
import ActionButton from "../../components/ActionButton/ActionButton";
import { useUI } from "../../context/UIContext";
import useButtonShimmer from "../../hooks/useButtonShimmer";
import { FANDANGO_URL } from "../../lib/constants";
import { GetTicketsText, SkipIntroText } from "../../lib/svgs";

export default function Splash() {
  const [done, setDone] = useState(false);
  const splashRef = useRef(null);
  const dismissedRef = useRef(false);
  const btnRowRef = useRef(null);
  const { triggerIntroReplay } = useUI();

  useButtonShimmer(btnRowRef);

  function dismiss() {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    triggerIntroReplay();
    gsap.to(splashRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setDone(true),
    });
  }

  if (done) return null;

  return (
    <div ref={splashRef} className="splash">
      <video
        className="splash__video"
        src={splashSrc}
        autoPlay
        muted
        playsInline
        onEnded={dismiss}
      />
      <div ref={btnRowRef} className="splash__actions">
        <ActionButton ariaLabel="Skip trailer" onClick={dismiss}>
          <SkipIntroText />
        </ActionButton>
        <ActionButton
          ariaLabel="Get tickets on Fandango"
          onClick={() =>
            window.open(FANDANGO_URL, "_blank", "noopener,noreferrer")
          }
        >
          <GetTicketsText />
        </ActionButton>
      </div>
    </div>
  );
}
