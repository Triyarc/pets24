import React, { useState } from "react";
import { useEffect } from "react";
import { local_host } from "../../env";
import apiCall from "../../apiCall";

function ServicesAndPrice() {
  const [serviceHeadData, setServiceHeadData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [buttonClick, setButtonClick] = useState(true);
  const [serviceCount, setserviceCount] = useState([]);
  const [serviceCounSingle, setserviceCountSingle] = useState();
  const [tabData, setTabData] = useState([]);

  var button = document.getElementsByClassName("button_click")[0];

  if (button) {
    if (buttonClick) {
      button.click();
      setButtonClick(false);
    }
  }

  const handleDataCount = (data) => {
    console.log(data, "data");

    var serviceDataCount = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let obj = {};
      obj[data[i].name] = 6;
      serviceDataCount.push(obj);
    }
    setserviceCount(serviceDataCount);
  };

  const handleLoadMore = (name) => {
    console.log(name);
    const match = name.match(/^([a-zA-Z\s]+)(\d+)$/);
    let serviceName;
    if (match) {
      serviceName = match[1].trim();
    }

    for (let i = 0; i < serviceCount.length; i++) {
      console.log(serviceCount[i]);
      if (serviceName == Object.keys(serviceCount[i])[0]) {
        setserviceCountSingle(serviceCount[i][serviceName]);
        setTabData(serviceData.slice(0, serviceCount[i][name]));
      }

      if (name == Object.keys(serviceCount[i])[0]) {
        serviceCount[i][Object.keys(serviceCount[i])[0]] += 6;
        setserviceCountSingle(serviceCount[i][name]);
        console.log(serviceData.slice(0, serviceCount[i][name]));
      }
    }
  };

  useEffect(() => {
    return () => {
      apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/service_list`,
      }).then((res) => {
        setServiceHeadData(res.parameters.data);
        handleDataCount(res.parameters.data);
      });
    };
  }, []);

  const handleServiceId = (id, name) => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/list_service`,
      payload: {
        service_id: id,
        search_text: "",
      },
    }).then((res) => {
      setServiceData(res.parameters.data.data);
      handleLoadMore(name + 1);
    });
  };

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
                            onClick={() => handleServiceId(el.id, el.name)}
                            className='nav-link  button_click'
                            id={"nav-" + idx + "-tab"}
                            data-bs-toggle='tab'
                            data-bs-target={"#nav-" + idx}
                            type='button'
                            role='tab'
                            aria-controls={"nav-" + idx}
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
                  {serviceHeadData?.map((el, idx) => (
                    <div
                      className='tab-pane fade show'
                      id={"nav-" + idx}
                      role='tabpanel'
                      aria-labelledby={"nav-" + idx + "-tab"}
                    >
                      <div className='service_tab_item_wrapper'>
                        <div className='row'>
                          {serviceData.slice(0, serviceCounSingle).map((el) => (
                            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                              <div className='service_tabs_item'>
                                <div className='service_tabs_img'>
                                  <a href='service-details.html'>
                                    <img src={el.image_url} alt='img' />
                                  </a>
                                </div>
                                <div className='service_tabs_text'>
                                  <div className='service_tabs_left_text'>
                                    <h3>
                                      <a href='service-details.html'>
                                        15 minutes walking training
                                      </a>
                                    </h3>
                                    <p>{el.timings}</p>
                                    <p>{el.description}</p>
                                  </div>
                                  <div className='service_tabs_right_text'>
                                    <h3>{el.amount}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {serviceData.length > 6 && (
                        <button
                          className='btn bg-primary text-white'
                          onClick={() => handleLoadMore(el.name)}
                        >
                          Load More
                        </button>
                      )}
                    </div>
                  ))}
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
