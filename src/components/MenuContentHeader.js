import React from "react";
import "./sass/MenuContentHeader.scss";

function MenuContentHeader() {
  return (
    <div className="menuContentHeader fixed-content" style={{ top: "7.1rem" }}>
      <div className="menuContentHeader__head">
        <div className="menuContentHeader__head_active">Oder Online</div>
        <div>Photos</div>
      </div>
    </div>
  );
}

export default MenuContentHeader;
