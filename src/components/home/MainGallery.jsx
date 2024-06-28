import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";
import { images } from "../../data/galleryImage";
import "../../style/product.css";
import VerificationImg from "../../assets/img/common/verification.jpg";

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
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
      </button>

      <div
        className='modal fade '
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered modal-lg'>
          <div className='modal-content'>
            <div className='modal-header border-0'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Post Verfication and push forward
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-6 justify-content-center d-flex'>
                  <div>
                    <h2 className='card-title' style={{ fontSize: "20px" }}>
                      Verfication
                    </h2>
                    <label
                      className={`card ${isChecked ? "checked" : ""}`}
                      style={{ width: "18rem", cursor: "pointer" }}
                    >
                      <input
                        type='checkbox'
                        style={{ display: "none" }}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <img
                        src={VerificationImg}
                        className='card-img-top'
                        alt='Verification'
                      />
                      <div
                        className='card-body'
                        style={{ color: "#485b48", fontSize: "15px" }}
                      >
                        <p
                          className='card-text'
                          style={{ color: "#485b48", fontSize: "14px" }}
                        >
                          Verify your post by video call mannualy and we provid
                          TRUSTED bandge, its make trust of your post.
                        </p>
                        <h5 className='mt-3'>Cost of &nbsp;₹49 only</h5>
                      </div>
                    </label>
                  </div>
                </div>
                <div className='col-6 justify-content-center d-flex'>
                  <div>
                    <h2 className='card-title' style={{ fontSize: "20px" }}>
                      Post Reachable
                    </h2>
                    <label
                      className={`card ${
                        selectedRadio === "option1" ? "checked" : ""
                      }`}
                      style={{
                        width: "18rem",
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='options'
                        id='option1'
                        value='option1'
                        style={{ display: "none" }}
                        checked={selectedRadio === "option1"}
                        onChange={handleRadioChange}
                      />
                      <div className='card-body'>
                        <h5>3 X </h5>
                        <p
                          style={{ color: "#485b48", fontSize: "15px" }}
                        >
                          Post reachable 3times comparing to normal post
                        </p>
                      </div>
                    </label>
                    <label
                      className={`card ${
                        selectedRadio === "option2" ? "checked" : ""
                      }`}
                      style={{
                        width: "18rem",
                        cursor: "pointer",
                        marginBottom: "10px",
                      }}
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='options'
                        id='option2'
                        value='option2'
                        style={{ display: "none" }}
                        checked={selectedRadio === "option2"}
                        onChange={handleRadioChange}
                      />
                      <div className='card-body'>
                        <h5 >5 X</h5>
                        <p  style={{ color: "#485b48", fontSize: "15px" }}>Post reachable 5times comparing to normal pos</p>
                      </div>
                    </label>
                    <label
                      className={`card ${
                        selectedRadio === "option3" ? "checked" : ""
                      }`}
                      style={{ width: "18rem", cursor: "pointer" }}
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='options'
                        id='option3'
                        value='option3'
                        style={{ display: "none" }}
                        checked={selectedRadio === "option3"}
                        onChange={handleRadioChange}
                      />
                      <div className='card-body'>
                        <h5 >7 X</h5>
                        <p  style={{ color: "#485b48", fontSize: "15px" }}>Post reachable 7times comparing to normal pos</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer border-0'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
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
      <CardWithCheckbox />
    </div>
  );
}

export default MainGallery;
