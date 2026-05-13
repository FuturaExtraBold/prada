import btnGalleryOut from "../../assets/images/buttons/gallery-out.png";
import btnGalleryOver from "../../assets/images/buttons/gallery-over.png";
import btnTicketsOut from "../../assets/images/buttons/tickets-out.png";
import btnTicketsOver from "../../assets/images/buttons/tickets-over.png";
import btnVideoOut from "../../assets/images/buttons/video-out.png";
import btnVideoOver from "../../assets/images/buttons/video-over.png";
import "./Actions.css";

export default function Actions() {
  return (
    <section className="actions">
      <div className="actions__container">
        <button className="actions__button actions__button--video">
          <img
            className="actions__button-image"
            src={btnVideoOut}
            alt="Play Video"
            onMouseOver={(e) => (e.currentTarget.src = btnVideoOver)}
            onMouseOut={(e) => (e.currentTarget.src = btnVideoOut)}
          />
        </button>
        <button className="actions__button actions__button--gallery">
          <img
            className="actions__button-image"
            src={btnGalleryOut}
            alt="View Gallery"
            onMouseOver={(e) => (e.currentTarget.src = btnGalleryOver)}
            onMouseOut={(e) => (e.currentTarget.src = btnGalleryOut)}
          />
        </button>
        <button className="actions__button actions__button--tickets">
          <img
            className="actions__button-image"
            src={btnTicketsOut}
            alt="Buy Tickets"
            onMouseOver={(e) => (e.currentTarget.src = btnTicketsOver)}
            onMouseOut={(e) => (e.currentTarget.src = btnTicketsOut)}
          />
        </button>
      </div>
    </section>
  );
}
