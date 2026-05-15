import "./PreviewFrame.css";

import imagePoster from "../../assets/images-compressed/lockup/poster.webp";

export default function PreviewFrame() {
  return (
    <section className="preview-frame">
      <img className="preview-frame__poster" src={imagePoster} alt="poster" />
    </section>
  );
}
