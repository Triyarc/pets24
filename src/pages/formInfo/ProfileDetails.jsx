import React, { useState } from "react";
import { toast } from "react-toastify";

function ProfileDetails() {
  const [formData, setFormData] = useState({
    ownerName: "",
    gender: "",
    ownerPhoto: "",
    email: "",
    mobileNumber: "",
    streetAddress: "",
    apartment: "",
    city: "",
    country: "",
    state:"",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    ownerName: "",
    gender: "",
    ownerPhoto: "",
    email: "",
    mobileNumber: "",
    apartment: "",
    streetAddress: "",
    city: "",
    state:"",
    country: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      // Handle file input separately
      handleFileChange(e);
    } else {
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
    }
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Check if file is selected
    if (file) {
      // Check file extension
      const allowedExtensions = ["jpeg", "jpg", "png"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes(fileExtension)) {
        toast.error("Provide Valid File Format");
        // Clear the file input
        e.target.value = null;
        return;
      }

      // File is valid, update the state
      setFormData({
        ...formData,
        [name]: file,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    Object.entries(formData).forEach(([key, value]) => {
      // Check if the value is a string and not empty
      if (typeof value === "string" && value.trim()) {
        newErrors[key] = "";
      } else if (value instanceof File) {
        // For file inputs, just check if the file is selected
        if (!value) {
          newErrors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
          isValid = false;
        } else {
          newErrors[key] = "";
        }
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

      // Check for ownerName minimum length
      if (key === "ownerName" && value.trim().length < 3) {
        newErrors.ownerName = "Provid Valid ownerName";
        isValid = false;
      }

      if (key === "shopDescription" && value.trim().length == 0) {
        newErrors.shopDescription = "Provid Valid shopDescription";
        isValid = false;
      }

      if (key === "shopDescription" && value.trim().length < 20) {
        newErrors.shopDescription = "Minimum of 5 words";
        isValid = false;
      }

      // Check if shopDescription contains only alphabetic characters
      if (key === "shopDescription" && !/^[a-zA-Z0-9\s]+$/.test(value.trim())) {
        newErrors.shopDescription = "Provid Valid shopDescription";
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
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value.trim());
        }
      });

      // Send formDataToSend to your API or perform further actions

      console.log("Form submitted successfully:", formDataToSend);

      // Clear form fields
      setFormData({
        ownerName: "",
        gender: "",
        ownerPhoto: "",
        email: "",
        mobileNumber: "",
        streetAddress: "",
        apartment: "",
        city: "",
        state:"",
        country: "",
        zipCode: "",
      });
      const fileInputs = document.querySelectorAll('input[type="file"]');
      fileInputs.forEach((input) => {
        input.value = ""; // Clear the value
      });

      // Optionally, close modal or perform other actions
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  return (
    <div className='container pt-md-5'>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <h2>Profile Information</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Owner Name*'
                      name='ownerName'
                      value={formData.ownerName}
                      onChange={handleChange}
                    />
                    {formErrors.ownerName && (
                      <span style={{ color: "red" }}>
                        {formErrors.ownerName}
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <select
                      className='form-select form-control'
                      name='gender'
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value='' disabled selected>
                        gender
                      </option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                    {formErrors.gender && (
                      <span style={{ color: "red" }}>{formErrors.gender}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label htmlFor='ownerPhoto'>Owner Photo*</label>
                    <input
                      type='file'
                      className='form-control'
                      id='ownerPhoto'
                      name='ownerPhoto'
                      accept='.jpg, .jpeg, .png'
                      onChange={handleFileChange}
                    />
                    {formErrors.ownerPhoto && (
                      <span style={{ color: "red" }}>
                        {formErrors.ownerPhoto}
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
                      <span style={{ color: "red" }}>{formErrors.email}</span>
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
                <div className='col-lg-6'>
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
                      <span style={{ color: "red" }}>{formErrors.city}</span>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='state'
                      name='state'
                      value={formData.state}
                      onChange={handleChange}
                    />
                    {formErrors.state && (
                      <span style={{ color: "red" }}>{formErrors.state}</span>
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
                      <span style={{ color: "red" }}>{formErrors.country}</span>
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
                      <span style={{ color: "red" }}>{formErrors.zipCode}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <div className='my_acount_submit'>
                  <button type='submit' className='btn btn_theme btn_md w-100'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
