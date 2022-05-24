import React, { useState } from "react";
import "./sass/VenderNav.scss";
import {
  DashboardOutlined,
  AddBusinessOutlined,
  BarChartOutlined,
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowLeft,
  MenuBookRounded,
} from "@mui/icons-material";
import { Button } from "@mui/material";

function VenderNav() {
  const [drag, setDrag] = useState(false);
  return (
    <div className="visitorsNav" style={drag ? {} : { left: "-270px" }}>
      <ul className="visitorsNav__list">
        <li>
          <div className="visitorsNav__item visitorsNav__active">
            <div className="visitorsNav__icon">
              <DashboardOutlined />
            </div>
            <p>Oder's</p>
          </div>
        </li>
        <li>
          <div className="visitorsNav__item ">
            <div className="visitorsNav__icon">
              <BarChartOutlined />
            </div>
            <p>Statics</p>
          </div>
        </li>
        <li>
          <div className="visitorsNav__item">
            <div className="visitorsNav__icon">
              <AddBusinessOutlined />
            </div>
            <p>Add Product</p>
          </div>
        </li>
        <li>
          <div className="visitorsNav__item">
            <div className="visitorsNav__icon">
              <MenuBookRounded />
            </div>
            <p>Menu</p>
          </div>
        </li>
      </ul>

      <div
        className="visitorsNav__dragBtn"
        onClick={() => {
          drag ? setDrag(false) : setDrag(true);
        }}
        style={drag ? {} : { left: "280px" }}
      >
        <Button
          style={{ color: "#ffff", background: "#ef4f5f" }}
          startIcon={
            drag ? (
              <KeyboardDoubleArrowLeft style={{ fontSize: "20px" }} />
            ) : (
              <KeyboardDoubleArrowRight />
            )
          }
        ></Button>
      </div>
    </div>
  );
}

export default VenderNav;
