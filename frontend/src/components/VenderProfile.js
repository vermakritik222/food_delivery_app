import React from "react";
import { useSelector } from "react-redux";
import "./sass/VenderProfile.scss";

function VenderProfile(props) {
  const user = useSelector((state) => state.user);
  console.log(user);
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
        <p style={{ textTransform: "capitalize" }}>
          Vender Name : {user.username}{" "}
        </p>
        <p>Company Name : Burger King </p>
        <p>
          {" "}
          Vender Id : <span style={{ fontSize: "16px" }}>
            {" "}
            #{user.resId}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default VenderProfile;
