import "./Pagination.css";

import pagActive from "../../assets/images/ui/pagination-active.png";
import pagInert from "../../assets/images/ui/pagination-inert.png";
import ActionButton from "../ActionButton/ActionButton";

export default function Pagination({ count, current, onChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: count }, (_, i) => (
        <ActionButton
          key={i}
          imgOut={i === current ? pagActive : pagInert}
          imgOver={i === current ? pagActive : pagInert}
          alt={`Go to slide ${i + 1}`}
          onClick={() => onChange(i)}
        />
      ))}
    </div>
  );
}
