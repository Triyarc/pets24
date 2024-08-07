import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { local_host } from "../env";
import apiCall from "../apiCall";
import { useNavigate } from "react-router-dom";
import { getCookieValue } from "../cokkies";
import { toast } from "react-toastify";
import { loginConfrimation } from "../redux/loginAuthSlice";
import { useDispatch } from "react-redux";

function SignUp() {
  const redirection_path = getCookieValue("redirection_path");
  const dispatch = useDispatch();

  const [registrationData, setRegistrationData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [registrationErrors, setRegistrationErrors] = useState({
    first_name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeRegistration = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });

    // Perform validation for the changed input field
    const newErrors = { ...registrationErrors };
    newErrors[name] = value.trim()
      ? ""
      : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    setRegistrationErrors(newErrors);
  };

  const validateRegistrationForm = () => {
    let isValid = true;
    const newErrors = { ...registrationErrors };

    // Username validation
    if (!registrationData.first_name.trim()) {
      newErrors.first_name = "Username is required";
      isValid = false;
    }

    if (!registrationData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    } else if (/^\d/.test(registrationData.username)) {
      newErrors.username = "Username only in alphabetic";
      isValid = false;
    } else if (!/^[a-zA-Z ]{3,}$/.test(registrationData.username)) {
      newErrors.username = "Minimum three letter of alphabets";
      isValid = false;
    } else {
      newErrors.username = "";
    }

    // Email validation
    if (!registrationData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z]\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(registrationData.email)
    ) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Password validation
    if (!registrationData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (registrationData.password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setRegistrationErrors(newErrors);
    return isValid;
  };

  // submit
  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    if (validateRegistrationForm()) {
      console.log("Registering...", registrationData);

      const responseData = await apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/user_register`,
        payload: registrationData,
      });
      if (responseData.success == true) {
        navigate("/login");
      } else if (responseData.success == false) {
        toast.error(responseData.message);
      }
    } else {
      console.log("Registration form has errors. Please fix them.");
    }
  };

  // Google login
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        if (res.status == 200) {
          const googleData = {
            name: res.data.given_name,
            email: res.data.email,
            social_id: res.data.sub,
          };
          const responseData = await apiCall({
            method: "POST",
            apiUrl: `${local_host}/api/v1/social_login`,
            payload: googleData,
          });

          if (responseData.success == true) {
            document.cookie = `auth_token=${responseData.parameters.token};path=/`;
            document.cookie = "loggedIn=true;path=/";
            dispatch(loginConfrimation(true));
            if (
              redirection_path == "false" ||
              redirection_path == "null" ||
              redirection_path == null
            ) {
              navigate("/");
            } else {
              navigate(redirection_path);
            }
          } else if (responseData.success == false) {
            toast.error(responseData.message);
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  setTimeout(() => {
    document.cookie = "redirection_path=null;path=/";
  }, 300000);
  return (
    <div>
      <div>
        <section id='my_account_main_area' className='section_padding_bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3'>
                <div className='section_heading'>
                  <h2>Registration</h2>
                  <p>
                    Tempor aute culpa consectetur labore deserunt cupidatat
                    voluptate. Esse adipisicing in deserunt adipisicing duis.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='my_account_wrapper my_account_wrapper_right'>
                  <div className='service_details_left_top'>
                    <h2>Register</h2>
                    <div className='my_account_inner'>
                      <form onSubmit={handleSubmitRegistration}>
                        <div className='row'>
                          {" "}
                          <div className='form-group col-lg-6'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='First Name'
                              name='first_name'
                              value={registrationData.first_name}
                              onChange={handleChangeRegistration}
                            />
                            {registrationErrors.first_name && (
                              <span style={{ color: "red" }}>
                                {registrationErrors.first_name}
                              </span>
                            )}
                          </div>
                          <div className='form-group col-lg-6'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Last Name (Optional)'
                              name='last_name'
                              value={registrationData.last_name}
                              onChange={handleChangeRegistration}
                            />
                          </div>
                        </div>

                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Username'
                            name='username'
                            value={registrationData.username}
                            onChange={handleChangeRegistration}
                          />
                          {registrationErrors.username && (
                            <span style={{ color: "red" }}>
                              {registrationErrors.username}
                            </span>
                          )}
                        </div>
                        <div className='form-group'>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Email address'
                            name='email'
                            value={registrationData.email}
                            onChange={handleChangeRegistration}
                          />
                          {registrationErrors.email && (
                            <span style={{ color: "red" }}>
                              {registrationErrors.email}
                            </span>
                          )}
                        </div>
                        <div className='form-group mb-4'>
                          <input
                            type='password'
                            className='form-control'
                            placeholder='Password'
                            name='password'
                            value={registrationData.password}
                            onChange={handleChangeRegistration}
                          />
                          {registrationErrors.password && (
                            <span style={{ color: "red" }}>
                              {registrationErrors.password}
                            </span>
                          )}
                        </div>
                        <button
                          type='submit'
                          className='btn btn_theme btn_md w-100'
                        >
                          Register now
                        </button>
                      </form>
                      <div className='my_acount_submit'>
                        <button
                          type='button'
                          className='btn btn-danger btn-block'
                          onClick={() => login()}
                        >
                          <FaGoogle /> Log in with Google
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
