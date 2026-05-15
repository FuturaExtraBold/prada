import "./PreviewFrame.css";

import { forwardRef } from "react";

import imagePoster from "../../assets/images-compressed/poster.webp";

const PreviewFrame = forwardRef(function PreviewFrame(_props, ref) {
  return (
    <section ref={ref} className="preview-frame">
      <img className="preview-frame__poster" src={imagePoster} alt="poster" />
    </section>
  );
});

export default PreviewFrame;
