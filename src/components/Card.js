import React from "react";
import "./sass/Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img src="images/res1.avif" alt="" />
      </div>
      <div className="card__header">
        <h4 className="card__name">Puzzles</h4>
        <span>
          <p>4.8</p>
          <img src="/images/star.svg" alt="" />
        </span>
      </div>
      <p className="card__tag">North Indian, Modern Indian ...</p>
      <p className="card__adders">The Cove, Sector 5, Panchkula</p>
      <p className="card__comment">Closes in 21 minutes</p>
    </div>
  );
}

export default Card;
