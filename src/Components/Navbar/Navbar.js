import React from "react";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar px-5">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <form className="d-flex" role="search">
            <input type="search" name="" id="" />
          </form>
          <button className="btn btn-outline-success" type="submit">
            Create account. It's free!
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
