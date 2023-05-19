import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Nav from "../components/Nav";
import { login } from "../http/index";
import { setUser } from "../store/userSlice";
import "./sass/Signup.scss";
import { useDispatch } from "react-redux";

const styleBtn = {
  margin: "20px auto",
  background: "#ef4f5f",
};

function Login(props) {
  const { vender } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelClick = async () => {
    try {
      const res = await login({ email, password });
      console.log("user---->", res?.data);
      const user = res.data.user;
      if (res?.data.status === "success") {
        dispatch(setUser(user));
        if (user.role === "user") {
          history.push("/");
        } else {
          history.push("vender/oders");
        }
      }
    } catch (err) {
      console.log("error while getting the user ---->", err);
    }
  };

  return (
    <div className="signup">
      <Nav white />
      <div className="signup__container">
        <div className="signup__content">
          <h1>{vender && "Vender"} Sign Up</h1>
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
          <Button style={styleBtn} variant="contained" onClick={handelClick}>
            <h3 style={{ color: "#ffff" }}>Sign Up</h3>{" "}
          </Button>

          <p style={{ color: "white" }}>
            Don't have an account?{" "}
            <span style={{ fontWeight: "bold", cursor: "pointer" }}>Login</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
