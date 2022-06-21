import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowWindow } from "../store/toggleSlice";
import { setOder } from "../store/currentOderSlice";
import "./sass/VisitorsOderCard.scss";

const images = {
  1: "/images/coardimgs/image_processing20210507-32297-tenaa7.jpg",
  2: "/images/coardimgs/image_processing20200820-12621-12eune2-removebg-preview.png",
  3: "/images/coardimgs/image_processing20200826-14439-1txmf5o.png",
  4: "/images/coardimgs/image_processing20210507-32297-tenaa7 (1).jpg",
  5: "/images/coardimgs/image_processing20200824-6112-f10osz-removebg-preview.png",
  6: "/images/coardimgs/image_processing20210909-28465-opwx5m.jpg",
  7: "/images/coardimgs/image_processing20220120-9682-15tixr0.png",
  8: "/images/coardimgs/istockphoto-1018810824-612x612.jpg",
  9: "/images/coardimgs/preview.jpg",
  10: "/images/coardimgs/set-of-fast-food-line-icon-concept-piece-of-pizza-burger-sausage-and-drinks-vector.jpg",
};

function VisitorsOderCard(props) {
  const { coverImg, oderName, veg, oderId, price, placedTime, pStatus, data } =
    props;
  const dispatch = useDispatch();
  const oder = useSelector((state) => state.currentOderSlice.oder);

  return (
    <div
      className="visitorsOderCard"
      onClick={() => {
        dispatch(toggleShowWindow(true));
        dispatch(setOder(data));
        console.log("Current Oder----->", data);
      }}
    >
      <div className="visitorsOderCard__img">
        <img src={images[coverImg]} alt="" />
      </div>
      <div className="visitorsOderCard__main">
        <div className="visitorsOderCard__header">
          <h3>
            {oderName}{" "}
            <span>
              {" "}
              <img
                src={
                  veg ? "/images/icons/veg.svg" : "/images/icons/non_veg.svg"
                }
                alt=""
              />
            </span>
          </h3>
          <span className="visitorsOderCard__oder_id">
            {`Oder Id #${oderId}`}
          </span>
        </div>

        <p>{`Price : ${price}`}</p>
        <p>{`Oder Status : Placed at ${placedTime}`}</p>
        <p>{`Payment Status : ${pStatus}`}</p>
      </div>
    </div>
  );
}

export default VisitorsOderCard;
