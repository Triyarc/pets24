import React from "react";
import ProductCard from "../common/card/ProductCard";
import Carousel from "react-multi-carousel";

function RelatedProduct( {related}) {
  const responsive = {
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
  return (
    <div>
      <section id='related_product_area' className='pt-4 pt-lg-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Related products</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    arrows={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={false}
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
                    {related?.map((item, idx) => (
                      <div className='col-11'>
                        <ProductCard
                          item = {item}
                        />
                      </div>
                    ))}
                  </Carousel>
            </div>
        </div>
      </section>
    </div>
  );
}

export default RelatedProduct;
