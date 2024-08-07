import React from "react";
import Carousel from "react-multi-carousel";

function Carosel() {
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
      {" "}
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
      ></Carousel>
    </div>
  );
}

export default Carosel;
