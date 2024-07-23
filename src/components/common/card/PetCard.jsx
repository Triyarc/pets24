import React from "react";
import "../../../style/product.css";
import verify from "../../../assets/img/common/Default.png";

function PetCard({ item, handleClick }) {
  return (
    <div
      className='shop_main_item'
      style={{ borderRadius: "21px" }}
      key={item?.id}
      onClick={() => {
        handleClick(item.id);
      }}
    >
      <div className='shop_item_img'>
        <span className='PetVerify'>
          <img src={verify} alt='verify'></img>Trusted
        </span>
        <div className='_3UrC5'>
          <img
            // style={{borderRadius:"21px"}}
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
            className='_3vnjf'
          />
        </div>
        {/* <span className='Petcert'>certified</span> */}
        {/* <span className='Petcert'>Trusted</span> */}
      </div>
      <div className='shop_item_content'>
        <h3 className='d-flex justify-content-between mt-2'>
          <a href='' alt='name' className='card-pet-name'>
            {item?.breeds_name ? item.breeds_name : "Breed"}{" "}
            {/* <span className='petDOB'>( {item?.dob ? item.dob : "23"} )</span> */}
          </a>
          {/* <a className='card-pet-adobefee'>
            {item?.discountedPrice ? item.discountedPrice : "$768"}
          </a> */}

          <span className='petNameClass'>
            {item?.pets_name ? item.pets_name : ""}
            <span className='p-0'>
              {" "}
              ({item?.gender[0] ? item.gender[0] : "male"})
            </span>
          </span>
        </h3>
        <div className='shop_item_price pt-0 d-flex justify-content-between'>
          <h5 className='petNameClass'>
            <span>
              Age : &nbsp;
              {"2.1"}
              {/* {item?.dob ? item.dob : "2.1"} */}
            </span>
            <span className='cretificated'>
              {" "}
              ({item?.is_certificate ? "Cretificated" : ""}){" "}
            </span>
          </h5>
          {/* <h5>
            <span className='p-0'>{item?.dob ? item.dob : "23"}</span>
          </h5> */}
        </div>
        {/* <h3 className='d-flex justify-content-between align-items-center'>
          <span className='card-pet-gender'>
            {item?.gender ? item.gender : "male"}
          </span>
          <p className='CartCerti'> Certificated</p>
        </h3> */}
        <div className='card-pet-area-uploaded d-flex justify-content-between my-1'>
          <p>Chennai 297686</p>
          <p>{item?.created_at.split(" ")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
