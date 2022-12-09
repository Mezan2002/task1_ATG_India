import React from "react";
import loveImage from "../../images/love.svg";
import fbIcon from "../../images/fbIcon.svg";
import googleIcon from "../../images/google.svg";

const Modal = () => {
  return (
    <div>
      {/* sign up modal start */}
      <div
        class="modal fade"
        id="signUpModal"
        aria-hidden="true"
        aria-labelledby="signUpModalLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down">
          <div class="modal-content">
            <div class="modalHeader d-md-block d-none">
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
                <div className="w-md-50">
                  <h3 className="mb-4 d-none d-md-block">Create Account</h3>
                  <div className="d-md-none d-flex justify-content-between">
                    <h3 className="mb-4">Create Account</h3>
                    <button
                      type="button"
                      class="btn p-0 mobileModalCloseBtn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="fa-regular fa-circle-xmark fs-4"></i>
                    </button>
                  </div>
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
                      className="btn btn-primary w-100 rounded-5 py-2 fs-6 fw-bold my-4 d-none d-md-block"
                    >
                      Create Account
                    </button>
                    <div className="d-flex d-md-none align-items-center justify-content-between">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-5 w-50 py-2 fs-6 fw-bold my-4"
                      >
                        Create Account
                      </button>
                      <p className="mb-0">
                        or,{" "}
                        <span
                          type="button"
                          className="text-primary"
                          data-bs-target="#logInModal"
                          data-bs-toggle="modal"
                        >
                          Sign In
                        </span>
                      </p>
                    </div>
                  </form>
                  <button
                    className="btn btn-outline-dark w-100 d-flex align-items-center 
                      justify-content-center"
                  >
                    <img src={fbIcon} alt="" className="me-2" />
                    Sign Up with Facebook
                  </button>
                  <button className="btn btn-outline-dark w-100 mt-2">
                    <img src={googleIcon} alt="" className="me-2" />
                    Sign Up with Google
                  </button>
                  <p className="miniText px-4 d-md-none d-block">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
                <div className="w-50 d-none d-md-block">
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
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sign up modal end */}

      {/* login modal start */}
      <div
        class="modal fade"
        id="logInModal"
        aria-hidden="true"
        aria-labelledby="logInModalLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-md-down">
          <div class="modal-content">
            <div class="modalHeader d-md-block d-none">
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
              <div className="d-md-flex d-block" id="logInModal">
                <div className="w-50">
                  <h3 className="mb-4 d-none d-md-block">Sign In</h3>
                  <div className="d-md-none d-flex justify-content-between">
                    <h3 className="mb-4">Sign In</h3>
                    <button
                      type="button"
                      class="btn p-0 mobileModalCloseBtn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="fa-regular fa-circle-xmark fs-4"></i>
                    </button>
                  </div>
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
                      className="btn btn-primary w-100 rounded-5 py-2 fs-6 fw-bold my-4 d-none d-md-block"
                    >
                      Sign In
                    </button>
                    <div className="d-flex d-md-none align-items-center justify-content-between">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-5 w-50 py-2 fs-6 fw-bold my-4"
                      >
                        Sign In
                      </button>
                      <p className="mb-0">
                        or,{" "}
                        <span
                          type="button"
                          className="text-primary"
                          data-bs-target="#signUpModal"
                          data-bs-toggle="modal"
                        >
                          Create Account
                        </span>
                      </p>
                    </div>
                  </form>
                  <button
                    className="btn btn-outline-dark w-100 d-flex align-items-center 
                      justify-content-center"
                  >
                    <img src={fbIcon} alt="" className="me-2" />
                    Sign Up with Facebook
                  </button>
                  <button className="btn btn-outline-dark w-100 mt-2">
                    <img src={googleIcon} alt="" className="me-2" />
                    Sign Up with Google
                  </button>
                </div>
                <div className="w-50 d-none d-md-block">
                  <p className="text-center">
                    Don't have an account yet?{" "}
                    <span
                      type="button"
                      className="text-primary"
                      data-bs-target="#signUpModal"
                      data-bs-toggle="modal"
                    >
                      Create Account
                    </span>
                  </p>
                  <img src={loveImage} alt="" className="w-100 mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login modal end */}
    </div>
  );
};

export default Modal;
