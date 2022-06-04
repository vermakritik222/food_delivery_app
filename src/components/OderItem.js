import React, { useState } from "react";
import { Done } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./sass/OderItem.scss";

function OderItem() {
  const [prepared, setPrepared] = useState(false);

  return (
    <div
      className="oderItem"
      style={prepared ? { background: "#c2f2c2d1" } : {}}
    >
      <div className="oderItem__img">
        <img src="/images/food1.avif" alt="" />
      </div>
      <div className="oderItem__content">
        <h2>
          Burger
          <span>Product Id : #dsgefjbrfeuib98465684</span>{" "}
        </h2>
        <p>Quantity : 2</p>
        <p>Price : $234</p>
        <p>Addons : one extra splice of chess</p>
      </div>
      <IconButton
        onClick={() => {
          prepared ? setPrepared(false) : setPrepared(true);
        }}
        className="oderItem__doneBtn"
        size="small"
        style={
          prepared
            ? {
                backgroundColor: "#9ed49ec9",
                color: "rgb(11, 188, 11)",
              }
            : {
                color: "#ff5968",
                backgroundColor: "#f9c1c6",
              }
        }
      >
        <Done />
      </IconButton>
    </div>
  );
}

export default OderItem;
