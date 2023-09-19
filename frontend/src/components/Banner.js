import React from "react";
import "./sass/Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__container1">
        <div className="banner__bigImg">
          <img src="/images/res1banner.avif" alt="" />
        </div>
        <div className="banner__container2">
          <div>
            <div className="banner_smallImg">
              <img src="/images/res1small.avif" alt="" />
            </div>
            <div className="banner_smallImg">
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/1/171/759544acfd8bafc95f365a8758adccb4.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="banner_smallImg banner_morePhotos">
              <div className="banner_morePhotosBG">
                <p>View Glary</p>
              </div>
              <img
                src="https://b.zmtcdn.com/data/pictures/chains/1/171/52f1cbd5ecf32d45075a1c7f35608489.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
                alt=""
              />
            </div>
            <div className="banner_smallImg">
              <img src="/images/res1small.avif" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
