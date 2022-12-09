import React from "react";
import "./Banner.css";
import bannerImage from "../../images/bannerImage.svg";
import mobileBannerImage from "../../images/bannerImageMobile.svg";

const Banner = () => {
  return (
    <div>
      {/* Desktop Banner start */}
      <div className="d-none d-md-block">
        <div className="banner">
          <img src={bannerImage} alt="" className="w-100 bannerImage" />
        </div>
        <div className="bannerText">
          <h4>Computer Engineering</h4>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      {/* Desktop Banner end */}

      {/* Mobile Banner start */}
      <div className="d-md-none d-block w-100">
        <div className="banner">
          <img src={mobileBannerImage} alt="" className="w-100 bannerImage" />
        </div>
        <div className="bannerTop d-flex">
          <p>
            <i class="fa-solid fa-arrow-left fs-3 text-white"></i>
          </p>
          <button className="btn joinGroupBtn text-white">Join Group</button>
        </div>
        <div className="bannerTextMobile">
          <h4>Computer Engineering</h4>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      {/* Mobile Banner end */}
    </div>
  );
};

export default Banner;
