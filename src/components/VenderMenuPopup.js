import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./sass/VenderMenuPopup.scss";

function VenderMenuPopup() {
  const history = useHistory();
  const [editName, setEditName] = useState(false);
  const [editPrice, setEditPrice] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [stock, setStock] = useState("is");
  return (
    <div className="venderMenuPopup">
      <div className="venderMenuPopup__main">
        <div className="venderMenuPopup__removeIcon">
          <IconButton onClick={() => history.push("/vendermenu")} size="large">
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>

        <div>
          <div className="venderMenuPopup__header">
            <div>
              <div className="venderMenuPopup__img">
                <img src="/images/food1.avif" alt="" />
              </div>

              <FormControl style={{ marginLeft: "60px" }}>
                <InputLabel>Availability Status</InputLabel>
                <Select
                  style={stock === "is" ? { color: "green" } : { color: "red" }}
                  value={stock}
                  label="Availability Status"
                  onChange={(e) => setStock(e.target.value)}
                >
                  <MenuItem style={{ color: "green" }} value={"is"}>
                    In Stock
                  </MenuItem>
                  <MenuItem style={{ color: "red" }} value={"os"}>
                    Out Of Stock
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              startIcon={<CameraAltIcon />}
              style={{ marginBottom: "0px" }}
            >
              Edit image
            </Button>

            <h3>
              name : {!editName && <span>burger</span>}{" "}
              {editName && (
                <span>
                  <input type="text" />
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
              price : {!editPrice && <span>$39</span>}{" "}
              {editPrice && (
                <span>
                  <input type="text" />
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
            Category : {!editCategory && <span>Pasta</span>}{" "}
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
            <TextareaAutosize
              aria-label="maximum height"
              maxRows={6}
              minRows={6}
              placeholder="Minimum 3 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
              style={{ width: 900 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenderMenuPopup;
