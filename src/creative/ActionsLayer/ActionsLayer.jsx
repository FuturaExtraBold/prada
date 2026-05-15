import "./ActionsLayer.css";

import { forwardRef } from "react";

import Actions from "./Actions";

const ActionsLayer = forwardRef(function ActionsLayer(_props, ref) {
  return (
    <div className="actions-layer">
      <div className="actions-layer__inner">
        <Actions ref={ref} />
      </div>
    </div>
  );
});

export default ActionsLayer;
