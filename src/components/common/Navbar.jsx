import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { useSelector } from "react-redux";
function Navbar() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const isAuthenticated = document.cookie.includes("loggedIn=true");

  const loginAuth = useSelector((state) => state.login.login);

  window.addEventListener("scroll", function () {
    var navbarArea = document.querySelector(".navbar-area");
    if (window.scrollY > 10) {
      navbarArea.classList.add("is-sticky");
    } else {
      navbarArea.classList.remove("is-sticky");
    }
  });

  // Scroll to Top Button

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  // logout
  function clearAuthenticationCookie() {
    document.cookie = "loggedIn=false;path=/;";
    document.cookie = "auth_token=;path=/;";
  }

  // Function to handle logout
  function logout() {
    // Clear the authentication cookie
    clearAuthenticationCookie();
    window.location.reload();
  }
  return (
    <div>
      <header className='main_header_arae'>
        <div className='navbar-area'>
          <div className='main-responsive-nav'>
            <div className='container'>
              <div className='main-responsive-menu'>
                <div className='logo'>
                  <a href='/'>
                    <img src={logo} alt='logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='main-navbar'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <a className='navbar-brand' href='/'>
                  <img src={logo} alt='logo' />
                </a>
                <div
                  className='collapse navbar-collapse mean-menu'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <a href='/' className='nav-link active'>
                        Home
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='/mating' className='nav-link'>
                        Mating
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='/adoption' className='nav-link'>
                        Adoption
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link'>
                        Services
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a href='/service' className='nav-link'>
                            Service
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='/service-details.html' className='nav-link'>
                            Service Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Shop
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a href='/product' className='nav-link'>
                            Shop
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='/product-detail' className='nav-link'>
                            Shop Details
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='/cart' className='nav-link'>
                            Cart
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='/pet-shop-list' className='nav-link'>
                        Pet Shop
                      </a>
                    </li>{" "}
                    <li className='nav-item'>
                      <a href='/about-us' className='nav-link'>
                        About us{" "}
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='/contact-us' className='nav-link'>
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className='others-options d-flex align-items-center'>
                    {/* <div className='option-item'>
                      <a
                        href='#'
                        className='search-box'
                        onClick={toggleOverlay}
                      >
                        {" "}
                        <img src='assets/img/icon/search.png' alt='icon' />
                      </a>
                    </div> */}
                    <ul className='navbar-nav'>
                      {isAuthenticated ? (
                        <li className='nav-item'>
                          <a href='profile' className='nav-link'>
                            <FaRegUserCircle style={{ fontSize: "35px" }} />
                          </a>
                          <ul className='dropdown-menu'>
                            <li className='nav-item'>
                              <a className='nav-link' onClick={() => logout()}>
                                Logout
                              </a>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <>
                          {" "}
                          <button
                            className='btn btn-outline-dark me-2'
                            onClick={() => (window.location.href = "/login")}
                          >
                            Login
                          </button>
                          <button
                            className='btn btn-outline-dark'
                            onClick={() => (window.location.href = "/signup")}
                          >
                            Signup
                          </button>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='others-option-for-responsive'>
            <div className='container'>
              <div className='dot-menu'>
                <div className='inner'>
                  <div className='circle circle-one'></div>
                  <div className='circle circle-two'></div>
                  <div className='circle circle-three'></div>
                </div>
              </div>
              <div className='dot-menu toggle_bar'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <i class='fas fa-bars bg-color'></i>
                </button>
              </div>

              <div
                class='collapse navbar-collapse mobile_toggleResposive'
                id='navbarNav'
              >
                <ul class='navbar-nav'>
                  <li class='nav-item'>
                    <a href='/' class='nav-link active'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a href='mating' class='nav-link'>
                      Mating
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a href='adoption' class='nav-link'>
                      Adoption
                    </a>
                  </li>
                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='#'
                      id='servicesDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Services
                    </a>
                    <ul
                      class='dropdown-menu'
                      aria-labelledby='servicesDropdown'
                    >
                      <li class='nav-item'>
                        <a href='service' class='nav-link'>
                          Service
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a href='service-details.html' class='nav-link'>
                          Service Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='#'
                      id='shopDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Shop
                    </a>
                    <ul class='dropdown-menu' aria-labelledby='shopDropdown'>
                      <li class='nav-item'>
                        <a href='product' class='nav-link'>
                          Shop
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a href='product-detail' class='nav-link'>
                          Shop Details
                        </a>
                      </li>
                      <li class='nav-item'>
                        <a href='cart' class='nav-link'>
                          Cart
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class='nav-item'>
                    <a href='pet-shop-list' class='nav-link'>
                      Pet Shop
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a href='about-us' class='nav-link'>
                      About us
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a href='contact-us' class='nav-link'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className='container'>
                {/* <div className='option-inner'>
                  <div className='others-options'>
                    <div className='responsive_icon_dot_flex'>
                      <div className='option-item'>
                        <a href='#' className='search-box'>
                          {" "}
                          <img src='assets/img/icon/search.png' alt='icon' />
                        </a>
                      </div>
                      <div className='option-item'>
                        <a
                          href='#'
                          data-bs-toggle='offcanvas'
                          data-bs-target='#offcanvasRight'
                          aria-controls='offcanvasRight'
                        >
                          {" "}
                          <img src='assets/img/icon/menu.png' alt='icon' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* search overley */}
      {isOverlayVisible && (
        <div className='search-overlay'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='search-overlay-layer'></div>
              <div className='search-overlay-layer'></div>
              <div className='search-overlay-layer'></div>
              <div className='search-overlay-close'>
                <span className='search-overlay-close-line'></span>
                <span className='search-overlay-close-line'></span>
              </div>
              <div className='search-overlay-form'>
                <form>
                  <input
                    type='text'
                    className='input-search'
                    placeholder='Search here...'
                  />
                  <button type='button'>
                    <i className='fas fa-search'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* offcanvas */}
      <div
        className='offcanvas offcanvas-end offcanvas_custom'
        tabindex='-1'
        id='offcanvasRight'
      >
        <div className='offcanvas-header'>
          <img src={logo} alt='img' />
          <button
            type='button'
            className='btn-close text-reset'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div className='offcanvas_right_wrapper'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut tur incidunt ut labore et
            </p>
            <h4>Contact Us</h4>
            <div className='top_bar_left_item'>
              <div className='top_Bar_left_icon'>
                <i className='fas fa-envelope'></i>
              </div>
              <div className='top_Bar_left_text'>
                <h5>
                  <a href='mailto:donation@domain.com'>donation@domain.com</a>
                </h5>
                <h6>Get free estimate</h6>
              </div>
            </div>
            <div className='top_bar_left_item'>
              <div className='top_Bar_left_icon'>
                <i className='fas fa-phone'></i>
              </div>
              <div className='top_Bar_left_text'>
                <h5>
                  <a href='tel:+011-234-567-89'>+011 234 567 89</a>
                </h5>
                <h6>Sat to Fri: 8:00am to 10pm</h6>
              </div>
            </div>
            <div className='top_bar_left_item'>
              <div className='top_Bar_left_icon'>
                <i className='fas fa-map-marker-alt'></i>
              </div>
              <div className='top_Bar_left_text'>
                <h5>32, New street road, New castle.</h5>
                <h6>Get direction</h6>
              </div>
            </div>
            <div className='offcanvas_follow_area'>
              <h5>Follow Us</h5>
              <ul>
                <li>
                  <a href='#!'>
                    <img src='assets/img/icon/facebook.png' alt='icon' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src='assets/img/icon/twitter.png' alt='icon' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src='assets/img/icon/instagram.png' alt='icon' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src='assets/img/icon/linkedin.png' alt='icon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
