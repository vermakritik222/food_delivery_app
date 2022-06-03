import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { Button, ButtonGroup, Chip } from "@mui/material";
import { deleteOder, setOder } from "../store/CartSlice";
import "./sass/CartCard.scss";

function CartCard(props) {
  const { img, title, veg, price, inQ, ids } = props;
  const [id, setId] = useState(ids);
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
      <div className="cartCard__img">
        <img src={img} alt="" />
      </div>
      <div className="cartCard__content">
        <div className="cartCard__header">
          <div>
            <span>
              {veg ? (
                <img src="/images/icons/veg.svg" alt="" />
              ) : (
                <img src="/images/icons/non_veg.svg" alt="" />
              )}
            </span>
            <h3>{title}</h3>
          </div>
          <h3>{`₹${1 * price * inQ}`}</h3>
        </div>
        <p className="cartCard__price">{`price: ₹${price}/unit`}</p>

        <div className="cartCard__counterSystem">
          <div className="cartCard__chip">
            <Chip label={`Quantity : ${inQ}`} />
          </div>

          <div className="cartCard__btns">
            <ButtonGroup size="small">
              <Button
                onClick={() => {
                  dispatch(deleteOder(id));
                }}
              >
                <RemoveRounded />
              </Button>
              <Button
                onClick={() => {
                  dispatch(setOder(id));
                }}
              >
                <AddRounded />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
