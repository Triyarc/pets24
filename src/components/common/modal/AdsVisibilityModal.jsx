import React, { useEffect, useRef, useState } from "react";
import VerificationImg from "../../../assets/img/verification/veridybgimage.png";
import { useDispatch } from "react-redux";
import { setRadioButton } from "../../../redux/formSlice";

function AdsVisibilityModal({
  handleVisibilityModalProcess,
  handleVisibilityModalClose,
  showVisibilityModal,
}) {
  const [selectedRadio, setSelectedRadio] = useState("");
  const openRef = useRef(null);
  const modalCloseRef = useRef(null);

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      setRadioButton({
        id: selectedRadio === "59" ? "2" : "3",
        value: selectedRadio,
      })
    );
      handleVisibilityModalProcess();
      modalCloseRef.current.click();
  };

  useEffect(() => {
    if (showVisibilityModal === true) {
      setTimeout(() => {
        openRef.current.click();
      }, 500);
    }
  }, [showVisibilityModal]);
  return (
    <div>
      <button
        type='button'
        class='btn bg-white border-0'
        ref={openRef}
        data-bs-toggle='modal'
        data-bs-target='#advertisePostModal'
      ></button>
      {showVisibilityModal && (
        <div
          class='modal fade'
          id='advertisePostModal'
          tabindex='-1'
          aria-labelledby='advertisePostModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-lg'>
            <div
              class='modal-content'
              style={{ backgroundImage: `url(${VerificationImg})` }}
            >
              <div class='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div class='verify-pet-container'>
                    <h2>Advertise your post</h2>

                    <div class='container mt-5 p-0'>
                      <div class='adv-card d-flex'>
                        <input
                          class='form-check-input'
                          type='radio'
                          id='2'
                          value='59'
                          checked={selectedRadio === "59"}
                          onChange={handleRadioChange}
                        />

                        <label class='form-check-label d-block' for='2'>
                          <div class='adv-title text-start'>3X</div>
                          <div class='adv-description text-start'>
                            Post reachable 3 times comparing to normal post
                          </div>
                        </label>
                      </div>
                      <div class='adv-card d-flex'>
                        <input
                          class='form-check-input'
                          type='radio'
                          id='3'
                          value='69'
                          checked={selectedRadio === "69"}
                          onChange={handleRadioChange}
                        />
                        <label class='form-check-label d-block' for='3'>
                          <div class='adv-title text-start'>5X</div>
                          <div class='adv-description text-start'>
                            Post reachable 3 times comparing to normal post
                          </div>
                        </label>
                      </div>
                    </div>
                    <button
                      class='btn btn-primary w-100 mb-2'
                      disabled={!selectedRadio}
                    >
                      Add Payment
                    </button>
                    <button
                      class='btn btn-link'
                      data-bs-dismiss='modal'
                      ref={modalCloseRef}
                      onClick={() => handleVisibilityModalClose()}
                    >
                      Skip
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdsVisibilityModal;
