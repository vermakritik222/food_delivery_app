import React from "react";
import ItemBar from "../components/ItemBar";
import VenderOderDis from "../components/VenderOderDis";
import VisitorsBoard from "../components/VisitorsBoard";
import VenderNav from "../components/VenderNav";
import "./sass/VenderScreen.scss";

function VenderScreen(props) {
  const { oderId } = props;

  return (
    <div className="visitorsScreen">
      <div className="visitorsScreen__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="VisitorsScreen__main">
        <VenderNav />
        <ItemBar />
        <VisitorsBoard />
      </div>
      {oderId ? <VenderOderDis /> : ""}
    </div>
  );
}

export default VenderScreen;
