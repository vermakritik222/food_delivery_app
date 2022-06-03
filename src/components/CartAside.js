import React, { useEffect, useState } from "react";
import { addQuntToShoppingCartData } from "../util/util";
import "./sass/CartAside.scss";

function CartAside(props) {
  const { data, quntData, setShowPaymentSteps } = props;
  const [res, setRes] = useState(null);
  const [total, setTotal] = useState(null);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setRes(addQuntToShoppingCartData(data, quntData));
    console.log(res);
    const sumData = () => {
      let sum = 0;
      res?.map((el) => (sum += el.price * el.qunt));
      setTotal(sum);
      return sum;
    };
    sumData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quntData]);

  return (
    <div className="cartAside">
      <div className="cartAside__cover">
        <h2>Price details</h2>
        <div className="cartAside__content">
          <div className="cartAside__itemsBox">
            {/* <div>
              <p>
                <span>Burger (2)</span> <span>₹234</span>
              </p>
              <p>
                <span>Burger</span> <span>₹234</span>
              </p>
              <p>
                <span>Burger</span> <span>₹234</span>
              </p>
              <p>
                <span>Burger</span> <span>₹234</span>
              </p>
            </div> */}

            <p className="cartAside__totalAmount">
              <span>Total Amount</span> <span>₹{total}</span>
            </p>
            <p className="cartAside__discount">
              <span>Discount</span> <span>- ₹{discount}</span>
            </p>
          </div>
          <h2>
            <span>Oder Total</span> <span>₹{total - discount}</span>
          </h2>
        </div>

        <button
          onClick={() => {
            setShowPaymentSteps(true);
          }}
          className="cartAside_btn"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default CartAside;
