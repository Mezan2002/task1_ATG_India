import React from "react";
import logo from "../../logo.svg";
import "./Navbar.css";
import loveImage from "../../images/love.svg";
import fbIcon from "../../images/fbIcon.svg";
import googleIcon from "../../images/google.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar d-none d-lg-block">
        <div className="container-fluid d-flex align-items-center">
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
            className="d-flex"
            data-bs-toggle="modal"
            href="#signUpModal"
            role="button"
          >
            <p className="mb-0">
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
                <div class="modal-body mt-4 pb-5 px-4" id="SignUpModal">
                  <div className="d-flex" id="createAccount">
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
                        <div class="form-floating position-relative">
                          <input
                            type="password"
                            class="form-control rounded-0"
                            id="floatingPassword"
                            placeholder="Password"
                            autoComplete="off"
                          />
                          <span className="position-absolute eyeIcon">
                            <i class="fa-regular fa-eye"></i>
                          </span>
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
                          className="btn btn-primary rounded-5 w-100 py-2 fs-6 fw-bold my-4"
                        >
                          Create Account
                        </button>
                      </form>
                      <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                        <img src={fbIcon} alt="" className="me-2" />
                        Sign Up with Facebook
                      </button>
                      <button className="btn btn-outline-dark w-100 mt-2">
                        <img src={googleIcon} alt="" className="me-2" />
                        Sign Up with Google
                      </button>
                    </div>
                    <div className="w-50">
                      <p className="text-center">
                        Already have an account?{" "}
                        <a className="text-primary" href="#login">
                          Sign In
                        </a>
                      </p>
                      <img src={loveImage} alt="" className="w-100 mt-3" />
                      <p className="miniText px-4">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="signUpModal"
            aria-hidden="true"
            aria-labelledby="signUpModalLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modalHeader">
                  <h1
                    class="modal-title modalTitle fs-6 text-success"
                    id="signUpModal"
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
                <div class="modal-body mt-4 pb-5 px-4" id="SignUpModal">
                  <div className="d-flex" id="signUpModal">
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
                        <div class="form-floating position-relative">
                          <input
                            type="password"
                            class="form-control rounded-0"
                            id="floatingPassword"
                            placeholder="Password"
                            autoComplete="off"
                          />
                          <span className="position-absolute eyeIcon">
                            <i class="fa-regular fa-eye"></i>
                          </span>
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
                          className="btn btn-primary rounded-5 w-100 py-2 fs-6 fw-bold my-4"
                        >
                          Create Account
                        </button>
                      </form>
                      <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                        <img src={fbIcon} alt="" className="me-2" />
                        Sign Up with Facebook
                      </button>
                      <button className="btn btn-outline-dark w-100 mt-2">
                        <img src={googleIcon} alt="" className="me-2" />
                        Sign Up with Google
                      </button>
                    </div>
                    <div className="w-50">
                      <p className="text-center">
                        Already have an account?{" "}
                        <span
                          type="button"
                          className="text-primary"
                          data-bs-target="#logInModal"
                          data-bs-toggle="modal"
                        >
                          Sign In
                        </span>
                      </p>
                      <img src={loveImage} alt="" className="w-100 mt-3" />
                      <p className="miniText px-4">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="logInModal"
            aria-hidden="true"
            aria-labelledby="logInModalLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modalHeader">
                  <h1
                    class="modal-title modalTitle fs-6 text-success"
                    id="logInModal"
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
                <div class="modal-body mt-4 pb-5 px-4" id="logInModal">
                  <div className="d-flex" id="logInModal">
                    <div className="w-50">
                      <h3 className="mb-4">Sign In</h3>
                      <form>
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
                        <div class="form-floating position-relative">
                          <input
                            type="password"
                            class="form-control rounded-0"
                            id="floatingPassword"
                            placeholder="Password"
                            autoComplete="off"
                          />
                          <span className="position-absolute eyeIcon">
                            <i class="fa-regular fa-eye"></i>
                          </span>
                          <label for="floatingPassword">Password</label>
                        </div>
                        <p className="text-primary ms-2 mt-2">
                          Forgotten Password?
                        </p>
                        <button
                          type="submit"
                          className="btn btn-primary rounded-5 w-100 py-2 fs-6 fw-bold my-4"
                        >
                          Sign In
                        </button>
                      </form>
                      <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                        <img src={fbIcon} alt="" className="me-2" />
                        Sign Up with Facebook
                      </button>
                      <button className="btn btn-outline-dark w-100 mt-2">
                        <img src={googleIcon} alt="" className="me-2" />
                        Sign Up with Google
                      </button>
                    </div>
                    <div className="w-50">
                      <p className="text-center">
                        Don't have an account yet?{" "}
                        <span
                          type="button"
                          className="text-primary"
                          data-bs-target="#signUpModal"
                          data-bs-toggle="modal"
                        >
                          Create new for free!
                        </span>
                      </p>
                      <img src={loveImage} alt="" className="w-100 mt-3" />
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
