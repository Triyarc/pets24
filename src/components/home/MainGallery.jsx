import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import { images } from "../../data/galleryImage";
import "../../style/product.css";
import veridyImg from "../../assets/img/verification/verificagtionCard.png";
import veridyBG from "../../assets/img/verification/verifyBG.png";
// import VerificationImg from "../../assets/img/common/verification.jpg";
import VerificationImg from "../../assets/img/verification/veridybgimage.png";
import VerificationBanner from "../../assets/img/verification/verifybanner.png";

const CardWithCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verifyPetModal">
        Verify Your Pet
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#advertisePostModal">
        Open Modal
      </button>
      <div className="modal fade" id="verifyPetModal" tabIndex="-1" aria-labelledby="verifyPetModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content" style={{ backgroundImage: `url(${VerificationImg})` }}>
            <div class="modal-body">
              <div class="verify-pet-container">
                <h2>Verify your pet</h2>
                <div class="position-relative">
                  <img src={VerificationBanner} alt="Pet Image" />
                  <span class="checked-icon"><i class="bi bi-check"></i></span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit do ei amet, consectetur adipiscing elibore et Lorem ipsum dolor sit amet, consectetur.</p>
                <div class="price">Just $49</div>
                <button class="btn btn-primary w-100 mb-2">Add Payment</button>
                <button class="btn btn-link">Skip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="advertisePostModal" tabindex="-1" aria-labelledby="advertisePostModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content" style={{ backgroundImage: `url(${VerificationImg})` }}>
            <div class="modal-body">
              <div class="verify-pet-container">
                <h2>Advertise your post</h2>

                <div class="container mt-5 p-0">
                  <div class="adv-card d-flex">
                    <input class="form-check-input" type="radio" name="postReach" id="threeX" />
                    <label class="form-check-label d-block" for="threeX">
                      <div class="adv-title text-start">3X</div>
                      <div class="adv-description text-start">Post reachable 3 times comparing to normal post</div>
                    </label>
                  </div>
                  <div class="adv-card d-flex">
                    <input class="form-check-input" type="radio" name="postReach" id="fiveX" />
                    <label class="form-check-label d-block" for="fiveX">
                      <div class="adv-title text-start">5X</div>
                      <div class="adv-description text-start">Post reachable 3 times comparing to normal post</div>
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary w-100 mb-2">Add Payment</button>
                <button class="btn btn-link">Skip</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#verifyPetModal">
        Launch Modal
      </button> */}


      {/* <div class="modal fade" id="verifyPetModal" tabindex="-1" aria-labelledby="verifyPetModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class=" text-center verifyBG">
              <img src={veridyBG} class="img-fluid" alt="Cat and Dog Image" />
            </div>
            <div class="modal-header">
              <h5 class="modal-title verifyTitle" id="verifyPetModalLabel">Verify your pet get verify tag</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
              <div class="row">
                <div class="d-flex verifycard gap-3 align-items-center">
                  <img src={veridyImg} class="img-fluid mb-3" alt="Dog Image" />
                  <div>
                    <p>Occaecat ex consectetur eu irure non dolore in
                      anim nostrud est veniam nisi. Tempor mollit velit
                      nisi commodo reprehenderit proident.</p>
                    <div class="form-check custom-checkbox">
                      <input class="form-check-input" type="checkbox" id="verifyCheckbox" />
                      <label class="form-check-label" for="verifyCheckbox">
                        Checkbox
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="advertise-section">
                <h5 class="verifyTitle mb-3">Advertise your post</h5>
                <div class="boostresposive">
                  <div class="card">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <input type="radio" name="cardOption" class="me-3" />
                        <p class=" mb-0 fw-bold">5 days</p>
                      </div>
                      <p class="text-danger mb-0">Cost of ₹49 only</p>
                    </div>
                    <p class="ms-4">Occaecat ex consectetur eu irure</p>
                  </div>
                  <div class="card">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <input type="radio" name="cardOption" class="me-3" />
                        <p class=" mb-0 fw-bold">5 days</p>
                      </div>
                      <p class="text-danger mb-0">Cost of ₹49 only</p>
                    </div>
                    <p class="ms-4">Occaecat ex consectetur eu irure</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4">
              <button type="button" class="btn btn-secondary verify-cancel " data-bs-dismiss="modal">No Thanks</button>
              <button type="button" class="btn btn-primary verify-pay">Pay now</button>
            </div>
          </div>
        </div>
      </div> */}
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
    <div
      className='container'
    >
      <div className='col-lg-6 offset-lg-3 pb-4 pb-lg-5'>
        <div className='section_heading'>
          <h2>Gallery</h2>
          <p>
            Tempor aute culpa consectetur labore deserunt cupidatat voluptate.
            Esse adipisicing in deserunt adipisicing duis.
          </p>
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <Gallery
          images={images}
          // onClick={handleClick}
          enableImageSelection={false}
          style={{ width: '100%' }}
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
      <CardWithCheckbox />
    </div>
  );
}

export default MainGallery;
