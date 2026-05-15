import "./Gallery.css";

import { useState } from "react";

import gallery01 from "../../assets/images-compressed/gallery/gallery-01.webp";
import gallery02 from "../../assets/images-compressed/gallery/gallery-02.webp";
import gallery03 from "../../assets/images-compressed/gallery/gallery-03.webp";
import gallery04 from "../../assets/images-compressed/gallery/gallery-04.webp";
import gallery05 from "../../assets/images-compressed/gallery/gallery-05.webp";
import gallery06 from "../../assets/images-compressed/gallery/gallery-06.webp";
import gallery07 from "../../assets/images-compressed/gallery/gallery-07.webp";
import gallery08 from "../../assets/images-compressed/gallery/gallery-08.webp";
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

export default function Gallery({ type }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const count = type === "image" ? images.length : 1;

  function handlePrev() {
    setCurrentIndex((i) => (i - 1 + count) % count);
  }

  function handleNext() {
    setCurrentIndex((i) => (i + 1) % count);
  }

  return (
    <div className="gallery">
      <div className="gallery__unit">
        <div
          className={`gallery__frame${type === "video" ? " gallery__frame--video" : ""}`}
        >
          <div className="gallery__content">
            {type === "image" ? (
              <img
                className="gallery__image"
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
              />
            ) : (
              <div className="gallery__video-stub">Video — stub</div>
            )}
          </div>
          <Arrows onPrev={handlePrev} onNext={handleNext} />
          <Pagination
            count={count}
            current={currentIndex}
            onChange={setCurrentIndex}
          />
          <CloseButton />
        </div>
        <Lockup />
      </div>
    </div>
  );
}
