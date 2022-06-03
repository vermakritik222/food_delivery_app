import { Button } from "@mui/material";
import React from "react";

function Adders(props) {
  const { step, setStep } = props;

  return (
    <div>
      Adders
      <Button
        style={{
          float: "right",
          background: "#ef4f5f",
        }}
        onClick={() => {
          setStep(step + 1);
        }}
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
    </div>
  );
}

export default Adders;
