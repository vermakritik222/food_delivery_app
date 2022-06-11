import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Nav from "../components/Nav";
import "./sass/Signup.scss";
import { login } from "../http/index";

const styleBtn = {
  margin: "20px auto",
  background: "#ef4f5f",
};

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelClick = async () => {
    const res = await login({ email, password });
    console.log(res?.data);
    if (res?.data.status === "success") {
      history.push("/");
    }
  };

  return (
    <div className="signup">
      <Nav white />
      <div className="signup__container">
        <div className="signup__content">
          <h1>Sign Up</h1>
          <TextField
            value={email}
            onChange={(el) => {
              setEmail(el.target.value);
            }}
            margin="normal"
            // sx={{ input: { color: "white" } }}
            className="signup__input"
            label="Email"
            variant="outlined"
          />

          <TextField
            value={password}
            onChange={(el) => {
              setPassword(el.target.value);
            }}
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
              handelClick();
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
