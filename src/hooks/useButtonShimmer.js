import { gsap } from "gsap";
import { useEffect } from "react";

export default function useButtonShimmer(containerRef) {
  useEffect(() => {
    const sel = gsap.utils.selector(containerRef);
    const shimmers = sel(".action-btn__shimmer");

    const tweens = gsap.fromTo(
      shimmers,
      { x: "-150%" },
      {
        x: "150%",
        duration: 2,
        ease: "quad.out",
        repeat: -1,
        repeatDelay: 4,
        stagger: 0.125,
      },
    );

    return () => tweens.kill();
  }, [containerRef]);
}
