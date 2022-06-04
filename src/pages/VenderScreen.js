import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import VenderOderDis from "../components/VenderOderDis";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ItemBar from "../components/ItemBar";
import VisitorsBoard from "../components/VisitorsBoard";
import VenderNav from "../components/VenderNav";
import "./sass/VenderScreen.scss";

function VenderScreen(props) {
  const { oderId } = props;
  const [tab, setTab] = useState(1);

  const handleChange = (x, y) => {
    setTab(y);
  };
  return (
    <div className="visitorsScreen">
      <div className="visitorsScreen__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="VisitorsScreen__main">
        <VenderNav active={0} />
        <ItemBar />

        <div style={{ marginLeft: "80px" }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tab}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              iconPosition="start"
              icon={<FoodBankIcon />}
              value={1}
              label="Oder's"
            />
            <Tab
              iconPosition="start"
              icon={<FastfoodIcon />}
              value={2}
              label="Completed"
            />
            <Tab
              iconPosition="start"
              icon={<RestaurantIcon />}
              value={3}
              label="delivered"
            />
          </Tabs>
        </div>
        {tab === 1 && <VisitorsBoard />}
        {tab === 2 && <VisitorsBoard data />}
      </div>
      {oderId ? <VenderOderDis /> : ""}
    </div>
  );
}

export default VenderScreen;
