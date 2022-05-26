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
                          votes="23"
                          price={el.price}
                          star={el.Rating}
                          description={el.Description}
                        />
                      );
                    })}{" "}
                  </div>
                );
              })}

              {/* <div
                className="menuContent__main_section"
                onMouseOver={() => {
                  setHover("What’s New");
                }}
              >
                <h2>What’s New</h2>
                <MenuCard
                  key={1}
                  name="McAloo Tikki Burger"
                  img="/images/food1.avif"
                  votes="23"
                  price="34"
                  star="5"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
              aperiam dignissimos, quam"
                />
                <MenuCard
                  key={2}
                  name="Veg Maharaja Mac"
                  img="https://b.zmtcdn.com/data/dish_photos/a36/66fc891f0259374e2f5b4ee5e9bcda36.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                  votes="344"
                  price="34"
                  star="2"
                  description="Big Mac sesame seeds bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-cocktail sauce served with pungent jalapeño slices, red onion slices, tomato slices, Cheddar cheese slice and crisp iceberg lettuce."
                />

                <MenuCard
                  key={3}
                  name="McSpicy® Paneer"
                  img="https://b.zmtcdn.com/data/dish_photos/896/db46bfa6121525dc8bc4d7214ee29896.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                  votes="245"
                  price="34"
                  star="3"
                  description="Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping."
                />
                <MenuCard
                  key={4}
                  name="McVeggie®"
                  img="https://b.zmtcdn.com/data/dish_photos/947/39b5cc059fa3d322b964bf88310f7947.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
                  votes="245"
                  price="34"
                  star="4"
                  description="A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns."
                />
              </div> */}

              {/* <div
                className="menuContent__main_section"
                onMouseOver={() => {
                  setHover("Match Day Meal");
                }}
              >
                <h2>Match Day Meal</h2>
                <MenuCard
                  key={5}
                  name="McAloo Tikki Burger"
                  img="/images/food1.avif"
                  votes="245"
                  price="34"
                  star="1"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
              aperiam dignissimos, quam"
                />
              </div> */}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
