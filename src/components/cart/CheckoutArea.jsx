import React, { useRef, useState } from "react";

const CheckoutDetails = () => {
  const elementRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
    streetAddress: "",
    apartment: "",
    city: "",
    country: "",
    zipCode: "",
    saveInformation: false,
  });

  const [formErrors, setFormErrors] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
    apartment: "",
    streetAddress: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const newErrors = { ...formErrors };
    newErrors[name] = value.trim()
      ? ""
      : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;

    setFormErrors(newErrors);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    Object.entries(formData).forEach(([key, value]) => {
      // Check if the value is a string and not empty
      if (typeof value === "string" && value.trim()) {
        newErrors[key] = "";
      } else {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        isValid = false;
      }

      if (key === "email" && value.trim() && !isValidEmail(value)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }

      // Check for username minimum length
      if (key === "userName" && value.trim().length < 3) {
        newErrors.userName = "Provid Valid UserName";
        isValid = false;
      }

      // Check if username contains only alphabetic characters
      if (key === "userName" && !/^[a-zA-Z\s]+$/.test(value.trim())) {
        newErrors.userName = "Provid Valid UserName";
        isValid = false;
      }

      // Check if zipCode has exactly 6 characters
      if (key === "zipCode") {
        const trimmedValue = value.trim();
        if (trimmedValue.length === 0) {
          newErrors.zipCode = "Zipcode is required";
          isValid = false;
        } else if (trimmedValue.length !== 6) {
          newErrors.zipCode = "Zipcode must be exactly 6 characters";
          isValid = false;
        } else {
          newErrors.zipCode = "";
        }
      }
    });

    // Check if any form field is empty
    if (
      Object.values(formData).some(
        (value) => typeof value === "string" && !value.trim()
      )
    ) {
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const element = document.querySelector(".btn-close");
      console.log("Form submitted successfully:", formData);
      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        userName: "",
        password: "",
        streetAddress: "",
        apartment: "",
        city: "",
        country: "",
        zipCode: "",
        saveInformation: false,
      });
      if (elementRef.current) {
        elementRef.current.click(); // Programmatically click the element
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div
      className='modal fade '
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className=' modal-dialog modal-dialog-scrollable  modal-xl'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Confirm Order
            </h5>
            <button
              ref={elementRef}
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='shipping_addres_area_main'>
              <div className='shipping_addres_main_form_area'>
                <h2>Shipping address</h2>
                <div className='shipping_address_form'>
                  <form onSubmit={handleSubmit}>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='User Name*'
                            name='userName'
                            value={formData.userName}
                            onChange={handleChange}
                          />
                          {formErrors.userName && (
                            <span style={{ color: "red" }}>
                              {formErrors.userName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Email address*'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <span style={{ color: "red" }}>
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Mobile number*'
                            name='mobileNumber'
                            value={formData.mobileNumber}
                            onChange={handleChange}
                          />
                          {formErrors.mobileNumber && (
                            <span style={{ color: "red" }}>
                              {formErrors.mobileNumber}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Street address'
                            name='streetAddress'
                            value={formData.streetAddress}
                            onChange={handleChange}
                          />
                          {formErrors.streetAddress && (
                            <span style={{ color: "red" }}>
                              {formErrors.streetAddress}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Apartment, Suite, House no*'
                            name='apartment'
                            value={formData.apartment}
                            onChange={handleChange}
                          />
                          {formErrors.apartment && (
                            <span style={{ color: "red" }}>
                              {formErrors.apartment}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <select
                            className='form-select form-control'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                          >
                            <option value='' disabled selected>
                              City
                            </option>
                            <option value='Khulna'>Khulna</option>
                            <option value='Dhaka'>Dhaka</option>
                            <option value='Barisal'>Barisal</option>
                          </select>
                          {formErrors.city && (
                            <span style={{ color: "red" }}>
                              {formErrors.city}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <select
                            className='form-select form-control'
                            name='country'
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value='' disabled selected>
                              Country
                            </option>
                            <option value='Khulna'>Khulna</option>
                            <option value='Dhaka'>Dhaka</option>
                            <option value='Barisal'>Barisal</option>
                          </select>
                          {formErrors.country && (
                            <span style={{ color: "red" }}>
                              {formErrors.country}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='number'
                            className='form-control'
                            placeholder='Zip code'
                            name='zipCode'
                            value={formData.zipCode}
                            onChange={handleChange}
                          />
                          {formErrors.zipCode && (
                            <span style={{ color: "red" }}>
                              {formErrors.zipCode}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='flexCheckDefault'
                            name='saveInformation'
                            checked={formData.saveInformation}
                            onChange={handleChange}
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault'
                          >
                            Save this information in address book
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <div className='my_acount_submit'>
                        <button
                          type='submit'
                          className='btn btn_theme btn_md w-100'
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
