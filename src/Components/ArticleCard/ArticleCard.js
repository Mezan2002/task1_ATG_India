import React from "react";
import forestImage from "../../images/forestImage.svg";
import doorImage from "../../images/doorImage.svg";
import carImage from "../../images/carImage.svg";
import user1 from "../../images/sarthakKamra.svg";
import user2 from "../../images/sarahWest.svg";
import user3 from "../../images/ronalJones.svg";
import user4 from "../../images/josephGray.svg";
import "./ArticleCard.css";

const ArticleCard = () => {
  return (
    <div>
      <div className="container d-flex justify-content-lg-between">
        <div className="articleCardContainer">
          <div className="articleCards">
            <div class="card mb-3">
              <img
                src={forestImage}
                className="card-img-top cardImage"
                alt=""
              />
              <div class="card-body">
                <p className="categoryName">✍️ Article</p>
                <div class="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>
                    What if famous brands had regular fonts? <br /> Meet
                    RegulaBrands!
                  </h5>
                  <div class="dropdown">
                    <p
                      class=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="card-text articleCardDescription">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div class="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user1} alt="" />
                    <p class="mb-0 ms-3">Sarthak Kamra</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i class="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i class="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div class="card mb-3">
              <img src={doorImage} className="card-img-top cardImage" alt="" />
              <div class="card-body">
                <p className="categoryName">🔬️ Education</p>
                <div class="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>
                    Tax Benefits for Investment under National Pension <br />{" "}
                    Scheme launched by Government
                  </h5>
                  <div class="dropdown">
                    <p
                      class=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="card-text articleCardDescription">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div class="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user2} alt="" />
                    <p class="mb-0 ms-3">Sarah Wests</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i class="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i class="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div class="card mb-3">
              <img src={carImage} className="card-img-top cardImage" alt="" />
              <div class="card-body">
                <p className="categoryName">🗓️ Meetup</p>
                <div class="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>Finance & Investment Elite Social Mixer @Lujiazui</h5>
                  <div class="dropdown">
                    <p
                      class=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-text articleCardTags">
                  <div className="d-flex">
                    <p className="date ">
                      {" "}
                      <span className="">
                        <i class="fa-solid fa-calendar-day me-2"></i>
                      </span>{" "}
                      Fri, 12 Oct, 2018
                    </p>
                    <p>
                      <span className="me-2">
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                      Ahmedabad, India
                    </p>
                  </div>
                  <div className="w-100">
                    <button className="btn btn-outline-dark fw-bold text-danger w-100">
                      Visit Website
                    </button>
                  </div>
                </div>
                <div class="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user3} alt="" />
                    <p class="mb-0 ms-3">Ronal Jones</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i class="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i class="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div class="card mb-3">
              <div class="card-body">
                <p className="categoryName">💼️ Job</p>
                <div class="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>Software Developer</h5>
                  <div class="dropdown">
                    <p
                      class=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-text articleCardTags">
                  <div className="d-flex">
                    <p className="date ">
                      {" "}
                      <span className="me-2">
                        <i class="fa-solid fa-briefcase"></i>
                      </span>{" "}
                      Innovaccer Analytics Private Ltd.
                    </p>
                    <p>
                      <span className="me-2">
                        <i class="fa-solid fa-location-dot"></i>
                      </span>
                      Noida, India
                    </p>
                  </div>
                  <div className="w-100">
                    <button className="btn btn-outline-dark fw-bold text-success w-100">
                      Apply on Timesjobs
                    </button>
                  </div>
                </div>
                <div class="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user4} alt="" />
                    <p class="mb-0 ms-3">Joseph Gray</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i class="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i class="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar me-5">
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
            <span>
              <i class="fa-solid fa-circle-exclamation"></i>
            </span>
            <p className="ms-2">
              Your location will help us serve better
              <br /> and extend a personalised experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
