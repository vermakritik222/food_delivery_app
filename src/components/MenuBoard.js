import React from "react";
import VenderMenuCard from "./VenderMenuCard";

function MenuBoard({ data }) {
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
            <VenderMenuCard />
            <VenderMenuCard />
            <VenderMenuCard />
            <VenderMenuCard />
            <VenderMenuCard />
            <VenderMenuCard />
          </>
        )}
      </div>
    </div>
  );
}

export default MenuBoard;
