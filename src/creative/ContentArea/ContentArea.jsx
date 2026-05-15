import "./ContentArea.css";

import { forwardRef } from "react";

import ContentDetail from "./ContentDetail";

const ContentArea = forwardRef(function ContentArea(
  { frameRef, logoRef, nowPlayingRef },
  _ref,
) {
  return (
    <section className="content-area">
      <div className="content-area__background" aria-hidden="true" />
      <div className="content-area__workable">
        <ContentDetail
          frameRef={frameRef}
          logoRef={logoRef}
          nowPlayingRef={nowPlayingRef}
        />
      </div>
    </section>
  );
});

export default ContentArea;
