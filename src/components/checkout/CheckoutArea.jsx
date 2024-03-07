import React from "react";

function CheckoutArea() {
  return (
    <div>
      <section id='checkout_main_area' className='section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='shipping_addres_area_main'>
                <div className='shipping_addres_main_form_area'>
                  <h2>Shipping address</h2>
                  <div className='shipping_address_form'>
                    <form action='#!'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='First name*'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Last name*'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Email address (Optional)'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Mobile number*'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='User name*'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Password*'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Street address'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Apartment, Suite, House no (optional)'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <select className='form-select form-control'>
                              <option selected>City</option>
                              <option value='1'>Khulna</option>
                              <option value='2'>Dhaka</option>
                              <option value='3'>Barisal</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <select className='form-select form-control'>
                              <option selected>Country</option>
                              <option value='1'>Khulna</option>
                              <option value='2'>Dhaka</option>
                              <option value='3'>Barisal</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Zip code'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
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
                              Save this information in address book
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='payment_method_area'>
                  <h2>Payment method</h2>
                  <div className='payment_integrate'>
                    <h3>integrate your sandbox</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='cart_area_total_wrapper'>
                <div className='cart_total_item bg_cart_item'>
                  <h5>
                    Automatic dog blue leash <span>$1,200</span>
                  </h5>
                </div>
                <div className='cart_total_item'>
                  <h5>
                    Red dog bed <span>$1,800</span>
                  </h5>
                </div>
                <div className='cart_total_area'>
                  <h4>
                    Total amount: <span>$400</span>
                  </h4>
                  <h4 className='cart_voucher_amount'>
                    Voucher (happy60): <span>-$60</span>
                  </h4>
                </div>
                <div className='cart_total_area bg_cart_item'>
                  <h4>
                    Grand total: <span>$340</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckoutArea;
