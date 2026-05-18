import "./Arrows.css";

import { forwardRef } from "react";

const Arrows = forwardRef(function Arrows({ onPrev, onNext }, ref) {
  return (
    <div ref={ref} className="arrows">
      <button
        className="arrow arrow--prev"
        onClick={onPrev}
        aria-label="Previous"
      >
        <span className="arrow__triangle" />
      </button>
      <button className="arrow arrow--next" onClick={onNext} aria-label="Next">
        <span className="arrow__triangle" />
      </button>
    </div>
  );
});

export default Arrows;
