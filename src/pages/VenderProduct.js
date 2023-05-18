import React, { useState } from "react";
import VenderNav from "../components/VenderNav";
import ItemBar from "../components/ItemBar";
import "./sass/VenderProduct.scss";
import { Button, Chip, Paper, TextField, styled } from "@mui/material";

function VenderProduct() {
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return (
    <div className="venderProduct">
      <div className="venderProduct__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="venderProduct__main">
        <VenderNav active={2} />
        <ItemBar />
      </div>
      <div className="VenderProduct__mainCover " style={{ marginLeft: "80px" }}>
        <div className="VenderProduct__generalInformation">
          <div className="VenderProduct__generalInformationLeft">
            <h2 className="VenderProduct__sectionsH2">general information</h2>
            <div className="VenderProduct__generalInformationProfilePhoto">
              <img src="/images/icons/default_person.jpg" alt="" srcset="" />
            </div>
          </div>
          <div className="VenderProduct__generalInformationRight">
            <div className="VenderProduct__generalInformationProfileData">
              <div className="VenderProduct__generalInformationProfileDataItem">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name of Restaurant"
                  variant="outlined"
                />
              </div>
              <div className="VenderProduct__generalInformationProfileDataItem">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="VenderProduct__locationInformation">
          <h2 className="VenderProduct__sectionsH2">Restaurant information</h2>
          <div className="VenderProduct__locationInformationForm">
            <div
              className="VenderProduct__locationInformationItem"
              style={{ width: "280px" }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Restaurant Location"
                variant="outlined"
              />
            </div>
            <div
              className="VenderProduct__locationInformationItem"
              style={{ width: "600px" }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Full Address"
                variant="outlined"
              />
            </div>
            <div
              className="VenderProduct__locationInformationItem"
              style={{ width: "600px" }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Landmarks (Optional)"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className="VenderProduct__MenuCatagories">
          <h2 className="VenderProduct__sectionsH2">Menu Catagories</h2>
          <div className="VenderProduct__MenuCatagoriesContainer">
            <div className="VenderProduct__MenuCatagoriesInput">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter Menu Catagories"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuCatagoriesTags">
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  let icon;
                  return (
                    <ListItem key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={handleDelete(data)}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </div>
          </div>
        </div>
        <div className="VenderProduct__Menu">
          <h2 className="VenderProduct__sectionsH2">Menu</h2>
          <div className="VenderProduct__MenuForm">
            <div
              className="VenderProduct__MenuFromItem"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="VenderProduct__MenuFromItemText"
                style={{ width: "60%" }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="DishName"
                  variant="outlined"
                />
              </div>
              <div
                className="VenderProduct__MenuFromItemButton"
                style={{ width: "36%" }}
              >
                <Button variant="contained" size="large" disableElevation>
                  Upload image
                </Button>
              </div>
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="price"
                variant="outlined"
              />
            </div>

            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Category"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="vg_ng"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                disableElevation
              >
                Add item
              </Button>
            </div>
          </div>
        </div>
        <div className="VenderProduct__MenuSaved">
          <h2 className="VenderProduct__sectionsH2">Saved Menu</h2>
          <div className="VenderProduct__MenuForm">
            <div
              className="VenderProduct__MenuFromItem"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="VenderProduct__MenuFromItemText"
                style={{ width: "60%" }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="DishName"
                  variant="outlined"
                />
              </div>
              <div
                className="VenderProduct__MenuFromItemButton"
                style={{ width: "36%" }}
              >
                <Button variant="contained" size="large" disableElevation>
                  Upload image
                </Button>
              </div>
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="price"
                variant="outlined"
              />
            </div>

            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Category"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="vg_ng"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
            </div>
          </div>
          <div className="VenderProduct__MenuForm">
            <div
              className="VenderProduct__MenuFromItem"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="VenderProduct__MenuFromItemText"
                style={{ width: "60%" }}
              >
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="DishName"
                  variant="outlined"
                />
              </div>
              <div
                className="VenderProduct__MenuFromItemButton"
                style={{ width: "36%" }}
              >
                <Button variant="contained" size="large" disableElevation>
                  Upload image
                </Button>
              </div>
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="price"
                variant="outlined"
              />
            </div>

            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Category"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="vg_ng"
                variant="outlined"
              />
            </div>
            <div className="VenderProduct__MenuFromItem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Description"
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenderProduct;
