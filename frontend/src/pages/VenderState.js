import React from "react";
import VenderNav from "../components/VenderNav";
import "./sass/VenderState.scss";
import ItemBar from "../components/ItemBar";

function VenderState() {
  return (
    <div className="venderState">
      <div className="venderState__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="venderState__main">
        <VenderNav active={1} />
        <ItemBar />
      </div>
      VenderState
    </div>
  );
}

export default VenderState;
