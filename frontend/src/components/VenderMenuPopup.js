import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { restaurantActions } from "../store/restaurantSlice";
import { updateitem } from "../http";
import "./sass/VenderMenuPopup.scss";

function VenderMenuPopup() {
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.restaurantSlice.currentItem);
  const [editName, setEditName] = useState(false);
  const [editPrice, setEditPrice] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [stock, setStock] = useState(true);

  // inputs felids
  const [dishName, setDishName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  return (
    <div className="venderMenuPopup">
      <div className="venderMenuPopup__main">
        <div className="venderMenuPopup__removeIcon">
          <IconButton
            onClick={() => dispatch(restaurantActions.setToggleBox())}
            size="large"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>

        <div>
          <div className="venderMenuPopup__header">
            <div>
              <div className="venderMenuPopup__img">
                <img src={`http://localhost:8000/${currentItem.Img}`} alt="" />
              </div>

              <FormControl style={{ marginLeft: "60px" }}>
                <InputLabel>Availability Status</InputLabel>
                <Select
                  style={stock ? { color: "green" } : { color: "red" }}
                  value={stock}
                  label="Availability Status"
                  onChange={(e) => setStock(e.target.value)}
                >
                  <MenuItem style={{ color: "green" }} value={true}>
                    In Stock
                  </MenuItem>
                  <MenuItem style={{ color: "red" }} value={false}>
                    Out Of Stock
                  </MenuItem>
                </Select>
              </FormControl>
              <Button
                onClick={() => {
                  updateitem(currentItem?._id, {
                    DishName: dishName,
                    price: price,
                    Description: description,
                    inStock: stock,
                  });
                }}
              >
                save
              </Button>
            </div>
            <Button
              startIcon={<CameraAltIcon />}
              style={{ marginBottom: "0px" }}
            >
              Edit image
            </Button>

            <h3>
              Name : {!editName && <span>{currentItem.DishName}</span>}{" "}
              {editName && (
                <span>
                  <input
                    type="text"
                    value={dishName}
                    onChange={(e) => {
                      setDishName(e.target.value);
                    }}
                  />
                </span>
              )}{" "}
              <span>
                <IconButton
                  onClick={() =>
                    editName ? setEditName(false) : setEditName(true)
                  }
                >
                  {editName ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              </span>
            </h3>
            <p>
              Price : {!editPrice && <span>${currentItem.price}</span>}{" "}
              {editPrice && (
                <span>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </span>
              )}{" "}
              <span>
                <IconButton
                  onClick={() =>
                    editPrice ? setEditPrice(false) : setEditPrice(true)
                  }
                >
                  {editPrice ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              </span>{" "}
            </p>
          </div>
          <p>
            Category : {!editCategory && <span>{currentItem.Category}</span>}{" "}
            {editCategory && (
              <span>
                <input type="text" />
              </span>
            )}{" "}
            <span>
              <IconButton
                onClick={() =>
                  editCategory ? setEditCategory(false) : setEditCategory(true)
                }
              >
                {editCategory ? <SaveIcon /> : <EditIcon />}
              </IconButton>
            </span>{" "}
          </p>
          <div>
            <h3 style={{ marginBottom: "10px" }}>
              Description{" "}
              <span>
                <IconButton
                  onClick={() =>
                    editDescription
                      ? setEditDescription(false)
                      : setEditDescription(true)
                  }
                >
                  {editDescription ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              </span>{" "}
            </h3>
            {!editDescription ? (
              <p>{currentItem.Description}</p>
            ) : (
              <TextareaAutosize
                aria-label="maximum height"
                maxRows={6}
                minRows={6}
                placeholder="Minimum 3 rows"
                defaultValue={currentItem.Description}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                style={{ width: 900 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenderMenuPopup;
