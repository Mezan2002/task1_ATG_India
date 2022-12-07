import React from "react";
import forestImage from "../../images/forestImage.jpg";
import "./ArticleCard.css";

const ArticleCard = () => {
  return (
    <div>
      <div className="container d-flex justify-content-around">
        <div className="articleCards">
          <div class="card mb-3">
            <img src={forestImage} className="card-img-top cardImage" alt="" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="position-relative">
            <span className="locationIcon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your location"
              className="locationField mt-5"
            />
            <span>
              <i class="fa-solid fa-pencil pencilIcon"></i>
            </span>
          </div>
          <div className="note d-flex">
            <p>
              <i class="fa-solid fa-circle-exclamation"></i>
            </p>
            <p>
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
