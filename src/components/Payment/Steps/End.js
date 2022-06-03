import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function End() {
  const history = useHistory();
  const styleHeader = {
    marginTop: "50px",
    justifySelf: "center",
    textTransform: "capitalize",
    color: "#ef4f5f",
  };
  const styleBtn = {
    margin: "50px auto",
    background: "#ef4f5f",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={styleHeader}>your oder has bem successfully placed </h1>

      <Button
        style={styleBtn}
        variant="contained"
        onClick={() => {
          history.push("/");
        }}
      >
        <h2 style={{ color: "#ffff" }}>Back to store </h2>{" "}
      </Button>
    </div>
  );
}

export default End;
