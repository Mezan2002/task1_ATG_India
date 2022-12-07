import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar d-none d-lg-block">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <form className="d-flex position-relative" role="search">
            <span>
              <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            </span>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for your favorite groups in ATG"
              className="searchField"
            />
          </form>
          <div className="d-flex" type="submit">
            <p>Create account.</p>
            <p className="createAccountBtn">
              It's free!
              <span className="miniArrowBtn">
                <i class="fa-sharp fa-solid fa-caret-down"></i>
              </span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
