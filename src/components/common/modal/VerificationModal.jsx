import React, { useEffect, useState, useRef } from "react";
import VerificationImg from "../../../assets/img/verification/veridybgimage.png";
import VerificationBanner from "../../../assets/img/verification/verifybanner.png";
import { useDispatch } from "react-redux";
import { setCheckbox } from "../../../redux/formSlice";

function VerificationModal({
  showVerficationModal,
  handleVerificationModalProcess,handleVerificationModalClose
}) {
  const [checkboxChecked, setCheckboxChecked] = useState("");
  const openRef = useRef(null);
  const modalCloseRef = useRef(null);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCheckbox({ id: "1", value: checkboxChecked }));
      modalCloseRef.current.click();
      handleVerificationModalProcess();
  };

  useEffect(() => {
    if (showVerficationModal === true) {
      setTimeout(() => {
        openRef.current.click();
      }, 500);
    }
  }, [showVerficationModal]);
  console.log(showVerficationModal, "showVerficationModal");

  return (
    <div>
      {" "}
      <button
        type='button'
        class='btn bg-white border-0'
        ref={openRef}
        data-bs-toggle='modal'
        data-bs-target='#verificationModal'
      ></button>{" "}
      {showVerficationModal && (
        <div
          class='modal fade'
          id='verificationModal'
          tabindex='-1'
          aria-labelledby='verificationModal'
          aria-hidden='true'
          data-bs-backdrop='static'
          data-bs-keyboard='false'
        >
          <div class='modal-dialog modal-lg'>
            <div
              class='modal-content'
              style={{ backgroundImage: `url(${VerificationImg})` }}
            >
              <div class='modal-body'>
                <div class='verify-pet-container'>
                  <h2>Verify your pet</h2>
                  <div class='position-relative'>
                    <img src={VerificationBanner} alt='Pet Image' />
                    <span class='checked-icon'>
                      <i class='bi bi-check'></i>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit do
                    ei amet, consectetur adipiscing elibore et Lorem ipsum dolor
                    sit amet, consectetur.
                  </p>

                  <div class='price'>
                    {" "}
                    <form onSubmit={handleSubmit}>
                      <label>
                        <input
                          type='checkbox'
                          id='1'
                          value='49'
                          checked={checkboxChecked === "49"}
                          onChange={handleCheckboxChange}
                        />
                        Check me! Just $49
                      </label>
                      <button
                        class='btn  btn_theme btn_md w-100 mt-4'
                        type='submit'
                        disabled={!checkboxChecked}
                      >
                        Process
                      </button>
                      <button
                        class='btn btn_theme_white btn_md w-100  mt-3'
                        data-bs-dismiss='modal'
                        ref={modalCloseRef}
                        onClick={() => handleVerificationModalClose()}
                      >
                        Skip
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificationModal;
