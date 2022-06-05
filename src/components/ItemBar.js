import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import VenderProfile from "./VenderProfile";
import "./sass/ItemBar.scss";

function ItemBar() {
  const [renderProfile, setRenderProfile] = useState(false);
  const [expand, setExpand] = useState(false);
  const history = useHistory();

  return (
    <div className="itemBar">
      <div className="itemBar__item">
        <IconButton
          onClick={() => (expand ? setExpand(false) : setExpand(true))}
          className="itemBar__iconbtn"
        >
          {expand ? (
            <KeyboardDoubleArrowRight style={{ color: "#ffff" }} />
          ) : (
            <KeyboardDoubleArrowLeft style={{ color: "#ffff" }} />
          )}
        </IconButton>
      </div>
      <div className="itemBar__item" style={expand ? {} : { display: "none" }}>
        <IconButton className="itemBar__iconbtn">
          <Chat style={{ color: "#ffff" }} />
        </IconButton>
      </div>
      <div className="itemBar__item">
        <IconButton
          onClick={() => history.push("/signup")}
          className="itemBar__iconbtn"
        >
          <LogoutIcon style={{ color: "#ffff" }} />
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
