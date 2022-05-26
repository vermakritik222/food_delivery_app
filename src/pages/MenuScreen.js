import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import MenuAside from "../components/MenuAside";
import MenuCard from "../components/MenuCard";
import MenuContentHeader from "../components/MenuContentHeader";
import Nav from "../components/Nav";
import TextBox from "../components/TextBox";
import { getRestaurantsMetadata } from "../http/index";
import { handelDataForMenu } from "../util/global";
import "./sass/MenuScreen.scss";

function MenuScreen() {
  const { metadata } = useParams();
  const [hover, setHover] = useState("Recommended");
  const [data, setData] = useState([]);
  const [arrKey, setArrKey] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    let fetchData = true;

    const getData = async () => {
      const res = await getRestaurantsMetadata(metadata);
      setData(res.data);
      const { arrKey, groupedData } = handelDataForMenu(res.data.Menu);
      setArrKey(arrKey);
      setGroupedData(groupedData);
    };

    if (fetchData) {
      getData();
    }

    return () => {
      fetchData = false;
    };
  }, [metadata]);

  return (
    <div className="menuScreen">
      <Nav />
      <div className="menuScreen__container">
        <Banner />
        <TextBox />

        <div className="menuContent">
          <MenuContentHeader />
          <div className="menuContent__content">
            <div className="menuContent__aside">
              <MenuAside active={hover} list={arrKey} />
            </div>
            <div className="menuContent__main">
              {arrKey?.map((el) => {
                return (
                  <div
                    key={`${el}_${Math.floor(Math.random() * 999) + 1000}`}
                    className="menuContent__main_section"
                    onMouseOver={() => {
                      setHover(el);
                    }}
                  >
                    <h2>{el}</h2>
                    {groupedData[el]?.map((el) => {
                      return (
                        <MenuCard
                          key={el._id}
                          name={el.DishName}
                          img={`http://localhost:8000${el.Img}`}
                          votes={el.votes || " __"}
                          price={el.price}
                          star={el.Rating}
                          description={el.Description}
                        />
                      );
                    })}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
