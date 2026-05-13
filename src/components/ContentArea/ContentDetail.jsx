import logoImage from "../../assets/images/lockup/lockup.png";
import releaseImage from "../../assets/images/lockup/now-playing-theaters.png";
import Actions from "./Actions";
import PreviewFrame from "../PreviewFrame/PreviewFrame";
import "./ContentArea.css";

export default function ContentDetail() {
  return (
    <section className="content-detail">
      <PreviewFrame />
      <img
        className="content-detail__logo"
        src={logoImage}
        alt="The Devil Wears Prada 2 Logo"
      />
      <img
        className="content-detail__release-window"
        src={releaseImage}
        alt="Now Playing in Theaters"
        aria-hidden="true"
      />
      <Actions />
    </section>
  );
}
