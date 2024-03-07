import React from "react";
import OwlCarousel from "react-owl-carousel";

function ClientReview() {
  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    dots: false,
    nav: true,
  };

  const iconOptions = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    dots: false,
  };

  return (
    <div>
      {" "}
      <section
        id='testimonial_area'
        className='section_padding_bottom slider_side_btn'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Clients review</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <OwlCarousel
                className='testmoinal_main_slider owl-theme'
                {...options}
              >
                <div className='testimonial_area_item'>
                  <img
                    src='assets/img/testimonial/test-2.png'
                    className='test_main_img'
                    alt='img'
                  />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img
                    src='assets/img/testimonial/quote.png'
                    className='test_quote_img'
                    alt='icon'
                  />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item'>
                  <img
                    src='assets/img/testimonial/test-3.png'
                    className='test_main_img'
                    alt='img'
                  />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img
                    src='assets/img/testimonial/quote.png'
                    className='test_quote_img'
                    alt='icon'
                  />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item'>
                  <img
                    src='assets/img/testimonial/test-2.png'
                    className='test_main_img'
                    alt='img'
                  />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img
                    src='assets/img/testimonial/quote.png'
                    className='test_quote_img'
                    alt='icon'
                  />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item'>
                  <img
                    src='assets/img/testimonial/test-3.png'
                    className='test_main_img'
                    alt='img'
                  />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img
                    src='assets/img/testimonial/quote.png'
                    className='test_quote_img'
                    alt='icon'
                  />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item'>
                  <img
                    src='assets/img/testimonial/test-2.png'
                    className='test_main_img'
                    alt='img'
                  />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img
                    src='assets/img/testimonial/quote.png'
                    className='test_quote_img'
                    alt='icon'
                  />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section id='client_logo_area' className='section_padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 '>
              <OwlCarousel
                className='client_logo_slider_wrapper  owl-theme '
                {...iconOptions}
              >
                <div className='client_logo_item '>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-1.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-2.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-3.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-4.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-5.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-6.png' alt='img' />
                  </a>
                </div>
                <div className='client_logo_item'>
                  <a href='#!'>
                    <img src='assets/img/logo/logp-7.png' alt='img' />
                  </a>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <h2 className='d-none'>Hidden</h2>
      </section>
    </div>
  );
}

export default ClientReview;
