import React from "react";
import "./sass/VenderProfile.scss";

function VenderProfile(props) {
  const { style, funRenderProfile } = props;
  return (
    <div
      className="venderProfile"
      style={style}
      onClick={() => {
        funRenderProfile(false);
      }}
    >
      <div className="venderProfile__img">
        <img src="/images/icons/default_person.jpg" alt="" />
      </div>
      <div className="venderProfile__content">
        <p>Vender name : Xyz Abc </p>
        <p>Company name : Burger King </p>
        <p>vender Id : #xxxxxxxxxxxxxxxxxxxx </p>
      </div>
    </div>
  );
}

export default VenderProfile;
