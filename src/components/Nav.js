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

function Nav(props) {
  const history = useHistory();
  const { searchBar } = props;
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
        <img src="/images/logo.png" alt="" className="nav__logo" />
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
          onClick={() => {
            history.push("/cart");
          }}
        >
          <ShoppingCartOutlined />
        </IconButton>
        <button className="nav__login btn">Log in</button>
        <button className="nav__sing_up btn">Sing up</button>
        {/* <Avatar className="nav__avatar" /> */}
      </div>
    </div>
  );
}

export default Nav;
