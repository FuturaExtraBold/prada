import "./Arrows.css";

import nextOut from "../../assets/images/ui/next-out.png";
import nextOver from "../../assets/images/ui/next-over.png";
import prevOut from "../../assets/images/ui/prev-out.png";
import prevOver from "../../assets/images/ui/prev-over.png";
import ActionButton from "../ActionButton/ActionButton";

export default function Arrows({ onPrev, onNext }) {
  return (
    <>
      <div className="arrow arrow--prev">
        <ActionButton
          imgOut={prevOut}
          imgOver={prevOver}
          alt="Previous"
          onClick={onPrev}
        />
      </div>
      <div className="arrow arrow--next">
        <ActionButton
          imgOut={nextOut}
          imgOver={nextOver}
          alt="Next"
          onClick={onNext}
        />
      </div>
    </>
  );
}
