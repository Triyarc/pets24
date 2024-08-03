import React, { useEffect, useState } from "react";

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
        <div class='offcanvas-body'>
          <ul>
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
          </ul>
          {totalCount > 0 && (
            <>
              <p>Total Quantity: {totalCount}</p>
              <button variant='outline-danger' onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartOffcanvas;
