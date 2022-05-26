import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import MenuContent from "../components/MenuContent";
import Nav from "../components/Nav";
import TextBox from "../components/TextBox";
import { getRestaurantsMetadata } from "../http/index";
import "./sass/MenuScreen.scss";

function MenuScreen() {
  const { metadata } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = true;

    const getData = async () => {
      const res = await getRestaurantsMetadata(metadata);
      setData(res.data);
    };

    if (fetchData) {
      getData();
    }

    return () => {
      fetchData = false;
    };
  }, [metadata]);

  // console.log(data);
  return (
    <div className="menuScreen">
      <Nav />
      <div className="menuScreen__container">
        <Banner />
        <TextBox />
        <MenuContent menu={data.Menu} />
      </div>
    </div>
  );
}

export default MenuScreen;
