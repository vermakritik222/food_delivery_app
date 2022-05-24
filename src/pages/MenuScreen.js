import React from "react";
import Banner from "../components/Banner";
import MenuContent from "../components/MenuContent";
import Nav from "../components/Nav";
import TextBox from "../components/TextBox";
import "./sass/MenuScreen.scss";

function MenuScreen() {
  return (
    <div className="menuScreen">
      <Nav />
      <div className="menuScreen__container">
        <Banner />
        <TextBox />
        <MenuContent />
      </div>
    </div>
  );
}

export default MenuScreen;
