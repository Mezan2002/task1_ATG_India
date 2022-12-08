import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";
import loveImage from "../../images/love.svg";

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
          <div
            className="d-flex mt-2"
            type="button"
            class=""
            data-bs-toggle="modal"
            data-bs-target="#createAccountModal"
          >
            <p>
              Create account. <span className="text-primary">It's free!</span>
              <span className="miniArrowBtn">
                <i class="fa-sharp fa-solid fa-caret-down"></i>
              </span>
            </p>
          </div>
          <div
            class="modal fade"
            id="createAccountModal"
            tabindex="-1"
            aria-labelledby="createAccountModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg position-relative">
              <div class="modal-content">
                <div class="modalHeader">
                  <h1
                    class="modal-title modalTitle fs-6 text-success"
                    id="createAccountModalLabel"
                  >
                    Let's learn, share & inspire each other with our passion for
                    computer engineering. Sign up now 🤘🏼
                  </h1>
                  <button
                    type="button"
                    class="modalCloseBtn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="fa-regular fa-circle-xmark fs-4 text-white"></i>
                  </button>
                </div>
                <div class="modal-body mt-4">
                  <div className="d-flex">
                    <div className="w-50">
                      <h3 className="mb-4">Create Account</h3>
                      <form>
                        <div className="input-group">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control rounded-0"
                              id="flotingFirstName"
                              placeholder="name@example.com"
                            />
                            <label for="flotingFirstName">First Name</label>
                          </div>
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control rounded-0"
                              id="flotingLastName"
                              placeholder="name@example.com"
                            />
                            <label for="flotingLastName">Last Name</label>
                          </div>
                        </div>
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control rounded-0"
                            id="flotingEmail"
                            placeholder="name@example.com"
                            autoComplete="off"
                          />
                          <label for="flotingEmail">Email address</label>
                        </div>
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control rounded-0"
                            id="floatingPassword"
                            placeholder="Password"
                            autoComplete="off"
                          />
                          <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control rounded-0"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password"
                            autoComplete="off"
                          />
                          <label for="floatingConfirmPassword">
                            Confirm Password
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary rounded-5 w-100 py-3 fs-6 fw-bold my-4"
                        >
                          Create Account
                        </button>
                      </form>
                      <button className="btn btn-outline-dark w-100">
                        Sign Up with Facebook
                      </button>
                      <button className="btn btn-outline-dark w-100">
                        Sign Up with Facebook
                      </button>
                    </div>
                    <div className="w-50">
                      <p className="text-center">
                        Already have an account?{" "}
                        <span className="text-primary">Sign In</span>
                      </p>
                      <img src={loveImage} alt="" className="w-100" />
                      <p className="miniText">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
