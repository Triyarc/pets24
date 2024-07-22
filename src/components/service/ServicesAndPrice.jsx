import React, { useState, useRef, useEffect } from "react";
import { local_host } from "../../env";
import apiCall from "../../apiCall";

function ServicesAndPrice() {
  const [serviceHeadData, setServiceHeadData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [serviceCount, setServiceCount] = useState([]);
  const [serviceCountSingle, setServiceCountSingle] = useState(6); // Initialize with 6
  const [tabData, setTabData] = useState([]);

  const buttonRef = useRef(null);

  const handleDataCount = (data) => {
    const serviceDataCount = data.map((item) => ({ [item.name]: 6 }));
    setServiceCount(serviceDataCount);
  };

  const handleLoadMore = (name) => {
    const serviceName = name.match(/^([a-zA-Z\s]+)(\d+)$/)?.[1]?.trim();

    if (!serviceName) return;

    setServiceCount((prevServiceCount) =>
      prevServiceCount.map((item) => {
        const key = Object.keys(item)[0];
        if (key === serviceName) {
          const newValue = item[key] + 6;
          setTabData(serviceData.slice(0, newValue));
          return { [key]: newValue };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/service_list`,
    }).then((res) => {
      setServiceHeadData(res.parameters.data);
      handleDataCount(res.parameters.data);
    });
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, [serviceHeadData]);

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
      handleLoadMore(name + "1");
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
                  <div className='col'>
                    <nav>
                      <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                        {serviceHeadData?.map((el, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleServiceId(el.id, el.name)}
                            className='nav-link button_click'
                            id={"nav-" + idx + "-tab"}
                            data-bs-toggle='tab'
                            data-bs-target={"#nav-" + idx}
                            type='button'
                            role='tab'
                            aria-controls={"nav-" + idx}
                            aria-selected='true'
                            ref={idx === 0 ? buttonRef : null} // Assign ref only to the first button
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
                      key={idx}
                      className='tab-pane fade show'
                      id={"nav-" + idx}
                      role='tabpanel'
                      aria-labelledby={"nav-" + idx + "-tab"}
                    >
                      <div className='service_tab_item_wrapper'>
                        <div className='row'>
                          {serviceData
                            .slice(0, serviceCountSingle)
                            .map((serviceEl) => (
                              <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                <div className='service_tabs_item'>
                                  <div className='service_tabs_img'>
                                    <a href='service-details.html'>
                                      <img
                                        src={serviceEl.image_url}
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
                                      <p>{serviceEl.timings}</p>
                                      <p>{serviceEl.description}</p>
                                    </div>
                                    <div className='service_tabs_right_text'>
                                      <h3>{serviceEl.amount}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                      {serviceData.length > 1 && (
                        <div className='mt-lg-5 mt-4'>
                          <button
                            className='btn btn_theme_white btn_md loadMore'
                            onClick={() => handleLoadMore(el.name)}
                          >
                            Load More
                          </button>
                        </div>
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
