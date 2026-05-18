import { gsap } from "gsap";
import { useEffect } from "react";

export default function useGalleryTimeline({
  frameRef,
  arrowsRef,
  paginationRef,
  closeRef,
  imageRef,
  lockupLogoRef,
  lockupNowPlayingRef,
  currentIndex,
}) {
  // Open animation — runs once on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(frameRef.current, {
        y: -10,
        scale: 1.05,
        opacity: 0,
        duration: 1,
      })
        .from(
          [arrowsRef.current.children, paginationRef.current.children],
          { y: 10, opacity: 0, duration: 0.8 },
          "<",
        )
        .from(closeRef.current, { opacity: 0, duration: 0.6 }, "<")
        .from(
          lockupLogoRef.current,
          { y: 20, opacity: 0, duration: 1.2 },
          "-=0.8",
        )
        .from(
          lockupNowPlayingRef.current,
          { y: 20, opacity: 0, duration: 1.8 },
          "-=1.1",
        );
    });

    return () => ctx.revert();
  }, [
    frameRef,
    arrowsRef,
    paginationRef,
    closeRef,
    lockupLogoRef,
    lockupNowPlayingRef,
  ]);

  // Image in — runs on mount and every slide change
  useEffect(() => {
    if (!imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1.1,
        transformOrigin: "center center",
      });
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.1,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  }, [currentIndex, imageRef]);
}
