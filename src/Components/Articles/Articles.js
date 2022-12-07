import React from "react";
import "./Articles.css";

const Articles = () => {
  return (
    <div>
      <div className="container articles d-flex justify-content-between">
        <div className="tabs">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                All Posts(34)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Event
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Job
              </a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="btn me-2 bg-light">
            Write a Post
            <span className="ms-2">
              <i class="fa-sharp fa-solid fa-caret-down"></i>
            </span>
          </button>
          <button className="btn btn-primary">
            <span className="me-2">
              <i class="fa-solid fa-user-plus"></i>
            </span>
            Join Group
          </button>
        </div>
      </div>
      <hr className="container" />
    </div>
  );
};

export default Articles;
