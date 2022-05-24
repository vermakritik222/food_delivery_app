import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import "./sass/MenuCard.scss";

function MenuCard(props) {
  const { name, img, votes, price, star, description } = props;

  function giveNumber(star) {
    const str = [];
    for (let i = 0; i < star; i++) {
      str.push(<img src="/images/yellowStar.svg" alt="" />);
    }
    return str;
  }

  return (
    <div className="menuCard">
      <div className="menuCard__cover">
        <div className="menuCard__img">
          <img src={img} alt="" srcset="" />
        </div>
        <div className="menuCard__content">
          <div className="menuCard__contentbtnbox">
            <h3 className="menuCard__name">{name}</h3>
            <ButtonGroup>
              <Button>-</Button>
              <Button>ADD</Button>
              <Button>+</Button>
            </ButtonGroup>
          </div>
          <div className="menuCard__ratingBox">
            <div className="menuCard__rating">{giveNumber(star * 1)}</div>
            <p>+{votes} Votes</p>
          </div>
          <p className="menuCard__price">₹{price}</p>
          <p className="menuCard__description">
            {description}... <span>read more</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
