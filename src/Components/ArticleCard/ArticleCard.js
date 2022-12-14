import React from "react";
import forestImage from "../../images/forestImage.svg";
import doorImage from "../../images/doorImage.svg";
import carImage from "../../images/carImage.svg";
import user1 from "../../images/sarthakKamra.svg";
import user2 from "../../images/sarahWest.svg";
import user3 from "../../images/ronalJones.svg";
import user4 from "../../images/josephGray.svg";
import groupIcon1 from "../../images/groupIcon1.svg";
import groupIcon2 from "../../images/groupIcon2.svg";
import groupIcon3 from "../../images/groupIcon3.svg";
import groupIcon4 from "../../images/groupIcon4.svg";
import "./ArticleCard.css";

const ArticleCard = ({ loggedIn }) => {
  return (
    <div>
      {/* Desktop Article Card Start */}
      <div className="container d-none  d-md-flex justify-content-between">
        <div className="articleCardContainer">
          <div className="articleCards">
            <div className="card mb-3">
              <img
                src={forestImage}
                className="card-img-top cardImage"
                alt=""
              />
              <div className="card-body">
                <p className="categoryName">✍️ Article</p>
                <div className="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>
                    What if famous brands had regular fonts? <br /> Meet
                    RegulaBrands!
                  </h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="card-text articleCardDescription">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user1} alt="" />
                    <p className="mb-0 ms-3">Sarthak Kamra</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span className="">
                        <i className="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <img src={doorImage} className="card-img-top cardImage" alt="" />
              <div className="card-body">
                <p className="categoryName">🔬️ Education</p>
                <div className="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>
                    Tax Benefits for Investment under National Pension <br />{" "}
                    Scheme launched by Government
                  </h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="card-text articleCardDescription">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user2} alt="" />
                    <p className="mb-0 ms-3">Sarah Wests</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i className="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <img src={carImage} className="card-img-top cardImage" alt="" />
              <div className="card-body">
                <p className="categoryName">🗓️ Meetup</p>
                <div className="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>Finance & Investment Elite Social Mixer @Lujiazui</h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-text articleCardTags">
                  <div className="d-flex">
                    <p className="date ">
                      {" "}
                      <span className="">
                        <i className="fa-solid fa-calendar-day me-2"></i>
                      </span>{" "}
                      Fri, 12 Oct, 2018
                    </p>
                    <p>
                      <span className="me-2">
                        <i className="fa-solid fa-location-dot"></i>
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
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user3} alt="" />
                    <p className="mb-0 ms-3">Ronal Jones</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i className="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <div className="card-body">
                <p className="categoryName">💼️ Job</p>
                <div className="card-title d-flex justify-content-between articleCardsHeader">
                  <h5>Software Developer</h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-text articleCardTags">
                  <div className="d-flex">
                    <p className="date ">
                      {" "}
                      <span className="me-2">
                        <i className="fa-solid fa-briefcase"></i>
                      </span>{" "}
                      Innovaccer Analytics Private Ltd.
                    </p>
                    <p>
                      <span className="me-2">
                        <i className="fa-solid fa-location-dot"></i>
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
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user4} alt="" />
                    <p className="mb-0 ms-3">Joseph Gray</p>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <p className="mb-0 mt-2">
                      <span>
                        <i className="fa-regular fa-eye me-2"></i>
                      </span>{" "}
                      1.4k views
                    </p>
                    <p className="mb-0 shareBtn">
                      <i className="fa-solid fa-share-nodes"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loggedIn === true ? (
          <div className="sidebar me-5 d-none d-md-block">
            <div className="position-relative">
              <span className="locationIcon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your location"
                className="locationField mt-5"
              />
              <span>
                <i class="fa-solid fa-xmark xMarkIcon"></i>
              </span>
            </div>
            <div className="note d-flex">
              <span>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
              <p className="ms-2">
                Your location will help us serve better
                <br /> and extend a personalised experience.
              </p>
            </div>
            <div className="recommendedGroups">
              <h5>
                {" "}
                <span>
                  <i class="fa-solid fa-thumbs-up me-2"></i>
                </span>{" "}
                Recommended Groups
              </h5>
              <div>
                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center">
                    <img src={groupIcon1} className="me-3" alt="" />
                    <p className="mb-0">Leisure</p>
                  </div>
                  <button className="btn btn-outline-dark">Follow</button>
                </div>
                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center">
                    <img src={groupIcon2} className="me-3" alt="" />
                    <p className="mb-0">Activism</p>
                  </div>
                  <button className="btn btn-outline-dark">Follow</button>
                </div>
                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center">
                    <img src={groupIcon3} className="me-3" alt="" />
                    <p className="mb-0">MBA</p>
                  </div>
                  <button className="btn btn-outline-dark">Follow</button>
                </div>
                <div className="d-flex align-items-center justify-content-between my-4">
                  <div className="d-flex align-items-center">
                    <img src={groupIcon4} className="me-3" alt="" />
                    <p className="mb-0">Philosophy</p>
                  </div>
                  <button className="btn btn-outline-dark">Follow</button>
                </div>
                <div>
                  <p className="text-center text-primary">See More...</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="sidebar me-5 d-none d-md-block">
            <div className="position-relative">
              <span className="locationIcon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <input
                type="text"
                name=""
                id=""
                defaultValue={"Noida, India"}
                className="locationField mt-5"
              />
              <span>
                <i className="fa-solid fa-pencil pencilIcon"></i>
              </span>
            </div>
            <div className="note d-flex">
              <span>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
              <p className="ms-2">
                Your location will help us serve better
                <br /> and extend a personalised experience.
              </p>
            </div>
          </div>
        )}
      </div>
      {/* Desktop Article Card End */}

      {/* Mobile Article Card Start */}
      <div className="d-md-none d-block d-flex justify-content-between">
        <div className="articleCardContainer">
          <div className="postBtn d-flex justify-content-center align-items-center">
            <p className="mb-0">
              <i className="fa-solid fa-pencil fs-3 text-white mt-1"></i>
            </p>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <img
                src={forestImage}
                className="card-img-top cardImage"
                alt=""
              />
              <div className="card-body">
                <p className="categoryName">✍️ Article</p>
                <div className="card-title d-flex justify-content-between mobileArticleCardsHeader">
                  <h5>
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="card-text mobileArticleCardDescription">
                  I've worked in UX for the better part of a decade. F..
                </p>
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user1} alt="" />
                    <div className="ms-3">
                      <p className="mb-0">Sarthak Kamra</p>
                      <p className="mb-0">1.4k views</p>
                    </div>
                  </div>
                  <p className="mb-0 shareBtn">
                    <i className="fa-solid fa-share-nodes me-2"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <img src={doorImage} className="card-img-top cardImage" alt="" />
              <div className="card-body">
                <p className="categoryName">🔬️ Education</p>
                <div className="card-title d-flex justify-content-between mobileArticleCardsHeader">
                  <h5>
                    Tax Benefits for Investment under National Pension Scheme
                    launched by Government
                  </h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="card-text mobileArticleCardDescription">
                  I've worked in UX for the better part of a decade. F..
                </p>
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user2} alt="" />
                    <div className="ms-3">
                      <p className="mb-0">Sarah West</p>
                      <p className="mb-0">4.8k views</p>
                    </div>
                  </div>
                  <p className="mb-0 shareBtn">
                    <i className="fa-solid fa-share-nodes me-2"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <img src={carImage} className="card-img-top cardImage" alt="" />
              <div className="card-body">
                <p className="categoryName">🗓️ Meetup</p>
                <div className="card-title d-flex justify-content-between mobileArticleCardsHeader">
                  <h5>Finance & Investment Elite Social Mixer @Lujiazui</h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-text mobileArticleCardTags">
                  <div className="d-flex">
                    <p className="date ">
                      {" "}
                      <span className="">
                        <i className="fa-solid fa-calendar-day me-2"></i>
                      </span>{" "}
                      Fri, 12 Oct, 2018
                    </p>
                    <p>
                      <span className="me-2">
                        <i className="fa-solid fa-location-dot"></i>
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
                <div className="card-text mt-4 cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user3} alt="" />
                    <div className="ms-3">
                      <p className="mb-0">Ronal Jones</p>
                      <p className="mb-0">800 views</p>
                    </div>
                  </div>
                  <p className="mb-0 shareBtn">
                    <i className="fa-solid fa-share-nodes me-2"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="articleCards">
            <div className="card mb-3">
              <div className="card-body">
                <p className="categoryName">💼️ Job</p>
                <div className="card-title d-flex justify-content-between mobileArticleCardsHeader">
                  <h5>Software Developer</h5>
                  <div className="dropdown">
                    <p
                      className=""
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis"></i>
                    </p>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Report
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-text articleCardTags">
                  <div className="d-flex mobileArticleCardTags">
                    <p className="date">
                      {" "}
                      <span className="me-2">
                        <i className="fa-solid fa-briefcase"></i>
                      </span>{" "}
                      Innovaccer Analytic...
                    </p>
                    <p>
                      <span className="me-2">
                        <i className="fa-solid fa-location-dot"></i>
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
                <div className="card-text cardFooter d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={user4} alt="" />
                    <div className="ms-3">
                      <p className="mb-0">Joseph Gray</p>
                      <p className="mb-0">1.7k views</p>
                    </div>
                  </div>
                  <p className="mb-0 shareBtn">
                    <i className="fa-solid fa-share-nodes me-2"></i>
                    Share
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Article Card End */}
    </div>
  );
};

export default ArticleCard;
