import React from "react";

function ProductCard({ item, handleNavigate }) {
  
  return (
    <div
      className='shop_main_item '
      onClick={() => {
        handleNavigate(item.product_slug);
      }}
    >
      <div className='shop_item_img'>
        <a
          onClick={() => {
            handleNavigate(item.product_slug);
          }}
        >
          <img src={item?.image_url} alt='img' />
        </a>
      </div>
      <div className='shop_item_content'>
        <h3>
          <a
            onClick={() => {
              handleNavigate(item.product_slug);
            }}
          >
            {item?.product_name}
          </a>
        </h3>
        <p className='product_shop_name'>kkr Pet Shop</p>
        <div class='shop_item_price pt-0 '>
          <p>Tk. 500.00</p>
          <h5>Tk. 300.00</h5>
        </div>
        <button class='btn btn_theme_white btn_sm w-100 my-3'>Add Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
