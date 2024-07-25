import React, { useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useSelector } from "react-redux";

function Navbar() {
  let { id } = useParams();

  const location = useLocation();
  const currentPath = location.pathname;

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const isAuthenticated = document.cookie.includes("loggedIn=true");

  const loginAuth = useSelector((state) => state.login.login);

  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarArea = document.querySelector(".navbar-area");
      if (window.scrollY > 10) {
        navbarArea.classList.add("is-sticky");
      } else {
        navbarArea.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const clearAuthenticationCookie = () => {
    document.cookie = "loggedIn=false;path=/;";
    document.cookie = "auth_token=;path=/;";
  };

  const logout = () => {
    clearAuthenticationCookie();
    window.location.reload();
  };

  const isActive = (path) => {
    return currentPath === path ? "activeClass" : "";
  };

  const isDropdownActive = (paths) => {
    return paths.includes(currentPath) ? "activeClass" : "";
  };

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current.classList.contains("show")) {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <div>
      <header className='main_header_arae'>
        <div className='navbar-area'>
          <div className='main-responsive-nav'>
            <div className='container'>
              <div className='main-responsive-menu'>
                <div className='logo'>
                  <Link to='/'>
                    <img src={logo} alt='logo' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='main-navbar'>
            <div className='container'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <Link className='navbar-brand' to='/'>
                  <img src={logo} alt='logo' />
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  ref={navbarTogglerRef}
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='collapse navbar-collapse mean-menu'
                  id='navbarSupportedContent'
                  ref={navbarCollapseRef}
                >
                  <ul className='navbar-nav'>
                    <li className={`nav-item`}>
                      <Link
                        to='/'
                        className={`nav-link ${isActive("/")}`}
                        onClick={handleNavLinkClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li className={`nav-item`}>
                      <Link
                        to='/mating'
                        className={`nav-link ${isActive("/mating")}`}
                        onClick={handleNavLinkClick}
                      >
                        Mating
                      </Link>
                    </li>
                    <li className={`nav-item`}>
                      <Link
                        to='/adoption'
                        className={`nav-link ${isActive("/adoption")}`}
                        onClick={handleNavLinkClick}
                      >
                        Adoption
                      </Link>
                    </li>
                    <li className={`nav-item dropdown `}>
                      <a
                        className={`nav-link ${isDropdownActive([
                          "/service",
                          "/service-details.html",
                        ])}`}
                      >
                        Services
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className={`nav-item `}>
                          <Link
                            to='/service'
                            className={`nav-link ${isActive("/service")}`}
                            onClick={handleNavLinkClick}
                          >
                            Service
                          </Link>
                        </li>
                        <li className={`nav-item `}>
                          <Link
                            to='/service-details.html'
                            className={`nav-link ${isActive(
                              "/service-details.html"
                            )}`}
                            onClick={handleNavLinkClick}
                          >
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item dropdown`}>
                      <a
                        className={`nav-link ${isDropdownActive([
                          "/product",
                          "/product-detail",
                          "/cart",
                        ])}`}
                      >
                        Shop
                        <i className='fas fa-angle-down'></i>
                      </a>
                      <ul className='dropdown-menu'>
                        <li className={`nav-item`}>
                          <Link
                            to='/product'
                            className={`nav-link ${isActive("/product")}`}
                            onClick={handleNavLinkClick}
                          >
                            Shop
                          </Link>
                        </li>
                        <li className={`nav-item`}>
                          <Link
                            to='/product-detail'
                            className={`nav-link ${isActive(
                              "/product-detail"
                            )}`}
                            onClick={handleNavLinkClick}
                          >
                            Shop Details
                          </Link>
                        </li>
                        <li className={`nav-item ${isActive("/cart")}`}>
                          <Link
                            to='/cart'
                            className={`nav-link ${isActive("/cart")}`}
                            onClick={handleNavLinkClick}
                          >
                            Cart
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={`nav-item`}>
                      <Link
                        to='/pet-shop-list'
                        className={`nav-link ${isActive("/pet-shop-list")}`}
                        onClick={handleNavLinkClick}
                      >
                        Pet Shop
                      </Link>
                    </li>
                    <li className={`nav-item`}>
                      <Link
                        to='/about-us'
                        className={`nav-link ${isActive("/about-us")}`}
                        onClick={handleNavLinkClick}
                      >
                        About us
                      </Link>
                    </li>
                    <li className={`nav-item ${isActive("/contact-us")}`}>
                      <Link
                        to='/contact-us'
                        className={`nav-link ${isActive("/contact-us")}`}
                        onClick={handleNavLinkClick}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <a
                    class='btn btn-primary'
                    data-bs-toggle='offcanvas'
                    href='#offcanvasExample'
                    role='button'
                    aria-controls='offcanvasExample'
                  >
                    Cart
                  </a>
                  <div className='others-options d-flex align-items-center'>
                    <ul className='navbar-nav'>
                      {isAuthenticated ? (
                        <li className='nav-item'>
                          <Link
                            to='/profile'
                            className='nav-link'
                            onClick={handleNavLinkClick}
                          >
                            <FaRegUserCircle style={{ fontSize: "35px" }} />
                          </Link>
                          <ul className='dropdown-menu'>
                            <li className='nav-item'>
                              <span className='nav-link' onClick={logout}>
                                Logout
                              </span>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <>
                          <button
                            className='btn btn_theme btn_sm py-2 px-4'
                            onClick={() => (window.location.href = "/login")}
                          >
                            Login
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
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  ref={navbarTogglerRef}
                >
                  <i className='fas fa-bars bg-color'></i>
                </button>
              </div>

              <div
                className='collapse navbar-collapse mobile_toggleResposive'
                id='navbarNav'
                ref={navbarCollapseRef}
              >
                <ul className='navbar-nav'>
                  <li className={`nav-item `}>
                    <Link
                      to='/'
                      className={`nav-link ${isActive("/")}`}
                      onClick={handleNavLinkClick}
                    >
                      Home
                    </Link>
                  </li>
                  <li className={`nav-item ${isActive("/mating")}`}>
                    <Link
                      to='/mating'
                      className={`nav-link ${isActive("/mating")}`}
                      onClick={handleNavLinkClick}
                    >
                      Mating
                    </Link>
                  </li>
                  <li className={`nav-item `}>
                    <Link
                      to='/adoption'
                      className={`nav-link ${isActive("/adoption")}`}
                      onClick={handleNavLinkClick}
                    >
                      Adoption
                    </Link>
                  </li>
                  <li className={`nav-item dropdown`}>
                    <span
                      className={`nav-link dropdown-toggle mobile-toggle ${isDropdownActive(
                        ["/service", "/service-details.html"]
                      )}`}
                      id='servicesDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Services
                    </span>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='servicesDropdown'
                    >
                      <li className={`nav-item `}>
                        <Link
                          to='/service'
                          className={`nav-link ${isActive("/service")}`}
                          onClick={handleNavLinkClick}
                        >
                          Service
                        </Link>
                      </li>
                      <li className={`nav-item`}>
                        <Link
                          to='/service-details.html'
                          className={`nav-link ${isActive(
                            "/service-details.html"
                          )}`}
                          onClick={handleNavLinkClick}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item dropdown`}>
                    <span
                      className={`nav-link mobile-toggle dropdown-toggle ${isDropdownActive(
                        ["/product", "/product-detail", "/cart"]
                      )}`}
                      id='shopDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Shop
                    </span>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='shopDropdown'
                    >
                      <li className={`nav-item `}>
                        <Link
                          to='/product'
                          className={`nav-link ${isActive("/product")}`}
                          onClick={handleNavLinkClick}
                        >
                          Shop
                        </Link>
                      </li>
                      <li className={`nav-item`}>
                        <Link
                          to='/product-detail'
                          className={`nav-link ${isActive("/product-detail")}`}
                          onClick={handleNavLinkClick}
                        >
                          Shop Details
                        </Link>
                      </li>
                      <li className={`nav-item`}>
                        <Link
                          to='/cart'
                          className={`nav-link ${isActive("/cart")}`}
                          onClick={handleNavLinkClick}
                        >
                          Cart
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item`}>
                    <Link
                      to='/pet-shop-list'
                      className={`nav-link ${isActive("/pet-shop-list")}`}
                      onClick={handleNavLinkClick}
                    >
                      Pet Shop
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link
                      to='/about-us'
                      className={`nav-link ${isActive("/pet-shop-list")}`}
                      onClick={handleNavLinkClick}
                    >
                      About us
                    </Link>
                  </li>
                  <li className={`nav-item`}>
                    <Link
                      to='/contact-us'
                      className={`nav-link ${isActive("/contact-us")}`}
                      onClick={handleNavLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* search overlay */}
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
        tabIndex='-1'
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
                  <Link to='#!'>
                    <img src='assets/img/icon/facebook.png' alt='icon' />
                  </Link>
                </li>
                <li>
                  <Link to='#!'>
                    <img src='assets/img/icon/twitter.png' alt='icon' />
                  </Link>
                </li>
                <li>
                  <Link to='#!'>
                    <img src='assets/img/icon/instagram.png' alt='icon' />
                  </Link>
                </li>
                <li>
                  <Link to='#!'>
                    <img src='assets/img/icon/linkedin.png' alt='icon' />
                  </Link>
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
