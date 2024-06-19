import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { toast } from "react-toastify";
import PetGallery from "./PetGallery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AdoptionPost() {
  const [cityValue, setCityValue] = useState(false);
  const [images, setImages] = useState([]);
  const [petData, setPetData] = useState([]);
  const [imageItems, setImageItems] = useState([]); // State to manage selected images
  const maxNumber = 4;

  const form = useForm({
    defaultValues: {
      pets_id: null,
      breeds_id: null,
      name: "",
      gender: "",
      dob: "",
      height: "",
      weight: "",
      certificate: "",
      certificateImage: null,
      petPhoto: [],
      amount: "",
      description: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    setValue,
    reset,
    getValues,
  } = form;
  const { errors } = formState;

  const watchPets = watch("pets_id");
  const watchCertificate = watch("certificate");

  const petOptions = petData?.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const breedOptions = watchPets
    ? petData
        .find((item) => item.id === watchPets)
        .breeds?.map((breed) => ({ value: breed.id, label: breed.name }))
    : [];


  const onSubmit = (data) => {
    console.log("form Submitted", data);
    console.log(images.length, "images");
    data.petPhoto = imageItems;
    console.log(data.petPhoto, " data.petPhoto");
    if (images.length == 0) {
      toast.error("Select Image");
      return;
    }
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (
        key === "certificateImage" &&
        data[key] !== null &&
        data[key][0] instanceof File
      ) {
        formData.append(key, data[key][0]);
      } else if (key === "petPhoto" && data[key] !== null) {
        data.petPhoto.forEach((image, idx) => {
          if (image instanceof File) {
            formData.append(`${key}_${idx + 1}`, image);
          } else {
            formData.append(`${key}_${idx + 1}`, image);
          }
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/save_adoption`,
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
    setValue("breeds_id", "");
  }, [watchPets]);


  useEffect(() => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/pets_breeds_list`,
    }).then((res) => {
      console.log(res);
      setPetData(res.parameters);
    });
  }, []);

  return (
    <div className='container '>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <div className='section_heading mt-5'>
            <h2>Adoption Post</h2>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat voluptate.
              Esse adipisicing in deserunt adipisicing duis.
            </p>
          </div>
          <PetGallery
            setImages={setImages}
            images={images}
            imageItems={imageItems}
            setImageItems={setImageItems}
            maxNumber={maxNumber}
          />

          <h2>Pet Details</h2>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='zipCode' className='p-1'>
                      Pet
                    </label>

                    <Controller
                      name='pets_id'
                      control={control}
                      render={({ field }) => (
                        <Select
                          options={petOptions}
                          value={petOptions.find(
                            (c) => c.value === field.value
                          )}
                          onChange={(val) => field.onChange(val.value)}
                        />
                      )}
                      rules={{ required: true }}
                    />
                    {errors.pets_id && (
                      <p className='text-danger'>Select Pets</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='profile_image' className='p-1'>
                      Breed
                    </label>
                    <Controller
                      name='breeds_id'
                      control={control}
                      render={({ field }) => (
                        <Select
                          options={breedOptions}
                          value={breedOptions.find(
                            (c) => c.value === field.value
                          )}
                          onChange={(val) => {
                            field.onChange(val.value);
                          }}
                        />
                      )}
                      rules={{ required: true }}
                    />
                    {errors.breeds_id && (
                      <p className='text-danger'>Select Breed Correctly</p>
                    )}
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='name' className='p-1'>
                      name
                    </label>

                    <input
                      type='text'
                      id='name'
                      className='form-control'
                      {...register("name", {
                        required: {
                          value: true,
                          message: "name required",
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
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </select>
                    <p className='text-danger '>{errors.gender?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='dob' className='p-1'>
                      Birth in year
                    </label>
                    <Controller
                      className='w-100'
                      name='dob'
                      control={control}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => setValue("dob", date)}
                          dateFormat='MM/yyyy'
                          className='form-control w-100'
                          showMonthYearPicker
                        />
                      )}
                      rules={{ required: true }}
                    />

                    <p className='text-danger'>{errors.dob?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='height' className='p-1'>
                      Height in cm
                    </label>
                    <input
                      type='number'
                      id='height'
                      className='form-control'
                      {...register("height", {
                        required: {
                          value: true,
                          message: "Height required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.height?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='weight' className='p-1'>
                      Weight in Kg
                    </label>
                    <input
                      type='number'
                      id='weight'
                      className='form-control'
                      {...register("weight", {
                        required: {
                          value: true,
                          message: "Weight required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.weight?.message}</p>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='certificate' className='p-1'>
                      Certificate*
                    </label>
                    <select
                      as='select' // Updated to use select for dropdown
                      className='form-control'
                      name='certificate'
                      {...register("certificate", {
                        required: {
                          value: true,
                          message: "Certificate required",
                        },
                      })}
                    >
                      <option value=''>Select Certificate</option>
                      <option value='yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>
                    <p className='text-danger '>
                      {errors.certificate?.message}
                    </p>
                  </div>
                </div>
                {watchCertificate == "yes" && (
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <label for='certificateImage' className='p-1'>
                        Certificate Image (optional)
                      </label>

                      <input
                        type='file'
                        id='certificateImage'
                        className='form-control'
                        accept='.jpg, .jpeg, .png'
                        {...register("certificateImage", {
                          required: {
                            value: true,
                            message: "Certificate Image required",
                          },
                        })}
                      />
                      <p className='text-danger'>
                        {errors.certificateImage?.message}
                      </p>
                    </div>
                  </div>
                )}

                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='amount' className='p-1'>
                      Adoption Charge 
                    </label>
                    <input
                      type='number'
                      id='amount'
                      className='form-control'
                      {...register("amount", {
                        required: {
                          value: true,
                          message: "amount required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.amount?.message}</p>
                  </div>
                </div>

                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label for='state' className='p-1'>
                      Pet Description (Optional)
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

export default AdoptionPost;
