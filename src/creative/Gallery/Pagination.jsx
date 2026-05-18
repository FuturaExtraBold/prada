import "./Pagination.css";

import { forwardRef } from "react";

const Pagination = forwardRef(function Pagination(
  { count, current, onChange },
  ref,
) {
  return (
    <div ref={ref} className="pagination">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          className={`pagination__dot${i === current ? " pagination__dot--active" : ""}`}
          onClick={() => onChange(i)}
          aria-label={`Go to slide ${i + 1}`}
        >
          <span className="pagination__dot-visual" />
        </button>
      ))}
    </div>
  );
});

export default Pagination;
