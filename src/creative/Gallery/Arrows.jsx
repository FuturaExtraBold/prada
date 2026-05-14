import "./Arrows.css";

export default function Arrows({ onPrev, onNext }) {
  return (
    <>
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
    </>
  );
}
