import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ItemBar from "../components/ItemBar";
import VenderNav from "../components/VenderNav";
import VenderMenuPopup from "../components/VenderMenuPopup";
import MenuBoard from "../components/MenuBoard";
import "./sass/VenderMenu.scss";

function VenderMenu({ hasId }) {
  const { id } = useParams();
  const [tab, setTab] = useState(1);

  const handleChange = (x, y) => {
    setTab(y);
  };

  return (
    <div className="venderMenu">
      <div className="venderMenu__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="venderMenu__main">
        <VenderNav active={3} />
        <ItemBar />
        <div style={{ marginLeft: "80px", position: "sticky", top: "0" }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={tab}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              iconPosition="start"
              icon={<ShoppingCartCheckoutIcon />}
              value={1}
              label="in stock"
            />
            <Tab
              iconPosition="start"
              icon={<ProductionQuantityLimitsIcon />}
              value={2}
              label="out stock"
            />
            {/* <Tab
              iconPosition="start"
              icon={<RestaurantIcon />}
              value={3}
              label="delivered"
            /> */}
          </Tabs>
        </div>
        {tab === 1 && <MenuBoard />}
        {tab === 2 && <MenuBoard data />}
      </div>
      {hasId && <VenderMenuPopup />}
      {/* <VenderMenuPopup /> */}
    </div>
  );
}

export default VenderMenu;
