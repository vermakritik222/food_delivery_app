import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  DashboardOutlined,
  AddBusinessOutlined,
  BarChartOutlined,
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowLeft,
  MenuBookRounded,
} from "@mui/icons-material";
import "./sass/VenderNav.scss";

function VenderNav(prams) {
  const { active } = prams;
  const [drag, setDrag] = useState(false);
  const history = useHistory();

  return (
    <div className="visitorsNav" style={drag ? {} : { left: "-270px" }}>
      <ul className="visitorsNav__list">
        <li>
          <div
            className={
              active === 0
                ? "visitorsNav__item visitorsNav__active"
                : "visitorsNav__item"
            }
            onClick={() => history.push("/vender/oders")}
          >
            <div className="visitorsNav__icon">
              <DashboardOutlined />
            </div>
            <p>Oder's</p>
          </div>
        </li>
        <li>
          <div
            className={
              active === 1
                ? "visitorsNav__item visitorsNav__active"
                : "visitorsNav__item"
            }
            onClick={() => history.push("/vender/state")}
          >
            <div className="visitorsNav__icon">
              <BarChartOutlined />
            </div>
            <p>Statics</p>
          </div>
        </li>
        <li>
          <div
            className={
              active === 2
                ? "visitorsNav__item visitorsNav__active"
                : "visitorsNav__item"
            }
            onClick={() => history.push("/vender/products")}
          >
            <div className="visitorsNav__icon">
              <AddBusinessOutlined />
            </div>
            <p>Add Product</p>
          </div>
        </li>
        <li>
          <div
            className={
              active === 3
                ? "visitorsNav__item visitorsNav__active"
                : "visitorsNav__item"
            }
            onClick={() => history.push("/vender/menu")}
          >
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
        style={drag ? {} : { left: "275px" }}
      >
        <IconButton
          // size="large"
          style={{ color: "#ffff", background: "#ef4f5f" }}
        >
          {drag ? (
            <KeyboardDoubleArrowLeft style={{ fontSize: "25px" }} />
          ) : (
            <KeyboardDoubleArrowRight style={{ fontSize: "25px" }} />
          )}
        </IconButton>
        {/* <Button
          style={{ color: "#ffff", background: "#ef4f5f" }}
          startIcon={
            drag ? (
              <KeyboardDoubleArrowLeft style={{ fontSize: "20px" }} />
            ) : (
              <KeyboardDoubleArrowRight />
            )
          }
        ></Button> */}
      </div>
    </div>
  );
}

export default VenderNav;
