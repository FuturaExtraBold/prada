import "./Gallery.css";

import { gsap } from "gsap";
import { useRef, useState } from "react";

import { useUI } from "../../context/UIContext";
import gallery01 from "../../assets/images-compressed/gallery/gallery-01.webp";
import gallery02 from "../../assets/images-compressed/gallery/gallery-02.webp";
import gallery03 from "../../assets/images-compressed/gallery/gallery-03.webp";
import gallery04 from "../../assets/images-compressed/gallery/gallery-04.webp";
import gallery05 from "../../assets/images-compressed/gallery/gallery-05.webp";
import gallery06 from "../../assets/images-compressed/gallery/gallery-06.webp";
import gallery07 from "../../assets/images-compressed/gallery/gallery-07.webp";
import gallery08 from "../../assets/images-compressed/gallery/gallery-08.webp";
import videoGallery01 from "../../assets/video/gallery-01.mp4";
import videoGallery02 from "../../assets/video/gallery-02.mp4";
import videoGallery03 from "../../assets/video/gallery-03.mp4";
import videoGallery04 from "../../assets/video/gallery-04.mp4";
import useGalleryTimeline from "../../hooks/useGalleryTimeline";
import Arrows from "./Arrows";
import CloseButton from "./CloseButton";
import Lockup from "./Lockup";
import Pagination from "./Pagination";

const images = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
];

const videos = [videoGallery01, videoGallery02, videoGallery03, videoGallery04];

export default function Gallery({ type, backgroundRef }) {
  const { setActiveOverlay, triggerIntroReplay } = useUI();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryRef = useRef(null);
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
    gsap.to([galleryRef.current, backgroundRef.current], {
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
    <div ref={galleryRef} className="gallery">
      <div className="gallery__unit">
        <div ref={frameRef} className="gallery__frame">
          <div className="gallery__content">
            {isVideo ? (
              <video
                ref={imageRef}
                key={currentIndex}
                className="gallery__video"
                src={videos[currentIndex]}
                autoPlay
                loop
                playsInline
              />
            ) : (
              <img
                ref={imageRef}
                className="gallery__image"
                src={images[currentIndex]}
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
  );
}
