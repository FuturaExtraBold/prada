import "./ContentArea.css";
import ContentDetail from "./ContentDetail";

export default function ContentArea() {
  return (
    <section className="content-area">
      <div className="content-area__background" aria-hidden="true" />
      <div className="content-area__workable">
        <ContentDetail />
      </div>
    </section>
  );
}
