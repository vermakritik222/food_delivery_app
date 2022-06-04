import React from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Nav from "../components/Nav";
import "./sass/Signup.scss";

const styleBtn = {
  margin: "20px auto",
  background: "#ef4f5f",
};

function Signup() {
  const history = useHistory();
  return (
    <div className="signup">
      <Nav white />
      <div className="signup__container">
        <div className="signup__content">
          <h1>Sign Up</h1>
          <TextField
            margin="normal"
            // sx={{ input: { color: "white" } }}
            className="signup__input"
            label="User Name"
            variant="outlined"
          />

          <TextField
            margin="normal"
            // sx={{ input: { color: "white" } }}
            className="signup__input"
            label="Password"
            variant="outlined"
          />
          <Button
            style={styleBtn}
            variant="contained"
            onClick={() => {
              history.push("/");
            }}
          >
            <h3 style={{ color: "#ffff" }}>Sign Up</h3>{" "}
          </Button>

          <p style={{ color: "white" }}>
            Dont have an account?{" "}
            <span style={{ fontWeight: "bold", cursor: "pointer" }}>Login</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
