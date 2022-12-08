import React from "react";
import "./Banner.css";
import bannerImage from "../../images/bannerImage.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img src={bannerImage} alt="" className="w-100 bannerImage" />
      </div>
      <div className="bannerText">
        <h4>Computer Engineering</h4>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
