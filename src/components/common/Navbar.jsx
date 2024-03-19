import React, { useState } from "react";

function Navbar() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  // logout
  function clearAuthenticationCookie() {
    document.cookie =
      "loggedIn=false;path=/;";
  }

  // Function to handle logout
  function logout() {
    // Clear the authentication cookie
    clearAuthenticationCookie();

    // Redirect to the login page or any other appropriate page
    window.location.href = "/login"; // Replace "/login" with your actual login page URL
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
                    <img src='assets/img/logo.png' alt='logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='main-navbar'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <a className='navbar-brand' href='/'>
                  <img src='assets/img/logo.png' alt='logo' />
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
                      <a href='about-us' className='nav-link'>
                        About us{" "}
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link'>
                        Services
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a href='service' className='nav-link'>
                            Service
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='service-details.html' className='nav-link'>
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
                          <a href='product' className='nav-link'>
                            Shop
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='product-detail' className='nav-link'>
                            Shop Details
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='cart' className='nav-link'>
                            Cart
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Adoption
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a href='adoption.html' className='nav-link'>
                            Adoption
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='adoption-details.html' className='nav-link'>
                            Adoption Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='#' className='nav-link'>
                        Pages
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className='nav-item'>
                          <a href='event.html' className='nav-link'>
                            Event
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='event-details.html' className='nav-link'>
                            Event Details
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='gallery.html' className='nav-link'>
                            Gallery
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='pricing.html' className='nav-link'>
                            Pricing
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='groomers.html' className='nav-link'>
                            Groomers
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='testimonial.html' className='nav-link'>
                            Testimonial
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='login' className='nav-link'>
                            My account
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='contact-us' className='nav-link'>
                            Contact
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a href='error.html' className='nav-link'>
                            404 Error
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a href='contact-us' className='nav-link'>
                        Contact
                      </a>
                    </li>
                    <button
                      className='btn btn-outline-dark'
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </ul>
                  <div className='others-options d-flex align-items-center'>
                    <div className='option-item'>
                      <a
                        href='#'
                        className='search-box'
                        onClick={toggleOverlay}
                      >
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
              <div className='container'>
                <div className='option-inner'>
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
                </div>
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
          <img src='assets/img/logo.png' alt='img' />
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
