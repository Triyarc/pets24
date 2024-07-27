// Cart.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import CheckoutArea from "./CheckoutArea";
import "../../App.css"
import { FaTrash } from 'react-icons/fa';

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




  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <>
      <section id='cart_main_area' className='mt-lg-5 pt-5'>
        <div className='container'>
          <div className="container mt-4 p-0">
            <div className="row">
              <div className="col-lg-8">
                <div className="card mb-3  p-3 p-sm-2">
                  <div className="row g-0">
                    <div className="col-4 col-md-3 d-flex align-items-center justify-content-center">
                      <img src='https://m.media-amazon.com/images/I/71NrhVNqHhL._AC_UL480_FMwebp_QL65_.jpg' className="img-fluid rounded product-img" alt="Product" style={{ maxHeight: '193px' }} />
                    </div>
                    <div className="col-8 col-md-9">
                      <div className="card-body">
                        <h5 className="cart_title_card" titile={'Drools Adult Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack'}>Drools Adult Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack</h5>
                        <p className="card-text"><small className="text-muted">Seller: Triyarc</small></p>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                          <div className="cart-pricesection">
                            <p className="card-text text-decoration-line-through cart-price">₹18,999</p>
                            <p className="card-text  cart-Disprice">₹14,999 <span className="text-success">21% Off</span></p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-md-center">
                          <div className="input-group mb-2 mb-md-0 me-md-3 d-flex align-items-center cart_qtySection" >
                            <button className="btn qty_button" type="button" onClick={handleDecrement}>-</button>
                            <input
                              type="text"
                              className="form-control border-0 text-center cart_qtyInput"
                              value={quantity}
                              onChange={handleChange}
                            />
                            <button className="btn qty_button" type="button" onClick={handleIncrement}>+</button>
                          </div>
                          <button className="btn btn-outline-danger cart-Delete"> <FaTrash /> <span className="removeDelete">REMOVE</span> </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">

                <section id='checkout_main_area' >
                  <div className=''>
                    <div className='row align-items-center'>
                      <div className='col-lg-12'>
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
                      <div className='col-lg-12'>
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
              </div>
            </div>


          </div>
        </div>
      </section>
      {/* checkout */}


      <CheckoutArea />
    </>
  );
};

export default Cart;
