import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function RequestPetModal() {
  return (
    <>
        {/* <!-- Button trigger modal --> */}

        <button
          type='button'
          class='btn btn_theme btn_md '
          data-bs-toggle='modal'
          data-bs-target='#exampleModal1'
        >
          request Pets
        </button>
        <div
          class='modal fade'
          id='exampleModal1'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
          style={{ zIndex: "9999999" }}
        >
          <div class='modal-dialog modal-lg'>
            <div class='modal-content p-2'>
              <div class='modal-header border-0 justify-content-between'>
                <h3 class='modal-title' id='exampleModalLabel'>
                  Request Your Pet
                </h3>
                <button
                  type='button'
                  class='Modal-Close '
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <IoCloseSharp />
                </button>
              </div>
              <div class='modal-body'>
                <form>
                  <div class='mb-3'>
                    <h3 class='mb-3'>Pet Details</h3>
                    <div class='row'>
                      <div class='col-md-6 col-12'>
                        {/* <label for="pet-name" class="form-label">Pet Name:</label> */}
                        <input
                          type='text'
                          class='form-control'
                          id='pet-name'
                          placeholder='Enter pet name'
                        />
                      </div>
                      <div class='col-md-6 col-12'>
                        {/* <label for="pet-categories" class="form-label">Pet Categories:</label> */}
                        <input
                          type='text'
                          class='form-control'
                          id='pet-categories'
                          placeholder='Enter pet categories'
                        />
                      </div>
                    </div>
                  </div>
                  <div class='mb-3'>
                    <h3 class='mb-3'>Personal Details</h3>
                    <div class='mb-3'>
                      {/* <label for="name" class="form-label">Name:</label> */}
                      <input
                        type='text'
                        class='form-control'
                        id='name'
                        placeholder='Enter your name'
                      />
                    </div>
                    <div class='mb-3'>
                      {/* <label for="mobile" class="form-label">Mobile Number:</label> */}
                      <input
                        type='text'
                        class='form-control'
                        id='mobile'
                        placeholder='Enter your mobile number'
                      />
                    </div>
                    <div class='mb-3'>
                      {/* <label for="pincode" class="form-label">Pincode:</label> */}
                      <input
                        type='text'
                        class='form-control'
                        id='pincode'
                        placeholder='Enter your pincode'
                      />
                    </div>
                    <p>
                      <strong>Selvapuram Coimbatore India </strong>
                    </p>
                    {/* <div class="mb-3">
                  <label for="address" class="form-label">Address:</label>
                  <input type="text" class="form-control" id="address" placeholder="Enter your address" />
                </div> */}
                  </div>
                </form>
              </div>
              <div class='modal-footer border-0'>
                <button
                  type='button'
                  class='btn btn_theme_white btn_md '
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' class='btn btn_theme btn_md '>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default RequestPetModal;
