import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { toast } from "react-toastify";

function EditPorfileDetails() {
  const [cityValue, setCityValue] = useState(false);
  const [imgFile, setImgFile] = useState();

  const form = useForm({
    defaultValues: {
      name: "",
      gender: "",
      profile_image: "",
      email_id: "",
      phone_number: "",
      address_line1: "",
      address_line2: "",
      state: "",
      city: "",
      country: "India",
      pincode: "",
    },
  });
  const { register, control, handleSubmit, formState, watch, setValue, reset } =
    form;
  const { errors } = formState;

  const watchPincode = watch("pincode");
  const watchCity = watch("city");
  const watchState = watch("state");
  const watchProfileImage = watch("profile_image");

  useEffect(() => {
    return () => {
      apiCall({
        method: "GET",
        apiUrl: `${local_host}/api/v1/get_user_profile`,
      }).then((data) => {
        reset(data?.parameters);
      });
    };
  }, [reset]);

  const setCityValueFn = (filedValue) => {
    let pincode = {
      pincode: filedValue,
    };
    if (cityValue === false) {
      apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/get_city_state_from_pincode`,
        payload: pincode,
      }).then((res) => {
        if (res?.parameters == null) {
          toast.error("Invalid Zip-Code");
        } else {
          setValue("city", res?.parameters?.city);
          setValue("state", res?.parameters?.state);
          setCityValue(true);
        }
      });
    }
  };

  const Uploadlogo = () => {
    setImgFile(true);
    setTimeout(() => {
      let divElement = document.getElementById("profile_image");
      divElement.click();
    }, 50);
  };

  const onSubmit = (data) => {
    setValue("country", "India");
    if (typeof data.profile_image == "string") {
      if (data.profile_image.includes("http") === true) {
        delete data.profile_image;
      }
    }

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "profile_image" && data[key][0] instanceof File) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/update_profile`,
      payload: formData,
    })
      .then((res) => {
        if (res?.success === true) {
          toast.success("submitted Successfully");
          reset();
        } else if (res?.success === false) {
          toast.error("Something went wrong");
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again later.");
      });
  };

  useEffect(() => {
    if (watchPincode?.length < 6) {
      setCityValue(false);
    }
    if (typeof watchProfileImage == "string") {
      if (watchProfileImage.includes("http")) {
        setImgFile(false);
      }
    } else {
      setImgFile(true);
    }
  }, [watchPincode, watchProfileImage]);
  return (
    <div className='container pt-md-5'>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <h2>Profile Information</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='pincode' className='p-1'>
                      Fill valid Zip Code
                    </label>

                    <input
                      type='text'
                      id='pincode'
                      className='form-control'
                      {...register("pincode", {
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: "valid pincode",
                        },
                        required: { value: true, message: "Zip-Code required" },
                        validate: (filedValue) => {
                          setCityValueFn(filedValue);
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.pincode?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='profile_image' className='p-1'>
                      Profile Image
                    </label>
                    {!imgFile && (
                      <div className='flex'>
                        <img
                          src={watchProfileImage}
                          className='shop-Logo-Image'
                          alt='Profile'
                        />
                        <button
                          className='btn btn_theme btn_md me-4 ms-5'
                          onClick={Uploadlogo}
                        >
                          Edit Image
                        </button>
                      </div>
                    )}

                    {imgFile && (
                      <>
                        <input
                          type='file'
                          id='profile_image'
                          className='form-control'
                          accept='.jpg, .jpeg, .png'
                          {...register("profile_image", {
                            required: {
                              value: true,
                              message: "profile image Image required",
                            },
                          })}
                        />
                        <p className='text-danger'>{errors.logo?.message}</p>
                      </>
                    )}
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='name' className='p-1'>
                      User Name
                    </label>

                    <input
                      type='text'
                      id='name'
                      className='form-control'
                      {...register("name", {
                        required: {
                          value: true,
                          message: "User Name required",
                        },
                        pattern: {
                          value: /^[a-zA-Z ]{3,}$/,
                          message: "Only in Alphabetic of 3 letter ",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.name?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='email_id' className='p-1'>
                      E-mail
                    </label>

                    <input
                      type='text'
                      id='email_id'
                      className='form-control'
                      {...register("email_id", {
                        required: { value: true, message: "E-mail required" },
                        pattern: {
                          value: /^[a-zA-Z]\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                          message: "Provid Valid Email",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.email_id?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='phone_number' className='p-1'>
                      Phone Number
                    </label>

                    <input
                      type='number'
                      id='phone_number'
                      className='form-control'
                      {...register("phone_number", {
                        required: {
                          value: true,
                          message: "Phone Number required",
                        },
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Provid Valid Phone Number",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.phone_number?.message}
                    </p>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='gender' className='p-1'>
                      Gender*
                    </label>
                    <select
                      as='select' // Updated to use select for dropdown
                      className='form-control'
                      name='gender'
                      {...register("gender", {
                        required: {
                          value: true,
                          message: "Gender required",
                        },
                      })}
                    >
                      <option value=''>Select Gender </option>
                      <option value='MALE'>Male</option>
                      <option value='FEMALE'>Female</option>
                      <option value='OTHER'>Other</option>
                    </select>
                    <p className='text-danger '>{errors.gender?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='address_line1' className='p-1'>
                      Appartment No*
                    </label>

                    <input
                      type='text'
                      id='address_line1'
                      className='form-control'
                      {...register("address_line1", {
                        required: {
                          value: true,
                          message: "Appartment No required",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.address_line1?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='address_line2' className='p-1'>
                      Street*
                    </label>

                    <input
                      type='text'
                      id='address_line2'
                      className='form-control'
                      {...register("address_line2", {
                        required: {
                          value: true,
                          message: "Street required",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.address_line2?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='city' className='p-1'>
                      city
                    </label>

                    <input
                      type='text'
                      id='city'
                      className='form-control'
                      {...register("city", {
                        required: {
                          value: true,
                          message: "City required",
                        },
                      })}
                    />
                    {watchCity ? (
                      ""
                    ) : (
                      <p className='text-danger'>{errors.city?.message}</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='state' className='p-1'>
                      State
                    </label>

                    <input
                      type='text'
                      id='state'
                      className='form-control'
                      {...register("state", {
                        required: {
                          value: true,
                          message: "State required",
                        },
                      })}
                    />
                    {watchState ? (
                      ""
                    ) : (
                      <p className='text-danger'>{errors.state?.message}</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='country' className='p-1'>
                      Country
                    </label>

                    <input
                      type='text'
                      id='country'
                      className='form-control'
                      value='India'
                      disabled
                      {...register("country")}
                    />
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
            <DevTool control={control} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPorfileDetails;
