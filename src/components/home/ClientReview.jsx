import Carousel from "react-multi-carousel";
import img1 from "../../assets/img/testimonial/test-2.png";
import img2 from "../../assets/img/testimonial/test-3.png";
import quotes from "../../assets/img/testimonial/quote.png";
import icon from "../../assets/img/logo/logp-1.png";
import useAos from "../../useAos";

function ClientReview() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const responsiveLogo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  useAos();

  return (
    <div>
      {" "}
      <section
        id='testimonial_area'
        className='section_padding_bottom slider_side_btn'
        // data-aos='fade-zoom-out'
        // data-aos-offset='200'
        // data-aos-easing='ease-in-sine'
        // data-aos-duration='600'
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
          <div className='row mt-lg-5 mt-4'>
            <div className='col-lg-12'>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                arrows={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition='transform 300ms ease-in-out'
                transitionDuration={1000}
                containerClass='carousel-container'
                sliderClass='react-multi-carousel-track'
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                rewind={true}
                rewindWithAnimation={true}
                renderDotsOutside={true}
                minimumTouchDrag={50}
              >
                <div className='testimonial_area_item m-2'>
                  <img src={img1} className='test_main_img' alt='img' />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img src={quotes} className='test_quote_img' alt='icon' />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item m-2'>
                  <img src={img2} className='test_main_img' alt='img' />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img src={quotes} className='test_quote_img' alt='icon' />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item m-2'>
                  <img src={img1} className='test_main_img' alt='img' />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img src={quotes} className='test_quote_img' alt='icon' />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item m-2'>
                  <img src={img2} className='test_main_img' alt='img' />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img src={quotes} className='test_quote_img' alt='icon' />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
                <div className='testimonial_area_item m-2'>
                  <img src={img1} className='test_main_img' alt='img' />
                  <p className='test_main_para'>
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusm menos tdolore magna aliqua andhn.
                  </p>
                  <img src={quotes} className='test_quote_img' alt='icon' />
                  <div className='test_destination'>
                    <h3>Adam brown</h3>
                    <p>Businessman</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section
        id='client_logo_area'
        className=''
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 '>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                arrows={false}
                responsive={responsiveLogo}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition='transform 300ms ease-in-out'
                transitionDuration={1000}
                containerClass='carousel-container'
                sliderClass='react-multi-carousel-track'
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                rewind={true}
                rewindWithAnimation={true}
                renderDotsOutside={false}
                minimumTouchDrag={50}
              >
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
                <div className='client_logo_item text-center'>
                  <a href='#!'>
                    <img src={icon} alt='img' />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <h2 className='d-none'>Hidden</h2>
      </section>
    </div>
  );
}

export default ClientReview;
