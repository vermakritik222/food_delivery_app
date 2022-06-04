import React, { useState } from "react";
import "./Payment.scss";
import Adders from "./Steps/Adders";
import End from "./Steps/End";
import PaymentMethod from "./Steps/PaymentMethod";
const steps = {
  // 1: Adders,
  1: PaymentMethod,
  2: End,
};

function Payment() {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return (
    <div className="payment">
      <div className="payment__container">
        <Step step={step} setStep={setStep} />
      </div>
    </div>
  );
}

export default Payment;
