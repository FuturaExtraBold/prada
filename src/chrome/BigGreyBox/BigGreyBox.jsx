import "./BigGreyBox.css";

import chromeBody from "../../assets/images-compressed/chrome-body.webp";
import TallAd from "../TallAd/TallAd";

export default function BigGreyBox() {
  return (
    <section className="big-grey-box">
      <div className="big-grey-box__inner">
        <img
          className="big-grey-box__chrome"
          src={chromeBody}
          alt=""
          aria-hidden="true"
          width="1280"
          height="1206"
        />
        <TallAd />
      </div>
    </section>
  );
}
