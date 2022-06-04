import React, { useState } from "react";
import { Chat, KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import VenderProfile from "./VenderProfile";
import "./sass/ItemBar.scss";

function ItemBar() {
  const [renderProfile, setRenderProfile] = useState(false);
  return (
    <div className="itemBar">
      <div className="itemBar__item">
        <IconButton className="itemBar__iconbtn">
          <KeyboardDoubleArrowLeft style={{ color: "#ffff" }} />
        </IconButton>
      </div>
      <div className="itemBar__item">
        <IconButton className="itemBar__iconbtn">
          <Chat style={{ color: "#ffff" }} />
        </IconButton>
      </div>
      <div
        className="itemBar__item"
        style={{ cursor: "pointer", marginLeft: "5px" }}
      >
        <div
          onClick={() => {
            renderProfile ? setRenderProfile(false) : setRenderProfile(true);
          }}
        >
          <Avatar src="/images/icons/default_person.jpg" />
        </div>
      </div>
      <VenderProfile
        style={renderProfile ? { transform: "rotate(0deg)", top: 0 } : {}}
        funRenderProfile={setRenderProfile}
      />
    </div>
  );
}

export default ItemBar;
