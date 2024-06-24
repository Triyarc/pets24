import React from "react";
import "../../../style/product.css";

function PetCard({ item, handleClick }) {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 col-12' key={item?.id}>
      <div
        className='shop_main_item'
        onClick={() => {
          handleClick(item.id);
        }}
      >
        <div className='shop_item_img'>
          <span className='PetVerify'>Trusted</span>
          <div class='_3UrC5'>
            {/* <img src={item.petPhoto[0]} alt='img' /> */}
            <img
              src={`${
                item?.petPhoto[0]
                  ? item.petPhoto[0]
                  : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
              }?s=272x0`}
              sizes='(min-width: 1280px) 15vw, 
         (min-width: 1024px) 20vw, 
         (min-width: 960px) 25vw, 
         (min-width: 540px) 25vw, 
         (min-width: 320px) 30vw, 
         35vw'
              srcSet={`
    ${
      item?.petPhoto[0]
        ? item.petPhoto[0]
        : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
    }?s=100x200&q=60 100w,
    ${
      item?.petPhoto[0]
        ? item.petPhoto[0]
        : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
    }?s=200x400&q=60 200w,
    ${
      item?.petPhoto[0]
        ? item.petPhoto[0]
        : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
    }?s=300x600&q=60 300w,
    ${
      item?.petPhoto[0]
        ? item.petPhoto[0]
        : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
    }?s=400x800&q=60 400w,
    ${
      item?.petPhoto[0]
        ? item.petPhoto[0]
        : "https://apollo.olx.in/v1/files/nli9qgmpfm75-IN/image;s=300x600;q=60"
    }?s=600x1200&q=60 600w
  `}
              className='_3vnjf'
            />
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
          <h3 className='d-flex justify-content-between'>
            <a href='' alt='name' className='card-pet-name'>
              {item?.pets_name ? item.pets_name : "Dog"}
            </a>
            <a className='card-pet-adobefee'>
              {item?.discountedPrice ? item.discountedPrice : "$768"}
            </a>
          </h3>
          <div className='shop_item_price pt-2 d-flex justify-content-between'>
            <h5>
              <span>{item?.breeds_name ? item.breeds_name : ""}</span>
            </h5>
            <h5>
              <span className='p-0'>{item?.dob ? item.dob : "23"}</span>
            </h5>
          </div>
          <h3 className='d-flex justify-content-between align-items-center'>
            <span className='card-pet-gender'>
              {item?.gender ? item.gender : "male"}
            </span>

            <p className='CartCerti'> Certificated</p>
          </h3>
          <div className='card-pet-area-uploaded d-flex justify-content-between'>
            <p>Chennai 297686</p>
            <p>{item?.created_at.split(" ")[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
