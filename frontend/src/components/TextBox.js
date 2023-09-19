import React from "react";
import { Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import "./sass/TextBox.scss";
function TextBox() {
  return (
    <div className="textBox fixed-content">
      <div className="textBox__header">
        <h1>Plefora - The Theatre Cafe</h1>
        <div></div>
      </div>
      <p className="textBox__tag">
        Italian, Beverages, Desserts, BBQ, Fast Food
      </p>
      <p className="textBox__adders">New Chandigarh, Chandigarh</p>
      <p className="texBox__comment">Closed Opens at 12noon</p>

      <div className="textBox__btnCover">
        <div className="textBox__btn">
          <Button startIcon={<ReviewsOutlinedIcon />} variant="contained">
            Add Review
          </Button>
        </div>

        <div className="textBox__btn">
          <Button startIcon={<LocationOnIcon />} variant="outlined">
            Direction
          </Button>
        </div>

        <div className="textBox__btn">
          <Button startIcon={<BookmarksIcon />} variant="outlined">
            Bookmark
          </Button>
        </div>

        <div className="textBox__btn">
          <Button startIcon={<ShareIcon />} variant="outlined">
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
