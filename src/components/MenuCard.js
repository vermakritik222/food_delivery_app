import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@mui/material";
import { setOder, deleteOder } from "../store/CartSlice";
import { giveFrequency } from "../util/util";
import "./sass/MenuCard.scss";

function MenuCard(props) {
  const { name, img, votes, price, star, description, ids } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const mapdata = giveFrequency(cart.oder);
  const [id, setId] = useState(ids);

  function giveNumber(star) {
    const str = [];
    for (let i = 0; i < star; i++) {
      str.push(<img key={i} src="/images/yellowStar.svg" alt="" />);
    }
    return str;
  }

  return (
    <div className="menuCard">
      <div className="menuCard__cover">
        <div className="menuCard__img">
          <img src={img} alt="" />
        </div>
        <div className="menuCard__content">
          <div className="menuCard__contentbtnbox">
            <h3 className="menuCard__name">{name}</h3>
            <ButtonGroup>
              <Button
                onClick={() => {
                  dispatch(deleteOder(id));
                }}
              >
                -
              </Button>
              <Button>{mapdata.get(id) ? mapdata.get(id) : "ADD"}</Button>
              <Button
                onClick={() => {
                  dispatch(setOder(id));
                }}
              >
                +
              </Button>
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

// export default MenuCard;
export default memo(MenuCard);
