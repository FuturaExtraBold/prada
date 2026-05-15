import { gsap } from "gsap";
import { useEffect } from "react";

export default function useIntroTimeline({
  frameRef,
  logoRef,
  nowPlayingRef,
  actionsRef,
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(frameRef.current, {
        y: -50,
        scale: 1.4,
        opacity: 0,
        duration: 1,
        delay: 0.4,
      })
        .from(logoRef.current, { y: 10, opacity: 0, duration: 1.5 }, "-=0.8")
        .from(
          nowPlayingRef.current,
          { y: 20, opacity: 0, duration: 2 },
          "-=1.3",
        )
        .from(
          actionsRef.current.children,
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=1.8",
        );
    });

    return () => ctx.revert();
  }, [frameRef, logoRef, nowPlayingRef, actionsRef]);
}
