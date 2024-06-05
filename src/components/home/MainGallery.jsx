import React, { useEffect, useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import { Gallery } from "react-grid-gallery";
import { images } from "../../data/galleryImage";

function MainGallery() {
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
  
    const handleClick = (index, item) =>{ setIndex(index);
    }
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);
    
  return (
    <div className="container">
    <Gallery
      images={images}
      onClick={handleClick}
      enableImageSelection={false}
    />
    {console.log(currentImage?.src)}
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
    )}
  
  </div>
  )
}

export default MainGallery