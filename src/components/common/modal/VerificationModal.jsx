import React, { useState } from "react";
import VerificationImg from "../../../assets/img/verification/veridybgimage.png";
import VerificationBanner from "../../../assets/img/verification/verifybanner.png";
import { useDispatch } from 'react-redux';
import { setCheckbox } from "../../../redux/formSlice";

function VerificationModal() {
  const [checkboxChecked, setCheckboxChecked] = useState('');
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCheckbox({ id: '1', value: checkboxChecked }));
    console.log(`Checkbox is ${checkboxChecked ? "checked" : "unchecked"}`);
  };
  return (
    <div>
      <button
        type='button'
        class='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#verifyPetModal'
      >
        Verify Your Pet
      </button>{" "}
      <div
        className='modal fade'
        id='verifyPetModal'
        tabIndex='-1'
        aria-labelledby='verifyPetModalLabel'
        aria-hidden='true'
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit do ei
                  amet, consectetur adipiscing elibore et Lorem ipsum dolor sit
                  amet, consectetur.
                </p>

                <div class='price'>
                  {" "}
                  <form onSubmit={handleSubmit}>
                    <label>
                      <input
                        type='checkbox'
                        id='1'
                        value='49'
                        checked={checkboxChecked === '49'}
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
                    <button class='btn btn_theme_white btn_md w-100  mt-3'>Skip</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationModal;
