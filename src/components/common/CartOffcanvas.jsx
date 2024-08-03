import React, { useEffect, useState } from "react";
import '../../assets/css/cartList.css'
import { MdDelete } from "react-icons/md";

function CartOffcanvas({
  cart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
}) {
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    setTotalCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  return (
    <div>
      <div
        class='offcanvas offcanvas-end'
        tabindex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div class='offcanvas-header'>
          <h3 class='offcanvas-title' id='offcanvasExampleLabel'>
            List Of Cart
          </h3>
          <button
            type='button'
            class='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div class='offcanvas-body offcanvas_positionCart'>
          {cart.map((item) => (
            <div className="product-card">
              <img className="product-image" src={item.image_url} alt="Hibiscus Shampoo" />
              <div className="product-details">
                <div className="product-title">{item.product_name}</div>
                <div className="product-description">
                  Seller: Triyarc
                </div>
                <div className="product-price">₹243.00</div>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <input
                    type="text"
                    min="1"
                    disabled
                    value={item.quantity}
                    className="quantity-input"
                  />
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  {/* <img className="delete-icon" src="https://via.placeholder.com/24" alt="Delete" /> */}
                  <p
                    className="deleteCart"
                    variant='outline-danger'
                    size='sm'
                    onClick={() => removeFromCart(item.id)}
                  >
                  <MdDelete />
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.product_name} (Quantity: {item.quantity})
                <button
                  variant='outline-primary'
                  size='sm'
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
                <button
                  variant='outline-primary'
                  size='sm'
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <button
                  variant='outline-danger'
                  size='sm'
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul> */}
          <div>
          {totalCount > 0 && (
            <>
              <p>Total Quantity: {totalCount}</p>
              <button variant='' className="CartnavButton" onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default CartOffcanvas;
