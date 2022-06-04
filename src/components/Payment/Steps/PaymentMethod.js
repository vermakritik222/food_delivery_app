import React from "react";
import { AccountBalance, CreditCard, Payment } from "@mui/icons-material";
import "./PaymentMethod.scss";
import { Button } from "@mui/material";
import { postOder } from "../../../http/index";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../../store/CartSlice";

function PaymentMethod(props) {
  const { step, setStep } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const placeOder = async () => {
    await postOder(cart);
    dispatch(clear());
    setStep(step + 1);
  };

  return (
    <div className="paymentMethod">
      <h2 className="paymentMethod__heading">Select your Payment Method</h2>

      <div className="paymentMethod__container">
        <form action="">
          <label className="paymentMethod__disabled paymentMethod__card">
            <input className="" type="radio" name="PM" id="cd" disabled />
            <div className="paymentMethod__methodLabel">
              <div className="paymentMethod__left">
                <CreditCard />
              </div>
              <div className="paymentMethod__right">Credit / Debit Card </div>
            </div>
          </label>
          {/*  */}
          <label
            className="paymentMethod__disabled paymentMethod__card"
            htmlFor="pp"
          >
            <input className="" type="radio" name="PM" id="pp" disabled />
            <div className="paymentMethod__methodLabel">
              <div className="paymentMethod__left">
                <Payment />
              </div>
              <div className="paymentMethod__right">PayPal</div>
            </div>
          </label>
          {/*  */}
          <label className="paymentMethod__card" htmlFor="cc">
            <input type="radio" name="PM" id="cc" checked />
            <div className="paymentMethod__methodLabel">
              <div className="paymentMethod__left">
                <AccountBalance />
              </div>
              <div className="paymentMethod__right">Cash on delivery</div>
            </div>
          </label>
          {/*  */}
          <Button
            style={{
              float: "right",
              background: "#ef4f5f",
            }}
            onClick={placeOder}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                margin: "0 15px",
                color: "#ffff",
              }}
            >
              Next
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethod;
