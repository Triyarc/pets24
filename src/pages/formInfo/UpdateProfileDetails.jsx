import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { toast } from "react-toastify";

function UpdateProfileDetails() {
  const [cityValue, setCityValue] = useState(false);
  const [images, setImages] = useState([]);

  const form = useForm({
    defaultValues: {
      name: "",
      logo: "",
      email_id: "",
      whatsup_number: "",
      mobile_number: "",
      description: "",
      apartment: "",
      streetAddress: "",
      state: "",
      city: "",
      district: "",
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
  const watchDistrict = watch("district");
  const watchLogo = watch("logo");

  useEffect(() => {
    return () => {
      apiCall({
        method: "GET",
        apiUrl: `${local_host}/api/v1/get_shop_profile`,
      }).then((data) => {
        reset(data?.parameters);
        setImages([data?.parameters?.logo])
      })
    };
  }, []);


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
          setValue("district", res?.parameters?.district);
          setCityValue(true);
        }
      });
    }
  };

  const onSubmit = (data) => {
    console.log("form Submitted", data);
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key === "logo" && data[key][0] instanceof File) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/create_update_profile`,
      payload: formData,
    })
      .then((res) => {
        if (res?.success == true) {
          toast.success("submitted Successfully");
          reset();
        } else if (res?.success == false) {
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
  }, [watchPincode]);

  return (
    <div className='container pt-md-5'>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <h2>Shop Registration</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='pincode' className='p-1'>
                      Fill valid Shop Zip Code
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
                    <label for='name' className='p-1'>
                      Shop Name
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
                    <label for='logo' className='p-1'>
                      Profile Image (optional)
                    </label>

                    <input
                      type='file'
                      id='logo'
                      className='form-control'
                      accept='.jpg, .jpeg, .png'
                      {...register("logo", {
                        required: {
                          value: true,
                          message: "Profile Image required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.logo?.message}</p>
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
                    <label for='mobile_number' className='p-1'>
                      Phone Number
                    </label>

                    <input
                      type='number'
                      id='mobile_number'
                      className='form-control'
                      {...register("mobile_number", {
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
                      {errors.mobile_number?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='whatsup_number' className='p-1'>
                      Whats App Number
                    </label>

                    <input
                      type='number'
                      id='whatsup_number'
                      className='form-control'
                      {...register("whatsup_number", {
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
                      {errors.whatsup_number?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label for='state' className='p-1'>
                      Shop Description
                    </label>

                    <textarea
                      type='text'
                      id='description'
                      className='form-control'
                      {...register("description", {
                        required: {
                          value: true,
                          message: "Description required",
                        },
                      })}
                    />
                    {errors.state && (
                      <p className='text-danger'>
                        {errors.description?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='apartment' className='p-1'>
                      Appartment No*
                    </label>

                    <input
                      type='text'
                      id='apartment'
                      className='form-control'
                      {...register("apartment", {
                        required: {
                          value: true,
                          message: "Appartment No required",
                        },
                      })}
                    />

                    <p className='text-danger'>{errors.apartment?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='streetAddress' className='p-1'>
                      Street*
                    </label>

                    <input
                      type='text'
                      id='streetAddress'
                      className='form-control'
                      {...register("streetAddress", {
                        required: {
                          value: true,
                          message: "Street required",
                        },
                      })}
                    />

                    <p className='text-danger'>
                      {errors.streetAddress?.message}
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
                    <label for='district' className='p-1'>
                      district
                    </label>

                    <input
                      type='text'
                      id='district'
                      className='form-control'
                      {...register("district", {
                        required: {
                          value: true,
                          message: "district required",
                        },
                      })}
                    />
                    {watchDistrict ? (
                      ""
                    ) : (
                      <p className='text-danger'>{errors.district?.message}</p>
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

export default UpdateProfileDetails;
