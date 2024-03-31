import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'


function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const images = [
    'https://via.placeholder.com/600x400/ff0000',
    'https://via.placeholder.com/600x400/00ff00',
    'https://via.placeholder.com/600x400/0000ff',
    'https://via.placeholder.com/600x400/ff0000',
    'https://via.placeholder.com/600x400/00ff00',
    'https://via.placeholder.com/600x400/0000ff',
    'https://via.placeholder.com/600x400/ff0000',
    'https://via.placeholder.com/600x400/00ff00',
    'https://via.placeholder.com/600x400/0000ff',
    'https://via.placeholder.com/600x400/ff0000',
    'https://via.placeholder.com/600x400/00ff00',
    'https://via.placeholder.com/600x400/0000ff',
  ];
  
  return (
    <div>
      {" "}
      <section id='our_gallery_area' className='section_padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Our gallery</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          {/* <div className='row popup-gallery'>
            <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
              <div className='gallery_item_wrapper'>
                <img
                  src='assets/img/gallery/gallery-1.png'
                  className='main_gallery_img'
                  alt='img'
                />
                <div className='gallery_item_inner_content'>
                  <div className='gallery_inner_text'>
                    <h3>Pet shower</h3>
                    <a href='assets/img/gallery/gallery-1.png'>
                      <img src='assets/img/icon/gallery_icon.png' alt='icon' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='gallery_item_wrapper'>
                    <img
                      src='assets/img/gallery/gallery-2.png'
                      className='main_gallery_img'
                      alt='img'
                    />
                    <div className='gallery_item_inner_content'>
                      <div className='gallery_inner_text'>
                        <h3>Pet shower</h3>
                        <a href='assets/img/gallery/gallery-2.png'>
                          <img
                            src='assets/img/icon/gallery_icon.png'
                            alt='icon'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                  <div className='gallery_item_wrapper'>
                    <img
                      src='assets/img/gallery/gallery-3.png'
                      className='main_gallery_img'
                      alt='img'
                    />
                    <div className='gallery_item_inner_content'>
                      <div className='gallery_inner_text'>
                        <h3>Pet shower</h3>
                        <a href='assets/img/gallery/gallery-3.png'>
                          <img
                            src='assets/img/icon/gallery_icon.png'
                            alt='icon'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12'>
                  <div className='gallery_item_wrapper'>
                    <img
                      src='assets/img/gallery/gallery-4.png'
                      className='main_gallery_img'
                      alt='img'
                    />
                    <div className='gallery_item_inner_content'>
                      <div className='gallery_inner_text'>
                        <h3>Pet shower</h3>
                        <a href='assets/img/gallery/gallery-4.png'>
                          <img
                            src='assets/img/icon/gallery_icon.png'
                            alt='icon'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
              <div className='gallery_item_wrapper'>
                <img
                  src='assets/img/gallery/gallery-5.png'
                  className='main_gallery_img'
                  alt='img'
                />
                <div className='gallery_item_inner_content'>
                  <div className='gallery_inner_text'>
                    <h3>Pet shower</h3>
                    <a href='assets/img/gallery/gallery-5.png'>
                      <img src='assets/img/icon/gallery_icon.png' alt='icon' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div>
      <div className="gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="thumbnail"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
