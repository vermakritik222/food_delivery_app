import React from "react";
import { Link } from "react-router-dom";
import "./sass/Card.scss";

function Card(props) {
  const { title, img, rating, address, id } = props;

  return (
    <div className="card">
      <Link to={`/restaurant/${id}`}>
        <div className="card__img">
          <img src={img} alt="" />
        </div>
        <div className="card__header">
          <h4 className="card__name">{title}</h4>
          <span>
            <p>{rating} </p>
            <img src="/images/star.svg" alt="" />
          </span>
        </div>
        <p className="card__tag">North Indian, Modern Indian ...</p>
        <p className="card__adders">{address}</p>
        <p className="card__comment">Closes in 21 minutes</p>
      </Link>
    </div>
  );
}

export default Card;
