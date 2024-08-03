import React, { useState } from "react";
import img from '../../assets/img/adoption/adoption-1.png'
import img2 from '../../assets/img/service/service-1.png'

function Kennel() {
  return (
    <div>
      <section id='shop_details_area' className=''>
        <div className='container'>
         
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
                  <div className='tab-pane fade show active' id='nav-home'role='tabpanel' aria-labelledby='nav-home-tab'>
                    <div className='row p-4'>
                      <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='adoption_card_wrapper'>
                          <div className='adoption_item_img img_hover'>
                            <a href='adoption-details.html'>
                              <img
                                src={img}
                                alt='img'
                              />
                            </a>
                          </div>
                          <div className='adoption_item_content'>
                            <div className='adoption_info_btn'>
                              <a href='adoption-details.html'>More info</a>
                            </div>
                            <h3 className='p-0'>
                              <a href='adoption-details.html'>Lucy</a>
                            </h3>
                            <ul>
                              <li>
                                <span>Gender:</span> Male
                              </li>

                              <li>
                                <span>Breed:</span> Poodle mix
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='adoption_card_wrapper'>
                          <div className='adoption_item_img img_hover'>
                            <a href='adoption-details.html'>
                              <img
                                src={img}
                                alt='img'
                              />
                            </a>
                          </div>
                          <div className='adoption_item_content'>
                            <div className='adoption_info_btn'>
                              <a href='adoption-details.html'>More info</a>
                            </div>
                            <h3 className='p-0'>
                              <a href='adoption-details.html'>Lucy</a>
                            </h3>
                            <ul>
                              <li>
                                <span>Gender:</span> Male
                              </li>

                              <li>
                                <span>Breed:</span> Poodle mix
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='adoption_card_wrapper'>
                          <div className='adoption_item_img img_hover'>
                            <a href='adoption-details.html'>
                              <img
                                src={img}
                                alt='img'
                              />
                            </a>
                          </div>
                          <div className='adoption_item_content'>
                            <div className='adoption_info_btn'>
                              <a href='adoption-details.html'>More info</a>
                            </div>
                            <h3 className='p-0'>
                              <a href='adoption-details.html'>Lucy</a>
                            </h3>
                            <ul>
                              <li>
                                <span>Gender:</span> Male
                              </li>

                              <li>
                                <span>Breed:</span> Poodle mix
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='adoption_card_wrapper'>
                          <div className='adoption_item_img img_hover'>
                            <a href='adoption-details.html'>
                              <img
                                src={img}
                                alt='img'
                              />
                            </a>
                          </div>
                          <div className='adoption_item_content'>
                            <div className='adoption_info_btn'>
                              <a href='adoption-details.html'>More info</a>
                            </div>
                            <h3 className='p-0'>
                              <a href='adoption-details.html'>Lucy</a>
                            </h3>
                            <ul>
                              <li>
                                <span>Gender:</span> Male
                              </li>

                              <li>
                                <span>Breed:</span> Poodle mix
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                        <div className='adoption_card_wrapper'>
                          <div className='adoption_item_img img_hover'>
                            <a href='adoption-details.html'>
                              <img
                                src={img}
                                alt='img'
                              />
                            </a>
                          </div>
                          <div className='adoption_item_content'>
                            <div className='adoption_info_btn'>
                              <a href='adoption-details.html'>More info</a>
                            </div>
                            <h3 className='p-0'>
                              <a href='adoption-details.html'>Lucy</a>
                            </h3>
                            <ul>
                              <li>
                                <span>Gender:</span> Male
                              </li>

                              <li>
                                <span>Breed:</span> Poodle mix
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn_theme btn_md d-flex" style={{margin:"20px auto"}}>View More</button>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-profile'
                    role='tabpanel'
                    aria-labelledby='nav-profile-tab'
                  >
                    <div className='additional_info_tabel_wrapper'>
                      <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                          <div className='adoption_card_wrapper'>
                            <div className='adoption_item_img img_hover'>
                              <a href='adoption-details.html'>
                                <img
                                  src={img}
                                  alt='img'
                                />
                              </a>
                            </div>
                            <div className='adoption_item_content'>
                              <div className='adoption_info_btn'>
                                <a href='adoption-details.html'>More info</a>
                              </div>
                              <h3 className='p-0'>
                                <a href='adoption-details.html'>Lucy</a>
                              </h3>
                              <ul>
                                <li>
                                  <span>Gender:</span> Male
                                </li>

                                <li>
                                  <span>Breed:</span> Poodle mix
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn_theme btn_md d-flex" style={{margin:"20px auto"}}>View More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='shop_details_descriptions_item'>
              <h3>Service Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam asperiores beatae fuga harum laboriosam maiores quasi
                quidem quo repudiandae voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquam asperiores beatae fuga
                harum laboriosam maiores quasi quidem quo repudiandae voluptate.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam asperiores beatae fuga harum laboriosam maiores quasi
                quidem quo repudiandae voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquam asperiores beatae fuga
                harum laboriosam.
              </p>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='text-center'>
              <h2>Pet services</h2>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <div className='service_tabs_item'>
                  <div className='service_tabs_img'>
                    <a href='service-details.html'>
                      <img src={img2} alt='Image' />
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
                        Tempor aute culpa consectetur labore voluptate. Esse
                        adipisicing do.
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
                      <img src={img2} alt='Image' />
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
                        Tempor aute culpa consectetur labore voluptate. Esse
                        adipisicing do.
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
                      <img src={img2} alt='Image' />
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
                        Tempor aute culpa consectetur labore voluptate. Esse
                        adipisicing do.
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
                      <img src={img2} alt='Image' />
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
                        Tempor aute culpa consectetur labore voluptate. Esse
                        adipisicing do.
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
                      <img src={img2} alt='Image' />
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
                        Tempor aute culpa consectetur labore voluptate. Esse
                        adipisicing do.
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

          <div className='row mt-5'>
            <div className='text-center'>
              <h2>Pet Food (&) Accessories</h2>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='adoption_card_wrapper'>
                  <div className='adoption_item_img img_hover'>
                    <a href='adoption-details.html'>
                      <img src={img} alt='img' />
                    </a>
                  </div>
                  <div className='adoption_item_content'>
                    <div className='adoption_info_btn'>
                      <a href='adoption-details.html'>More info</a>
                    </div>
                    <h3>
                      <a href='adoption-details.html'>Lucy</a>
                    </h3>
                    <ul>
                      <li>
                        <span>Gender:</span> Male
                      </li>
                      <li>
                        <span>Age:</span> 2 years
                      </li>
                      <li>
                        <span>Breed:</span> Poodle mix
                      </li>
                      <li>
                        <span>Behave:</span> Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='adoption_card_wrapper'>
                  <div className='adoption_item_img img_hover'>
                    <a href='adoption-details.html'>
                      <img src={img} alt='img' />
                    </a>
                  </div>
                  <div className='adoption_item_content'>
                    <div className='adoption_info_btn'>
                      <a href='adoption-details.html'>More info</a>
                    </div>
                    <h3>
                      <a href='adoption-details.html'>Lucy</a>
                    </h3>
                    <ul>
                      <li>
                        <span>Gender:</span> Male
                      </li>
                      <li>
                        <span>Age:</span> 2 years
                      </li>
                      <li>
                        <span>Breed:</span> Poodle mix
                      </li>
                      <li>
                        <span>Behave:</span> Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='adoption_card_wrapper'>
                  <div className='adoption_item_img img_hover'>
                    <a href='adoption-details.html'>
                      <img src={img} alt='img' />
                    </a>
                  </div>
                  <div className='adoption_item_content'>
                    <div className='adoption_info_btn'>
                      <a href='adoption-details.html'>More info</a>
                    </div>
                    <h3>
                      <a href='adoption-details.html'>Lucy</a>
                    </h3>
                    <ul>
                      <li>
                        <span>Gender:</span> Male
                      </li>
                      <li>
                        <span>Age:</span> 2 years
                      </li>
                      <li>
                        <span>Breed:</span> Poodle mix
                      </li>
                      <li>
                        <span>Behave:</span> Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='adoption_card_wrapper'>
                  <div className='adoption_item_img img_hover'>
                    <a href='adoption-details.html'>
                      <img src={img} alt='img' />
                    </a>
                  </div>
                  <div className='adoption_item_content'>
                    <div className='adoption_info_btn'>
                      <a href='adoption-details.html'>More info</a>
                    </div>
                    <h3>
                      <a href='adoption-details.html'>Lucy</a>
                    </h3>
                    <ul>
                      <li>
                        <span>Gender:</span> Male
                      </li>
                      <li>
                        <span>Age:</span> 2 years
                      </li>
                      <li>
                        <span>Breed:</span> Poodle mix
                      </li>
                      <li>
                        <span>Behave:</span> Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='adoption_card_wrapper'>
                  <div className='adoption_item_img img_hover'>
                    <a href='adoption-details.html'>
                      <img src={img} alt='img' />
                    </a>
                  </div>
                  <div className='adoption_item_content'>
                    <div className='adoption_info_btn'>
                      <a href='adoption-details.html'>More info</a>
                    </div>
                    <h3>
                      <a href='adoption-details.html'>Lucy</a>
                    </h3>
                    <ul>
                      <li>
                        <span>Gender:</span> Male
                      </li>
                      <li>
                        <span>Age:</span> 2 years
                      </li>
                      <li>
                        <span>Breed:</span> Poodle mix
                      </li>
                      <li>
                        <span>Behave:</span> Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-3 justify-content-center'>
            <div className='col-lg-12'>
              <div className='shop_details_descriptions_item'>
                <h2 className='text-center'>FAQ</h2>
                <div className='accordion' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <strong>
                          This is the second item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordionExample'
                    >
                      <div className='accordion-body'>
                        <strong>
                          This is the third item's accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='bestSeller mt-5'>
              <p className='SectionTitle'>Customer Reviews</p>
              {/* <div className='review-container'>
                <input
                  type='text'
                  className='review-input'
                  placeholder='Write your review'
                />
                <button className='review-button'>Write Review</button>
              </div> */}
              <div className='mt-4'>
                <div className='review-containercontent'>
                  <img
                    src='path/to/profile-pic.jpg'
                    alt='Sofia Harvetz'
                    className='profile-pic'
                  />
                  <div className='review-content'>
                    <div className='reviewer-name'>Sofia Harvetz</div>
                    <div className='stars'>★★★★★</div>
                    <div className='review-text'>
                      I bought it 3 weeks ago and now come back just to say
                      “Awesome Product”. I really enjoy it. At vero eos et
                      accusamus et iusto odio dignissimos ducimus qui blanditiis
                      praesentium voluptatum deleniti atque corrupt et quas
                      molestias excepturi sint non provident.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='container mt-5'>
              <div className='row'>
                <div className='col-md-8'>
                  <h5 className='fw-bold'>Get In Touch</h5>
                  <hr />
                  <form>
                    <div className='row'>
                      <div className='mb-3 col-6'>
                        <label
                          htmlFor='name'
                          className='form-label contact_lable'
                        >
                          Your Name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          name='name'
                        />
                      </div>
                      <div className='mb-3 col-6'>
                        <label
                          htmlFor='email'
                          className='form-label contact_lable'
                        >
                          Email Address
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          name='email'
                        />
                      </div>
                      <div className='mb-3 col-6'>
                        <label
                          htmlFor='phone'
                          className='form-label contact_lable'
                        >
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          className='form-control'
                          id='phone'
                          name='phone'
                        />
                      </div>
                      <div className='mb-3 col-6'>
                        <label
                          htmlFor='subject'
                          className='form-label contact_lable'
                        >
                          Subject
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='subject'
                          name='subject'
                        />
                      </div>
                      <div className='mb-3'>
                        <label
                          htmlFor='message'
                          className='form-label contact_lable'
                        >
                          Message...
                        </label>
                        <textarea
                          className='form-control'
                          id='message'
                          name='message'
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                      <div className='mb-3 form-check'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='terms'
                          name='terms'
                        />
                        <label className='form-check-label' htmlFor='terms'>
                          Accept Terms of Services and Privacy Policy
                        </label>
                      </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                      Send Message
                    </button>
                  </form>
                </div>
                <div className='col-md-4'>
                  <h5 className='fw-bold'>Contact Information</h5>
                  <hr />
                  <p className='contact_info'>
                    <strong className='contact_lable fw-bold'>Hotline:</strong>{" "}
                    12855
                  </p>
                  <p className='contact_info'>
                    <strong className='contact_lable fw-bold'>
                      Tech support:
                    </strong>{" "}
                    +1 (514) 312-5678
                  </p>
                  <p className='contact_info'>
                    <strong className='contact_lable fw-bold'>Email:</strong>
                    hello@patoi.com
                  </p>
                  <p className='contact_info'>
                    <strong className='contact_lable fw-bold'>Address:</strong>{" "}
                    1523 Cook Hill Road New Haven, CT
                  </p>
                  <p className='contact_info'>
                    <strong className='contact_lable fw-bold'>
                      Available:
                    </strong>{" "}
                    Monday - Friday 8:00am - 8:00pm
                  </p>
                </div>
              </div>
            </div>

          {/* <div className='row mt-3'>
            <div className='col-lg-6'>
              <div className='mb-5'>
                <h1 className='h3'>Contact Information</h1>
                <p className='opacity-50'>
                  <small>
                    Fill out the from and we will get back to you whitin 24
                    hours
                  </small>
                </p>
              </div>

              <div className='d-flex flex-column px-0'>
                <ul className='m-0 p-0'>
                  <li className='d-flex justify-content-start align-items-center mb-4'>
                    <span className='opacity-50 d-flex align-items-center me-3 fs-2'>
                      <i className='fas fa-phone mobile-icon'></i>
                    </span>
                    <span>+134 1234 1234</span>
                  </li>
                  <li className='d-flex align-items-center r mb-4'>
                    <span className='opacity-50 d-flex align-items-center me-3 fs-2'>
                      <i className='fas fa-envelope'></i>
                    </span>
                    <span>Help@contact.com</span>
                  </li>
                  <li className='d-flex justify-content-start align-items-center mb-4'>
                    <span className='opacity-50 d-flex align-items-center me-3 fs-2'>
                      <i className='fas fa-address-card'></i>
                    </span>
                    <span>52 Buddy Ln Conway, Arkansas(AR), 72032</span>
                  </li>
                  <li className='d-flex justify-content-start align-items-center mb-4'>
                    <span className='opacity-50 d-flex align-items-center me-3 fs-2'>
                      <i className='far fa-clock'></i>
                    </span>
                    <span>52 Buddy Ln Conway, Arkansas(AR), 72032</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.86594434176!2d76.6553651999759!3d11.014146870354178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711830159906!5m2!1sen!2sin'
                width='600'
                height='450'
                style={{ border: 0, width: "100%" }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>

          <div className='row mt-3 justify-content-center'>
            <div className='col-lg-12'>
              <h2 className='text-center'>Review</h2>

              <div className='row'>
                <div className='col-lg-6'>
                  <div className='title p-0 m-0'>
                    <p>
                      <span>
                        <img
                          className='review-image'
                          src={img}
                          alt=''
                        />
                      </span>
                      Dhuruvan
                    </p>
                  </div>
                  <div className='reviews_rating padding-right'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <span>729</span>
                  </div>
                  <div className='mt-1 padding-right'>
                    <p className='review-text'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Kennel;
