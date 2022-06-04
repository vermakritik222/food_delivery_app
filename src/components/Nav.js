import React from "react";
import { useHistory } from "react-router-dom";
import { TextField, MenuItem, IconButton } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import "./sass/Nav.scss";

const currencies = [
  {
    value: "ND",
    label: "New Delhi, Delhi",
  },
  {
    value: "KM",
    label: "Khan Market, New Delhi",
  },
  {
    value: "JP",
    label: "Janpath, New Delhi",
  },
  {
    value: "LN",
    label: "Lajpat Nagar, New Delhi",
  },
  {
    value: "CC",
    label: "Chandni Chowk, New Delhi",
  },
];
const styleWhite = {
  color: "#ffff",
};

function Nav(props) {
  const history = useHistory();
  const { searchBar, white } = props;
  const [currency, setCurrency] = React.useState("LN");

  const handleChange = (el) => {
    setCurrency(el.target.value);
  };

  return (
    <div className="nav">
      <div
        className="nav__logoBox"
        onClick={() => {
          history.push("/");
        }}
      >
        <img
          src="/images/logo.png"
          alt=""
          className={white ? "nav__logo nav__whiteImg" : "nav__logo"}
        />
      </div>
      {searchBar ? (
        <div className="nav__input">
          <TextField
            fullWidth
            select
            label="Location"
            value={currency}
            onChange={handleChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      ) : (
        ""
      )}

      <div className="nav__loginSinupbtn">
        <IconButton
          style={white && { display: "none" }}
          onClick={() => {
            history.push("/cart");
          }}
        >
          <ShoppingCartOutlined />
        </IconButton>
        <button
          onClick={() => {
            history.push("/signup");
          }}
          className={white ? "nav__login btn nav__white" : "nav__login btn"}
        >
          {" "}
          <span>Log in</span>{" "}
        </button>
        <button
          onClick={() => {
            history.push("/signup");
          }}
          className={white ? "nav__sing_up btn nav__white" : "nav__sing_up btn"}
        >
          <span> Sing up</span>
        </button>
        {/* <Avatar className="nav__avatar" /> */}
      </div>
    </div>
  );
}

export default Nav;
