import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { local_host } from "../../env";
import { DevTool } from "@hookform/devtools";
import apiCall from "../../apiCall";
import { toast } from "react-toastify";
import Select from "react-select";

function ServicePost() {
  const [serviceList, setServiceList] = useState([]);

  const form = useForm({
    defaultValues: {
      service_id: null,
      duration: "",
      amount: "",
      timings: "",
      image: null,
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

  useEffect(() => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/service_list`,
    }).then((res) => {
      console.log(res);
      setServiceList(res.parameters.data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log("form Submitted", data);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (
        key === "image" &&
        data[key] !== null &&
        data[key][0] instanceof File
      ) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/save_service`,
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

  let serviceListOption = serviceList?.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  console.log(serviceListOption, "serviceListOption");

  return (
    <div className='container '>
      <div className='shipping_addres_area_main'>
        <div className='shipping_addres_main_form_area'>
          <div className='section_heading mt-5'>
            <h2>Service Post</h2>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat voluptate.
              Esse adipisicing in deserunt adipisicing duis.
            </p>
          </div>
          <div className='shipping_address_form'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='zipCode' className='p-1'>
                      Pet
                    </label>

                    <Controller
                      name='service_id'
                      control={control}
                      render={({ field }) => (
                        <Select
                          options={serviceListOption}
                          value={serviceListOption.find(
                            (c) => c.value === field.value
                          )}
                          onChange={(val) => field.onChange(val.value)}
                        />
                      )}
                      rules={{ required: true }}
                    />
                    {errors.service_id && (
                      <p className='text-danger'>Select Serive</p>
                    )}
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='duration' className='p-1'>
                    Duration - Example: 2hrs, 30mins etc..
                    </label>
                    <input
                      type='text'
                      id='duration'
                      className='form-control'
                      {...register("duration", {
                        required: {
                          value: true,
                          message: "duration required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.duration?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='timings' className='p-1'>
                      Available Timming  -  Example (9am - 6pm)
                    </label>
                    <input
                      type='text'
                      id='timings'
                      className='form-control'
                      {...register("timings", {
                        required: {
                          value: true,
                          message: "timings required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.timings?.message}</p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='amount' className='p-1'>
                      Amount
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
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='image' className='p-1'>
                      Service Image
                    </label>

                    <input
                      type='file'
                      id='image'
                      className='form-control'
                      accept='.jpg, .jpeg, .png'
                      {...register("image", {
                        required: {
                          value: true,
                          message: "serivce Image required",
                        },
                      })}
                    />
                    <p className='text-danger'>
                      {errors.image?.message}
                    </p>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group'>
                    <label for='description' className='p-1'>
                      Description
                    </label>
                    <input
                      type='text'
                      id='description'
                      className='form-control'
                      {...register("description", {
                        required: {
                          value: true,
                          message: "description required",
                        },
                      })}
                    />
                    <p className='text-danger'>{errors.description?.message}</p>
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

export default ServicePost;
