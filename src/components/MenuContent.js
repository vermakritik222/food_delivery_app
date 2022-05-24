import React, { useState } from "react";
import MenuAside from "./MenuAside";
import MenuCard from "./MenuCard";
import MenuContentHeader from "./MenuContentHeader";
import "./sass/MenuContent.scss";

function MenuContent() {
  const [hover, setHover] = useState("Recommended");

  return (
    <div className="menuContent">
      <MenuContentHeader />
      <div className="menuContent__content">
        <div className="menuContent__aside">
          <MenuAside active={hover} />
        </div>
        <div className="menuContent__main">
          <div
            className="menuContent__main_section"
            onMouseOver={() => {
              setHover("Recommended");
            }}
          >
            <h2>Recommended</h2>
            <MenuCard
              name="McAloo Tikki Burger"
              img="/images/food1.avif"
              votes="23"
              price="34"
              star="5"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
              aperiam dignissimos, quam"
            />
            <MenuCard
              name="Veg Maharaja Mac"
              img="https://b.zmtcdn.com/data/dish_photos/a36/66fc891f0259374e2f5b4ee5e9bcda36.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
              votes="344"
              price="34"
              star="2"
              description="Big Mac sesame seeds bun, with rich and crusty cheesy corn patty, topped with chunky vegetable-cocktail sauce served with pungent jalapeño slices, red onion slices, tomato slices, Cheddar cheese slice and crisp iceberg lettuce."
            />
          </div>

          <div
            className="menuContent__main_section"
            onMouseOver={() => {
              setHover("What’s New");
            }}
          >
            <h2>What’s New</h2>
            <MenuCard
              name="McSpicy® Paneer"
              img="https://b.zmtcdn.com/data/dish_photos/896/db46bfa6121525dc8bc4d7214ee29896.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
              votes="245"
              price="34"
              star="3"
              description="Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping."
            />
            <MenuCard
              name="McVeggie®"
              img="https://b.zmtcdn.com/data/dish_photos/947/39b5cc059fa3d322b964bf88310f7947.png?output-format=webp&fit=around|130:130&crop=130:130;*,*"
              votes="245"
              price="34"
              star="4"
              description="A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns."
            />
          </div>

          <div className="menuContent__main_section">
            <h2>Match Day Meal</h2>
            <MenuCard
              name="McAloo Tikki Burger"
              img="/images/food1.avif"
              votes="245"
              price="34"
              star="1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
              aperiam dignissimos, quam"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
