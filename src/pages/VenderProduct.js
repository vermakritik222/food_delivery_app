import React from "react";
import VenderNav from "../components/VenderNav";
import ItemBar from "../components/ItemBar";
import "./sass/VenderProduct.scss";

function VenderProduct() {
  return (
    <div className="venderProduct">
      <div className="venderProduct__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="venderProduct__main">
        <VenderNav active={2} />
        <ItemBar />
      </div>
      VenderProduct
    </div>
  );
}

export default VenderProduct;
