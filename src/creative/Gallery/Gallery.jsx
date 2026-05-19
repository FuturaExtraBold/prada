import "./Gallery.css";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import { useUI } from "../../context/UIContext";
import useGalleryTimeline from "../../hooks/useGalleryTimeline";
import Arrows from "./Arrows";
import CloseButton from "./CloseButton";
import { images, videos } from "./galleryAssets";
import Lockup from "./Lockup";
import Pagination from "./Pagination";

export default function Gallery({ type }) {
  const { setActiveOverlay, triggerIntroReplay } = useUI();
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundRef = useRef(null);
  const bodyRef = useRef(null);
  const frameRef = useRef(null);
  const arrowsRef = useRef(null);
  const paginationRef = useRef(null);
  const closeRef = useRef(null);
  const imageRef = useRef(null);
  const lockupLogoRef = useRef(null);
  const lockupNowPlayingRef = useRef(null);

  const isVideo = type === "video";
  const items = isVideo ? videos : images;
  const count = items.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [type]);

  useGalleryTimeline({
    backgroundRef,
    frameRef,
    arrowsRef,
    paginationRef,
    closeRef,
    imageRef,
    lockupLogoRef,
    lockupNowPlayingRef,
    currentIndex,
  });

  function navigate(nextIndex) {
    if (!imageRef.current) return setCurrentIndex(nextIndex);
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.15,
      ease: "none",
      onComplete: () => setCurrentIndex(nextIndex),
    });
  }

  function handleClose() {
    triggerIntroReplay();
    gsap.to([bodyRef.current, backgroundRef.current], {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setActiveOverlay(null),
    });
  }

  function handlePrev() {
    navigate((currentIndex - 1 + count) % count);
  }

  function handleNext() {
    navigate((currentIndex + 1) % count);
  }

  return (
    <div className="gallery">
      <div
        ref={backgroundRef}
        className="gallery__background"
        aria-hidden="true"
      />
      <div ref={bodyRef} className="gallery__body">
        <div className="gallery__unit">
          <div ref={frameRef} className="gallery__frame">
            <div className="gallery__content">
              {isVideo ? (
                <video
                  ref={imageRef}
                  key={currentIndex}
                  className="gallery__video"
                  src={items[currentIndex]}
                  autoPlay
                  playsInline
                  onEnded={handleNext}
                />
              ) : (
                <img
                  ref={imageRef}
                  className="gallery__image"
                  src={items[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                />
              )}
            </div>
            <Arrows ref={arrowsRef} onPrev={handlePrev} onNext={handleNext} />
            <Pagination
              ref={paginationRef}
              count={count}
              current={currentIndex}
              onChange={(i) => navigate(i)}
            />
            <CloseButton ref={closeRef} onClose={handleClose} />
          </div>
          <Lockup logoRef={lockupLogoRef} nowPlayingRef={lockupNowPlayingRef} />
        </div>
      </div>
    </div>
  );
}
