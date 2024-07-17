import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCookieValue } from "../../cokkies";
import { useDispatch, useSelector } from "react-redux";
import { loginConfrimation } from "../../redux/loginAuthSlice";

function AccountArea() {
  const redirection_path = getCookieValue("redirection_path");
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });

    // Perform validation for the changed input field
    const newErrors = { ...loginErrors };
    newErrors[name] = value.trim()
      ? ""
      : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    setLoginErrors(newErrors);
  };

  const validateLoginForm = () => {
    let isValid = true;
    const newErrors = { ...loginErrors };

    Object.keys(loginData).forEach((key) => {
      if (!loginData[key].trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
        isValid = false;
      } else if (key === "email") {
        if (!/^[a-zA-Z]\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(loginData[key])) {
          newErrors[key] = "Invalid email format";
          isValid = false;
        } else {
          newErrors[key] = "";
        }
      } else if (key === "password" && loginData[key].trim().length < 8) {
        newErrors[key] = "Password must be at least 8 characters long";
        isValid = false;
      } else {
        newErrors[key] = "";
      }
    });

    setLoginErrors(newErrors);
    return isValid;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      const responseData = await apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/login`,
        payload: loginData,
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
          dispatch(loginConfrimation(true));
        } else {
          navigate(redirection_path);
        }
      } else if (responseData.success == false) {
        toast.error(responseData.message);
      }
    } else {
      console.log("Login form has errors. Please fix them.");
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
        console.log(res);
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
            debugger;
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
      <section id='my_account_main_area' className='section_padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Login </h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='my_account_wrapper my_account_wrapper_left'>
                <div className='service_details_left_top'>
                  <h2>Login</h2>
                  <div className='my_account_inner'>
                    <form onSubmit={handleSubmitLogin}>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Email'
                          name='email'
                          value={loginData.email}
                          onChange={handleChangeLogin}
                        />
                        {loginErrors.email && (
                          <span style={{ color: "red" }}>
                            {loginErrors.email}
                          </span>
                        )}
                      </div>
                      <div className='form-group mb-4'>
                        <input
                          type='password'
                          className='form-control'
                          placeholder='Password'
                          name='password'
                          value={loginData.password}
                          onChange={handleChangeLogin}
                        />
                        {loginErrors.password && (
                          <span style={{ color: "red" }}>
                            {loginErrors.password}
                          </span>
                        )}
                      </div>
                      <button
                        type='submit'
                        className='btn btn_theme btn_md w-100'
                      >
                        Log in
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
  );
}

export default AccountArea;
