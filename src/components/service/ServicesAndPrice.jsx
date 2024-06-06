import React, { useState } from "react";
import { useEffect } from "react";
import { local_host } from "../../env";
import apiCall from "../../apiCall";

function ServicesAndPrice() {
  const [serviceHeadData, setServiceHeadData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [buttonClick, setButtonClick] = useState(true);

  useEffect(() => {
    return () => {
      apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/service_list`,
      }).then((res) => {
        setServiceHeadData(res.parameters.data);
      });
    };
  }, []);

  const handleServiceId = (id) => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/list_service`,
      payload: {
        service_id: id,
        search_text: "",
      },
    }).then((res) => {
      setServiceData(res.parameters.data.data);
    });
  };

  console.log(serviceData, "serviceHeadData");

  var button = document.getElementsByClassName("button_click")[0];

  if (button) {
    if (buttonClick) {
      button.click();
      setButtonClick(false);
    }
  }
  return (
    <div>
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
                        {serviceHeadData?.map((el, idx) => (
                          <button
                            key={idx}
                            onClick={()=>handleServiceId(el.id)}
                            className='nav-link  button_click'
                            id={'nav-'+el.id + "-tab"}
                            data-bs-toggle='tab'
                            data-bs-target={'#nav-'+el.id}
                            type='button'
                            role='tab'
                            aria-controls={'nav-'+el.id}
                            aria-selected='true'
                          >
                            {el.name}
                          </button>
                        ))}
                      </div>
                    </nav>
                  </div>
                </div>
                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-1'
                    role='tabpanel'
                    aria-labelledby='nav-1-tab'
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
                    id='nav-2'
                    role='tabpanel'
                    aria-labelledby='nav-2-tab'
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
                    id='nav-3'
                    role='tabpanel'
                    aria-labelledby='nav-3-tab'
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
                    id='nav-4'
                    role='tabpanel'
                    aria-labelledby='nav-4-tab'
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
                                <h3>hi</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-5'
                    role='tabpanel'
                    aria-labelledby='nav-5-tab'
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
                                <h3>vel</h3>
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
                                <h3>hi</h3>
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
