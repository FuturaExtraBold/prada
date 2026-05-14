import "./Actions.css";

import btnGalleryOut from "../../assets/images/buttons/gallery-out.png";
import btnGalleryOver from "../../assets/images/buttons/gallery-over.png";
import btnTicketsOut from "../../assets/images/buttons/tickets-out.png";
import btnTicketsOver from "../../assets/images/buttons/tickets-over.png";
import btnVideoOut from "../../assets/images/buttons/video-out.png";
import btnVideoOver from "../../assets/images/buttons/video-over.png";
import { useUI } from "../../context/UIContext";
import ActionButton from "../ActionButton/ActionButton";

const FANDANGO_URL =
  "https://www.fandango.com/the-devil-wears-prada-2-2026-243909/movie-overview";

export default function Actions() {
  const { setActiveOverlay } = useUI();

  return (
    <section className="actions">
      <div className="actions__container">
        <ActionButton
          imgOut={btnVideoOut}
          imgOver={btnVideoOver}
          alt="Play Video"
          onClick={() => setActiveOverlay("video")}
        />
        <ActionButton
          imgOut={btnGalleryOut}
          imgOver={btnGalleryOver}
          alt="View Gallery"
          onClick={() => setActiveOverlay("gallery")}
        />
        <ActionButton
          imgOut={btnTicketsOut}
          imgOver={btnTicketsOver}
          alt="Buy Tickets"
          onClick={() => window.open(FANDANGO_URL, "_blank")}
        />
      </div>
    </section>
  );
}
