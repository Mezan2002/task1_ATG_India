import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";
import Modal from "../Modal/Modal";
import user from "../../images/userNavbarImage.svg";

const Navbar = ({ setLoggedIn, loggedIn }) => {
  return (
    <div>
      <nav className="navbar d-none d-lg-block">
        <div className="container-fluid justify-content-between align-items-center">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <form className="d-flex position-relative" role="search">
            <span>
              <i className="fa-solid fa-magnifying-glass searchIcon"></i>
            </span>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for your favorite groups in ATG"
              className="searchField"
            />
          </form>
          {loggedIn === true ? (
            <div className="d-flex">
              <p className="mb-0">
                <img src={user} className="miniImage" alt="" />
                Siddharth Goyal
                <span className="miniArrowBtn">
                  <i className="fa-sharp fa-solid fa-caret-down"></i>
                </span>
              </p>
            </div>
          ) : (
            <div
              className="d-flex"
              data-bs-toggle="modal"
              href="#signUpModal"
              role="button"
            >
              <p className="mb-0">
                Create account. <span className="text-primary">It's free!</span>
                <span className="miniArrowBtn">
                  <i className="fa-sharp fa-solid fa-caret-down"></i>
                </span>
              </p>
            </div>
          )}
        </div>
      </nav>
      <Modal setLoggedIn={setLoggedIn}></Modal>
    </div>
  );
};

export default Navbar;
