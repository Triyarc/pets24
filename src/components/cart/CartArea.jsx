// Cart.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleModalToggle = () => {
    const modal = document.getElementById("exampleModal");
    const hasToggle = modal.hasAttribute("data-bs-toggle");

    if (!hasToggle) {
      modal.setAttribute("data-bs-toggle", "modal");
      modal.setAttribute("data-bs-target", "#exampleModal");
    } else {
      modal.removeAttribute("data-bs-toggle");
      modal.removeAttribute("data-bs-target");
    }
  };

  // Calculate total product amount
  const productAmount = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  // GST percentage
  const gstPercentage = 1.8; // Change this to your actual GST percentage

  // Calculate GST amount
  const gstAmount = (productAmount * gstPercentage) / 100;

  // Total amount with GST included
  const totalAmount = productAmount + gstAmount;

  // Processing fee (set to 0 for now)
  const processingFee = 0; // Change this to your actual processing fee

  // Calculate grand total
  const grandTotal = totalAmount + processingFee;

  const handleQuantityChange = (itemId, quantity) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  return (
    <>
      <section id='cart_main_area' className='mt-lg-5 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='cart_groomers_area_wrapper'>
                <div className='cart_tabel_area'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product name</th>
                          <th>Unit price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <img src={item.imageSrc} alt='img' />
                            </td>
                            <td>{item.productName}</td>
                            <td>{item.unitPrice}</td>
                            <td>
                              <div className='product_count_one'>
                                <div className='plus-minus-input'>
                                  <button
                                    type='button'
                                    className='button'
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  >
                                    <i
                                      className='fa fa-minus'
                                      aria-hidden='true'
                                    ></i>
                                  </button>
                                  <p className='form-control w-25 mx-2 '>
                                    {" "}
                                    {item.quantity}
                                  </p>
                                  <button
                                    type='button'
                                    className='button'
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  >
                                    <i
                                      className='fa fa-plus'
                                      aria-hidden='true'
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{item.totalPrice}</td>
                            <td>
                              <i
                                className='fas fa-trash'
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* checkout */}
      <section id='checkout_main_area' className='section_padding'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='cart_area_total_wrapper'>
                <div className='cart_total_item bg_cart_item'>
                  <h5>
                    Product Amount :<span>₹{productAmount}</span>
                  </h5>
                </div>
                <div className='cart_total_item justify-content-evenly'>
                  <h5>
                    GST :<span>₹{gstAmount.toFixed(2)}</span>
                  </h5>
                </div>
                <div className='cart_total_area '>
                  <h4 className='justify-content-between d-flex'>
                    Total amount : <span> ₹{totalAmount.toFixed(2)}</span>
                  </h4>
                  <h4 className='cart_voucher_amount justify-content-between d-flex'>
                    Processing Fee :
                    <span>
                      {processingFee === 0 ? "Free" : `₹${processingFee}`}
                    </span>
                  </h4>
                </div>
                <div className='cart_total_area bg_cart_item'>
                  <h4 className='justify-content-between d-flex'>
                    Grand total : <span>₹{grandTotal.toFixed(2)}</span>
                  </h4>
                </div>
              </div>
            </div>{" "}
            <div className='col-lg-6'>
              <div className='my_acount_submit'>
                <button
                  type='button'
                  className='btn btn_theme btn_md w-100  py-lg-4'
                  onClick={handleModalToggle}
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Confrim to Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modal */}

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className=' modal-dialog modal-dialog-scrollable  modal-lg'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Confirm Order
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              {" "}
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
              </div>
            </div>
            <div className='modal-footer'>
              <div className='my_acount_submit'>
                <button
                  type='button'
                  className='btn btn_theme btn_md w-100'
                  onClick={handleModalToggle}
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
