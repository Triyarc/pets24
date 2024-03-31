import React, { useState } from "react";

function Kennel() {

  return (
    <div>
      <section id='shop_details_area' className='section_padding'>
        <div className='container'>
          <div className='d-flex'>
            <div className='col-first ' >
            <img src="assets/img/pet.jpg" alt="img"  className="profile-logo-img"/>
            </div>
            <div className='col-secong'>
              <div className='shop_details_wrapper'>
                <div className='shop_details_top_content'>
                  <h2>Automatic dog blue leash</h2>
                  <span className="nearBy">Near by Shop</span>
                  <div className='reviews_rating'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <span>729</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam asperiores beatae fuga harum gui laboriosam maiores
                    quasi quidem quo repudiandae voluptate. Lorem ipsum dolor
                    sit amet, denos consectetur adipisicing elit. Aliquam
                    asperiores beatae fuga harum laboriosam maio.
                  </p>

                  <li class="d-flex justify-content-start align-items-center mb-4">
                    <span class="d-flex align-items-center me-3 fs-2">
                      <i class="fas fa-address-card profile-partcard"></i>
                    </span>
                    <span>52 Buddy Ln Conway,
                      Arkansas(AR), 72032
                    </span>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='shop_details_tabs_wrapper'>
                <div className='shop_details_tab_nav'>
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
                        Adopt
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
                        Mating
                      </button>
                    </div>
                  </nav>
                </div>
                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-home'
                    role='tabpanel'
                    aria-labelledby='nav-home-tab'
                  >

                    <div className="row p-4">
                      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div class="shop_main_item">
                          <div class="shop_item_img">
                            <a href="shop-details.html">
                              <img src="assets/img/shop/shop-1.png" alt="img" />
                            </a>
                          </div>
                          <div class="shop_item_content">
                            <h3><a href="shop-details.html">Automatic dog blue leash</a></h3>
                            <div class="shop_item_price">
                              <p>Tk. 500.00/KG</p>
                              <h5>Tk. 300.00/KG</h5>
                            </div>
                            <div class="shop_item_rating">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <span>729</span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div class="shop_main_item">
                          <div class="shop_item_img">
                            <a href="shop-details.html">
                              <img src="assets/img/shop/shop-1.png" alt="img" />
                            </a>
                          </div>
                          <div class="shop_item_content">
                            <h3><a href="shop-details.html">Automatic dog blue leash</a></h3>
                            <div class="shop_item_price">
                              <p>Tk. 500.00/KG</p>
                              <h5>Tk. 300.00/KG</h5>
                            </div>
                            <div class="shop_item_rating">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <span>729</span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div class="shop_main_item">
                          <div class="shop_item_img">
                            <a href="shop-details.html">
                              <img src="assets/img/shop/shop-1.png" alt="img" />
                            </a>
                          </div>
                          <div class="shop_item_content">
                            <h3><a href="shop-details.html">Automatic dog blue leash</a></h3>
                            <div class="shop_item_price">
                              <p>Tk. 500.00/KG</p>
                              <h5>Tk. 300.00/KG</h5>
                            </div>
                            <div class="shop_item_rating">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <span>729</span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div class="shop_main_item">
                          <div class="shop_item_img">
                            <a href="shop-details.html">
                              <img src="assets/img/shop/shop-1.png" alt="img" />
                            </a>
                          </div>
                          <div class="shop_item_content">
                            <h3><a href="shop-details.html">Automatic dog blue leash</a></h3>
                            <div class="shop_item_price">
                              <p>Tk. 500.00/KG</p>
                              <h5>Tk. 300.00/KG</h5>
                            </div>
                            <div class="shop_item_rating">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <span>729</span>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                        <div class="shop_main_item">
                          <div class="shop_item_img">
                            <a href="shop-details.html">
                              <img src="assets/img/shop/shop-1.png" alt="img" />
                            </a>
                          </div>
                          <div class="shop_item_content">
                            <h3><a href="shop-details.html">Automatic dog blue leash</a></h3>
                            <div class="shop_item_price">
                              <p>Tk. 500.00/KG</p>
                              <h5>Tk. 300.00/KG</h5>
                            </div>
                            <div class="shop_item_rating">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <span>729</span>
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
                    <div className='additional_info_tabel_wrapper'>
                      <div className="row">
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                          <div class="adoption_card_wrapper">
                            <div class="adoption_item_img img_hover">
                              <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                            </div>
                            <div class="adoption_item_content">
                              <div class="adoption_info_btn">
                                <a href="adoption-details.html">More info</a>
                              </div>
                              <h3><a href="adoption-details.html">Lucy</a></h3>
                              <ul>
                                <li><span>Gender:</span> Male</li>
                                <li><span>Age:</span> 2 years</li>
                                <li><span>Breed:</span> Poodle mix</li>
                                <li><span>Behave:</span> Friendly</li>
                              </ul>
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
          <div className="row mt-3">
            <div class="shop_details_descriptions_item">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores
                beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores
                beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores
                beatae fuga harum laboriosam maiores quasi quidem quo repudiandae voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores
                beatae fuga harum laboriosam.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div class="text-center"><h2>Pet services</h2></div>
            <div className="row">
              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="service_tabs_item">
                  <div class="service_tabs_img">
                    <a href="service-details.html">
                      <img src="assets/img/service/service-1.png" alt="Image" />
                    </a>
                  </div>
                  <div class="service_tabs_text">
                    <div class="service_tabs_left_text">
                      <h3><a href="service-details.html">15 minutes walking training</a></h3>
                      <p>Tempor aute culpa consectetur labore voluptate. Esse adipisicing do.</p>
                    </div>
                    <div class="service_tabs_right_text">
                      <h3>$20.00</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="service_tabs_item">
                  <div class="service_tabs_img">
                    <a href="service-details.html">
                      <img src="assets/img/service/service-1.png" alt="Image" />
                    </a>
                  </div>
                  <div class="service_tabs_text">
                    <div class="service_tabs_left_text">
                      <h3><a href="service-details.html">15 minutes walking training</a></h3>
                      <p>Tempor aute culpa consectetur labore voluptate. Esse adipisicing do.</p>
                    </div>
                    <div class="service_tabs_right_text">
                      <h3>$20.00</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="service_tabs_item">
                  <div class="service_tabs_img">
                    <a href="service-details.html">
                      <img src="assets/img/service/service-1.png" alt="Image" />
                    </a>
                  </div>
                  <div class="service_tabs_text">
                    <div class="service_tabs_left_text">
                      <h3><a href="service-details.html">15 minutes walking training</a></h3>
                      <p>Tempor aute culpa consectetur labore voluptate. Esse adipisicing do.</p>
                    </div>
                    <div class="service_tabs_right_text">
                      <h3>$20.00</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="service_tabs_item">
                  <div class="service_tabs_img">
                    <a href="service-details.html">
                      <img src="assets/img/service/service-1.png" alt="Image" />
                    </a>
                  </div>
                  <div class="service_tabs_text">
                    <div class="service_tabs_left_text">
                      <h3><a href="service-details.html">15 minutes walking training</a></h3>
                      <p>Tempor aute culpa consectetur labore voluptate. Esse adipisicing do.</p>
                    </div>
                    <div class="service_tabs_right_text">
                      <h3>$20.00</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                <div class="service_tabs_item">
                  <div class="service_tabs_img">
                    <a href="service-details.html">
                      <img src="assets/img/service/service-1.png" alt="Image" />
                    </a>
                  </div>
                  <div class="service_tabs_text">
                    <div class="service_tabs_left_text">
                      <h3><a href="service-details.html">15 minutes walking training</a></h3>
                      <p>Tempor aute culpa consectetur labore voluptate. Esse adipisicing do.</p>
                    </div>
                    <div class="service_tabs_right_text">
                      <h3>$20.00</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row mt-3">
            <div class="text-center"><h2>Shop</h2></div>
            <div className="row">
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="adoption_card_wrapper">
                  <div class="adoption_item_img img_hover">
                    <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                  </div>
                  <div class="adoption_item_content">
                    <div class="adoption_info_btn">
                      <a href="adoption-details.html">More info</a>
                    </div>
                    <h3><a href="adoption-details.html">Lucy</a></h3>
                    <ul>
                      <li><span>Gender:</span> Male</li>
                      <li><span>Age:</span> 2 years</li>
                      <li><span>Breed:</span> Poodle mix</li>
                      <li><span>Behave:</span> Friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="adoption_card_wrapper">
                  <div class="adoption_item_img img_hover">
                    <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                  </div>
                  <div class="adoption_item_content">
                    <div class="adoption_info_btn">
                      <a href="adoption-details.html">More info</a>
                    </div>
                    <h3><a href="adoption-details.html">Lucy</a></h3>
                    <ul>
                      <li><span>Gender:</span> Male</li>
                      <li><span>Age:</span> 2 years</li>
                      <li><span>Breed:</span> Poodle mix</li>
                      <li><span>Behave:</span> Friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="adoption_card_wrapper">
                  <div class="adoption_item_img img_hover">
                    <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                  </div>
                  <div class="adoption_item_content">
                    <div class="adoption_info_btn">
                      <a href="adoption-details.html">More info</a>
                    </div>
                    <h3><a href="adoption-details.html">Lucy</a></h3>
                    <ul>
                      <li><span>Gender:</span> Male</li>
                      <li><span>Age:</span> 2 years</li>
                      <li><span>Breed:</span> Poodle mix</li>
                      <li><span>Behave:</span> Friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="adoption_card_wrapper">
                  <div class="adoption_item_img img_hover">
                    <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                  </div>
                  <div class="adoption_item_content">
                    <div class="adoption_info_btn">
                      <a href="adoption-details.html">More info</a>
                    </div>
                    <h3><a href="adoption-details.html">Lucy</a></h3>
                    <ul>
                      <li><span>Gender:</span> Male</li>
                      <li><span>Age:</span> 2 years</li>
                      <li><span>Breed:</span> Poodle mix</li>
                      <li><span>Behave:</span> Friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                <div class="adoption_card_wrapper">
                  <div class="adoption_item_img img_hover">
                    <a href="adoption-details.html"><img src="assets/img/adoption/adoption-1.png" alt="img" /></a>
                  </div>
                  <div class="adoption_item_content">
                    <div class="adoption_info_btn">
                      <a href="adoption-details.html">More info</a>
                    </div>
                    <h3><a href="adoption-details.html">Lucy</a></h3>
                    <ul>
                      <li><span>Gender:</span> Male</li>
                      <li><span>Age:</span> 2 years</li>
                      <li><span>Breed:</span> Poodle mix</li>
                      <li><span>Behave:</span> Friendly</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row mt-3 justify-content-center">
            <div className="col-lg-12">
              <div class="shop_details_descriptions_item">
                <h2 className="text-center">FAQ</h2>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-3">
            <div className="col-lg-6">
              <div class="mb-5">
                <h1 class="h3">Contact Information</h1>
                <p class="opacity-50">
                  <small>
                    Fill out the from and we will get back to you whitin 24 hours
                  </small>
                </p>
              </div>

              <div class="d-flex flex-column px-0">
                <ul class="m-0 p-0">
                  <li class="d-flex justify-content-start align-items-center mb-4">
                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i class="fas fa-phone mobile-icon"></i>

                    </span>
                    <span>+134 1234 1234</span>
                  </li>
                  <li class="d-flex align-items-center r mb-4">
                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span>Help@contact.com</span>
                  </li>
                  <li class="d-flex justify-content-start align-items-center mb-4">
                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i class="fas fa-address-card"></i>
                    </span>
                    <span>52 Buddy Ln Conway,
                      Arkansas(AR), 72032
                    </span>
                  </li>
                  <li class="d-flex justify-content-start align-items-center mb-4">
                    <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                      <i class="far fa-clock"></i>
                    </span>
                    <span>52 Buddy Ln Conway,
                      Arkansas(AR), 72032
                    </span>
                  </li>
                </ul>

              </div>

            </div>
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.86594434176!2d76.6553651999759!3d11.014146870354178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711830159906!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>



          <div className="row mt-3 justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-center">Review</h2>

              <div className="row">
                <div className="col-lg-6">
                  <div className="title p-0 m-0"><p><span><img className="review-image" src="assets/img/adoption/adoption-1.png" alt="" /></span>Dhuruvan</p></div>
                  <div className='reviews_rating padding-right'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <span>729</span>
                  </div>
                  <div className="mt-1 padding-right">
                    <p className="review-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Kennel