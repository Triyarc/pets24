import React from "react";

function CartOffcanvas() {
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
        </div>
      </div>
    </div>
  );
}

export default CartOffcanvas;
