import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOderDetails } from "../store/CartSlice";
import { giveFrequency } from "../util/util";
import { postRestaurantsItemId } from "../http/index";
import Nav from "../components/Nav";
import CartAside from "../components/CartAside";
import CartCard from "../components/CartCard";
import Payment from "../components/Payment/Payment";
import "./sass/CartScreen.scss";

function CartScreen() {
  const cart = useSelector((state) => state.cart);
  const mapdata = giveFrequency(cart.oder);
  const [res, setRes] = useState();
  const [showPaymentSteps, setShowPaymentSteps] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await postRestaurantsItemId([...mapdata.keys()]);
        setRes(res.data.data);
        dispatch(setOderDetails(res.data.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(cart);
  return (
    <div>
      <Nav />
      <div className="cartScreen__box container">
        <h2 className="cartScreen_heading">Shopping Cart</h2>
        <div className="cartScreen__cardContainer">
          <div className="cartScreen__items">
            {res?.map((el) => {
              return (
                <CartCard
                  key={el._id}
                  ids={el._id}
                  img={`http://localhost:8000${el.Img}`}
                  title={el.DishName}
                  veg={el.vg_ng}
                  price={el.price}
                  inQ={mapdata.get(el._id)}
                />
              );
            })}
          </div>
          <div className="cartScreen__aside">
            <CartAside
              setShowPaymentSteps={setShowPaymentSteps}
              data={res}
              quntData={mapdata}
            />
          </div>
        </div>
      </div>
      {showPaymentSteps && <Payment />}
    </div>
  );
}

export default CartScreen;
