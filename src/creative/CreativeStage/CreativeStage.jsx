import "./CreativeStage.css";

import { useUI } from "../../context/UIContext";
import ActionsLayer from "../ActionsLayer/ActionsLayer";
import ContentArea from "../ContentArea/ContentArea";
import GalleryOverlay from "../GalleryOverlay/GalleryOverlay";
import VideoOverlay from "../VideoOverlay/VideoOverlay";

export default function CreativeStage() {
  const { activeOverlay } = useUI();

  return (
    <div className="creative-stage">
      <ContentArea />
      {activeOverlay === "video" && <VideoOverlay />}
      {activeOverlay === "gallery" && <GalleryOverlay />}
      <ActionsLayer />
    </div>
  );
}
