import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VenderMenuCard from "./VenderMenuCard";
import { getItem } from "../http";
import { restaurantActions } from "../store/restaurantSlice";

function MenuBoard({ data, stock }) {
  const dispatch = useDispatch();
  const restaurantSlice = useSelector((state) => state.restaurantSlice);
  const menuItems = restaurantSlice?.menuItems?.filter(
    (el) => el.inStock === stock
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 40px 0px 40px",
        // overflowY: "scroll",
        // height: "77vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "80em",
          //   margin: "0 3%",
          //   justifyContent: "center",
        }}
      >
        {data ? (
          <>
            {" "}
            <VenderMenuCard />
            <VenderMenuCard />
          </>
        ) : (
          <>
            {menuItems?.map((el, idx) => (
              <VenderMenuCard
                data={el}
                name={el.DishName}
                img={`http://localhost:8000/${el.Img}`}
                votes={(((123 % 2) + idx) % 7) * 3}
                price={el.price}
                star={el.Rating}
                description={el.Description}
                ids={el._id}
                key={el._id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MenuBoard;
