import React from 'react'

function PetCard({item , handleClick}) {
  return (
    <div
    className='col-lg-3 col-md-6 col-sm-12 col-12'
    key={item.id}
  >
    <div
      className='shop_main_item'
      onClick={()=>{handleClick(item.id)}}
    >
      <div className='shop_item_img'>
        <div>
          <img src={item.petPhoto[0]} alt='img' />
        </div>
        {/* {item.badge && (
          <span
            className={`shop_badge ${
              item.badge === "In stock"
                ? "in_stock"
                : "in_sold"
            }`}
          >
            {item.badge}
          </span>
        )} */}
      </div>
      <div className='shop_item_content'>
        <h3>
          <a href='' alt="name">{item.pets_name}</a>
        </h3>
        <div className='shop_item_price'>
          <h5>
            Adoption Fee:{" "}
            <span>{item.discountedPrice}</span>
          </h5>
          <h5>
            DOB : <span>{item.dob}</span>
          </h5>
          <h5>
            Gender : <span>{item.gender}</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PetCard