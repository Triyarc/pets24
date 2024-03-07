import React from "react";

function AccountArea() {
  return (
    <div>
      <section id='my_account_main_area' className='section_padding_bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>My account</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='my_account_wrapper my_account_wrapper_left'>
                <div className='service_details_left_top'>
                  <h2>Login</h2>
                  <div className='my_account_inner'>
                    <form action='#!'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='User name or email'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Password'
                        />
                      </div>
                      <div className='my_account_bottom_wrapper'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault'
                          >
                            Remember me
                          </label>
                        </div>
                        <div className='forget_pass'>
                          <a href='#!'>Forgot password?</a>
                        </div>
                      </div>
                      <div className='my_acount_submit'>
                        <a href='#!' className='btn btn_theme btn_md w-100'>
                          Log in
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='my_account_wrapper my_account_wrapper_right'>
                <div className='service_details_left_top'>
                  <h2>Register</h2>
                  <div className='my_account_inner'>
                    <form action='#!'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='User name or email'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Email address'
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Password'
                        />
                      </div>
                      <div className='my_account_bottom_wrapper'>
                        <p>
                          The password should be at least eight characters long.
                          To make it stronger, use upper and lower case letters,
                          numbers, and symbols like ! " ? $ % ^ &
                        </p>
                      </div>
                      <div className='my_acount_submit'>
                        <a href='#!' className='btn btn_theme btn_md w-100'>
                          Register now
                        </a>
                      </div>
                    </form>
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
