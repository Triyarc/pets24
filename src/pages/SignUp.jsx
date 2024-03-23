import React, { useState } from 'react'

function SignUp() {
  // State and validation for registration section
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registrationErrors, setRegistrationErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChangeRegistration = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });

    // Perform validation for the changed input field
    const newErrors = { ...registrationErrors };
    newErrors[name] = value.trim()
      ? ''
      : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    setRegistrationErrors(newErrors);
  };

  const validateRegistrationForm = () => {
    let isValid = true;
    const newErrors = { ...registrationErrors };

    // Username validation
    if (!registrationData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (/^\d/.test(registrationData.username)) {
      newErrors.username = 'Username only in alphabetic';
      isValid = false;
    } else if (!/^[a-zA-Z]{3,}$/.test(registrationData.username)) {
      newErrors.username =
        'Username must be at least 2 characters long and contain only alphabetic characters';
      isValid = false;
    } else {
      newErrors.username = '';
    }

    // Email validation
    if (!registrationData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (
      !/^[a-zA-Z]\w*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(registrationData.email)
    ) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Password validation
    if (!registrationData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (registrationData.password.trim().length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    setRegistrationErrors(newErrors);
    return isValid;
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    if (validateRegistrationForm()) {
      console.log('Registering...', registrationData);
    } else {
      console.log('Registration form has errors. Please fix them.');
    }
  };
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
                            <span style={{ color: 'red' }}>
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
                            <span style={{ color: 'red' }}>
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
                            <span style={{ color: 'red' }}>
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

export default SignUp