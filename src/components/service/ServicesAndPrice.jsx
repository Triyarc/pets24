import React from "react";

function ServicesAndPrice() {
  return (
    <div>
      {" "}
      <section id='pet_service_price'>
        <div className='container'>
          <div className='text-center'>
            <h2>Pet services</h2>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='pet_price_wrapper'>
                <div className='row'>
                  <div className='col '>
                    <nav>
                      <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                        <button
                          className='nav-link active'
                          id='nav-home-tab'
                          data-bs-toggle='tab'
                          data-bs-target='#nav-home'
                          type='button'
                          role='tab'
                          aria-controls='nav-home'
                          aria-selected='true'
                        >
                          Walking & sitting
                        </button>
                        <button
                          className='nav-link'
                          id='nav-profile-tab'
                          data-bs-toggle='tab'
                          data-bs-target='#nav-profile'
                          type='button'
                          role='tab'
                          aria-controls='nav-profile'
                          aria-selected='false'
                        >
                          Pet training
                        </button>
                        <button
                          className='nav-link'
                          id='nav-contact-tab'
                          data-bs-toggle='tab'
                          data-bs-target='#nav-contact'
                          type='button'
                          role='tab'
                          aria-controls='nav-contact'
                          aria-selected='false'
                        >
                          Pet taxi
                        </button>
                        <button
                          className='nav-link'
                          id='nav-pet-tab'
                          data-bs-toggle='tab'
                          data-bs-target='#nav-pet'
                          type='button'
                          role='tab'
                          aria-controls='nav-pet'
                          aria-selected='false'
                        >
                          Pet hotel
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-home'
                    role='tabpanel'
                    aria-labelledby='nav-home-tab'
                  >
                    <div className='service_tab_item_wrapper'>
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-1.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-2.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-3.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    30 minutes walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-4.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    30 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-5.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-6.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-profile'
                    role='tabpanel'
                    aria-labelledby='nav-profile-tab'
                  >
                    <div className='service_tab_item_wrapper'>
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-1.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-2.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-5.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-6.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-contact'
                    role='tabpanel'
                    aria-labelledby='nav-contact-tab'
                  >
                    <div className='service_tab_item_wrapper'>
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-1.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-2.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    15 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-3.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    30 minutes walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-4.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    30 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-pet'
                    role='tabpanel'
                    aria-labelledby='nav-pet-tab'
                  >
                    <div className='service_tab_item_wrapper'>
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-4.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    30 minutes sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-5.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour walking training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                          <div className='service_tabs_item'>
                            <div className='service_tabs_img'>
                              <a href='service-details.html'>
                                <img
                                  src='assets/img/service/service-6.png'
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='service_tabs_text'>
                              <div className='service_tabs_left_text'>
                                <h3>
                                  <a href='service-details.html'>
                                    1 hour sitting training
                                  </a>
                                </h3>
                                <p>
                                  Tempor aute culpa consectetur labore
                                  voluptate. Esse adipisicing do.
                                </p>
                              </div>
                              <div className='service_tabs_right_text'>
                                <h3>$20.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesAndPrice;
