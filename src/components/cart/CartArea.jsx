// Cart.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import CheckoutArea from "./CheckoutArea";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

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

      <CheckoutArea />
    </>
  );
};

export default Cart;
