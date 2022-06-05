import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./sass/VenderMenuCard.scss";

const star = 4;
const name = "burger";
const price = 24;
const votes = 234;
const description = "Lorem ipsum dolor sit amet consectetur adipisicing";

function VenderMenuCard(props) {
  // const { name, img, votes, price, star, description, ids } = props;
  const [id, setId] = useState(1);
  const history = useHistory();
  function giveNumber(star) {
    const str = [];
    for (let i = 0; i < star; i++) {
      str.push(<img key={i} src="/images/yellowStar.svg" alt="" />);
    }
    return str;
  }

  return (
    <div
      onClick={() => history.push(`/vendermenu/${id}`)}
      className="venderMenuCard"
    >
      <div className="VenderMenuCard__img">
        <img src="/images/food1.avif" alt="" />
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
