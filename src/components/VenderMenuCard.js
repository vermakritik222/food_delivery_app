import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./sass/VenderMenuCard.scss";
import { restaurantActions } from "../store/restaurantSlice/index";
import { useDispatch } from "react-redux";

function VenderMenuCard(props) {
  const { name, img, votes, price, star, description, data, ids } = props;
  const dispatch = useDispatch();
  function giveNumber(star) {
    const str = [];
    for (let i = 0; i < star; i++) {
      str.push(<img key={i} src="/images/yellowStar.svg" alt="" />);
    }
    return str;
  }

  return (
    <div
      onClick={() => {
        dispatch(restaurantActions.setToggleBox());
        dispatch(restaurantActions.setCurrentItem(data));
      }}
      className="venderMenuCard"
    >
      <div className="VenderMenuCard__img">
        <img src={img} alt="" />
      </div>
      <div className="venderMenuCard__content">
        <h3 className="venderMenuCard__name">{name}</h3>
        <div className="venderMenuCard__ratingBox">
          <div className="venderMenuCard__rating">{giveNumber(star * 1)}</div>
          <p>+{votes} Votes</p>
        </div>
        <p className="menuCard__price">₹{price}</p>
        <p className="menuCard__description">
          {description}... <span>read more</span>
        </p>
      </div>
    </div>
  );
}

export default VenderMenuCard;
