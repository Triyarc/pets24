import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import { images } from "../../data/galleryImage";
import "../../style/product.css";
import VerificationModal from "../common/modal/VerificationModal";
import AdsVisibilityModal from "../common/modal/AdsVisibilityModal";

const CardWithCheckbox = () => {
  return (
    <>
      <VerificationModal />
      <AdsVisibilityModal />
    </>
  );
};

function MainGallery() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => {
    setIndex(index);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className='container'>
      <div className='col-lg-6 offset-lg-3 pb-4 pb-lg-5'>
        <div className='section_heading'>
          <h2>Gallery</h2>
          <p>
            Tempor aute culpa consectetur labore deserunt cupidatat voluptate.
            Esse adipisicing in deserunt adipisicing duis.
          </p>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <Gallery
          images={images}
          // onClick={handleClick}
          enableImageSelection={false}
          style={{ width: "100%" }}
        />
        {/* {console.log(currentImage?.src)}
      {!!currentImage?.src && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )} */}
      </div>
    </div>
  );
}

export default MainGallery;
