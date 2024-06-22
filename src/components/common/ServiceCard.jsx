import React from "react";
import serviceImg from '../../assets/img/element/service.png'
import serviceImg1 from '../../assets/img/icon/service-1.png'
import serviceImg2 from '../../assets/img/icon/service-2.png'
import serviceImg3 from '../../assets/img/icon/service-3.png'
import serviceImg4 from '../../assets/img/icon/service-4.png'
import serviceImg5 from '../../assets/img/icon/service-5.png'
import serviceImg6 from '../../assets/img/icon/service-6.png'

function ServiceCard() {
  return (
    <div>
      <section id='main_service' className='section_padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Our pet care services</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg1} alt='icon' />
                  <h3>Pet training</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg2} alt='icon' />
                  <h3>Pet wellness</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg3} alt='icon' />
                  <h3>Pet grooming</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg4} alt='icon' />
                  <h3>Walking and sitting</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg5} alt='icon' />
                  <h3>Pet taxi</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='main_service_item_wrapper'>
                <img
                  src={serviceImg}
                  className='service_hover_right'
                  alt='icon'
                />
                <div className='main_service_item_icon'>
                  <img src={serviceImg6} alt='icon' />
                  <h3>Pet hotel</h3>
                </div>
                <div className='main_service_inner_content'>
                  <p>
                    Excepteur non consectetur laboris denos consectetur non
                    proident sit laborum ipsum nulla fugiat enim.
                  </p>
                  <div className='main_Service_price'>
                    <h3>$300.00</h3>
                    <h4>$350.00</h4>
                  </div>
                  <a href='service.html' className='btn btn_theme_white btn_md'>
                    Get service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceCard;
