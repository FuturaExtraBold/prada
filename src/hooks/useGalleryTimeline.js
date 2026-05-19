import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function useGalleryTimeline({
  backgroundRef,
  frameRef,
  arrowsRef,
  paginationRef,
  closeRef,
  imageRef,
  lockupLogoRef,
  lockupNowPlayingRef,
  currentIndex,
}) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(backgroundRef.current, { y: 20, opacity: 0, duration: 1 }, "open")
        .from(
          frameRef.current,
          { y: -50, scale: 1.05, opacity: 0, duration: 1 },
          "open",
        )
        .from(
          closeRef.current,
          { y: -20, opacity: 0, duration: 0.6 },
          "open+=0.5",
        )
        .from(
          paginationRef.current.children,
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.04 },
          "open+=0.6",
        )
        .from(
          arrowsRef.current.children,
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 },
          "open+=0.6",
        )
        .from(
          lockupLogoRef.current,
          { y: 20, opacity: 0, duration: 0.9 },
          "open+=0.5",
        )
        .from(
          lockupNowPlayingRef.current,
          { y: 20, opacity: 0, duration: 1.2 },
          "open+=0.6",
        );
    });

    return () => ctx.revert();
  }, [
    backgroundRef,
    frameRef,
    arrowsRef,
    paginationRef,
    closeRef,
    lockupLogoRef,
    lockupNowPlayingRef,
  ]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
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
