import React from "react";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div>
      {/* Desktop tabs start */}
      <div>
        <div className="container d-md-flex articles d-none justify-content-between">
          <div className="tabs">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  All Posts(34)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
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
      {/* Desktop tabs end */}

      {/* mobile tabs start */}
      <div className="d-flex d-md-none justify-content-between align-items-center px-3 my-4">
        <h5 className="numberOfPosts">Posts(368)</h5>
        <button className="btn filterBtn">
          Filter: All{" "}
          <span className="ms-3">
            <i class="fa-sharp fa-solid fa-caret-down"></i>
          </span>{" "}
        </button>
      </div>
      {/* mobile tabs end */}
    </div>
  );
};

export default Tabs;
