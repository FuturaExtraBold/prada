import { gsap } from "gsap";
import { useEffect } from "react";

export default function useIntroTimeline({
  frameRef,
  logoRef,
  nowPlayingRef,
  actionsRef,
  replayKey = 0,
}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (replayKey === 0) {
        gsap.set(
          [
            frameRef.current,
            logoRef.current,
            nowPlayingRef.current,
            ...actionsRef.current.children,
          ],
          { opacity: 0 },
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        frameRef.current,
        { y: -10, scale: 1.05, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1, delay: 0.4 },
      )
        .fromTo(
          logoRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5 },
          "-=0.8",
        )
        .fromTo(
          nowPlayingRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 2 },
          "-=1.3",
        );

      if (replayKey === 1) {
        tl.fromTo(
          actionsRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=1.8",
        );
      } else {
        gsap.set(actionsRef.current.children, { y: 0, opacity: 1 });
      }
    });

    // kill (not revert) so completed tweens don't snap elements back on cleanup
    return () => ctx.kill();
  }, [frameRef, logoRef, nowPlayingRef, actionsRef, replayKey]);
}
