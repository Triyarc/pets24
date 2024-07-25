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

  const imageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    maxWidth: '400px',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const priceStyle = {
    marginBottom: '8px',
  };

  const buttonStyle = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  const cart_title ={
    fontSize: "22px",
    fontWeight: 500,
  }

  const cartQty ={
    width:"35px",
    height:"35px",
    fontWeight:700,
    color:"#fff",
    backgroundColor:"#f34100",
    borderRadius:"100px"
  }

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
          <div className="container mt-4 p-0">
            <div className="row">
              <div className="col-lg-8">
                <div className="card mb-3  p-3">
                  <div className="row g-0">
                    <div className="col-4 col-md-3 d-flex align-items-center justify-content-center">
                      <img src='https://m.media-amazon.com/images/I/71NrhVNqHhL._AC_UL480_FMwebp_QL65_.jpg' className="img-fluid rounded product-img" alt="Product" style={{ maxHeight: '193px' }} />
                    </div>
                    <div className="col-8 col-md-9">
                      <div className="card-body">
                        <h5 className="card-title" style={cart_title}>Drools Adult Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack</h5>
                        <p className="card-text"><small className="text-muted">Seller: Triyarc</small></p>
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                          <div>
                            <p className="card-text text-decoration-line-through">₹18,999</p>
                            <p className="card-text fs-5">₹14,999 <span className="text-success">21% Off</span></p>
                          </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-md-center">
                          <div className="input-group mb-2 mb-md-0 me-md-3 d-flex align-items-center" style={{ width: '132px' }}>
                            <button className="btn " type="button" style={cartQty} onClick={handleDecrement}>-</button>
                            <input
                              type="text"
                              className="form-control border-0 text-center"
                              value={quantity}
                              onChange={handleChange}
                            />
                            <button className="btn " type="button" style={cartQty} onClick={handleIncrement}>+</button>
                          </div>
                          <button className="btn btn-outline-danger">REMOVE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">

              </div>
            </div>


          </div>

          <div className="card" style={cardStyle}>
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              style={imageStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <h5 className="card-title">Brown Jacket</h5>
              <p className="card-text">
                <small className="text-muted">Size: XL</small>
              </p>
              <p className="card-text" style={priceStyle}>$83.97</p>
              <div className="d-flex gap-2 align-items-center ">
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary me-2" style={buttonStyle}>-</button>
                  <span>1</span>
                  <button className="btn btn-outline-secondary ms-2" style={buttonStyle}>+</button>
                </div>
                <div>
                  <i
                    className='fas fa-trash'
                    onClick={() =>
                      dispatch(removeFromCart())
                    }
                  ></i>
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
