import React from "react";
import PetCard from "../common/card/PetCard";
import { FaShippingFast } from 'react-icons/fa';

function ProfileBanner() {
  return (
    <div>
      <div className='clinic-info'>
        <div className='image_banner position-relative'>
          <img
            src='https://images.pexels.com/photos/134060/pexels-photo-134060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Pet Care Veterinary Clinic'
            className='clinic-info_banner'
          />
          <div className='rating clinic-details_rating'>
            <span>1,230 User Reviews</span>
            <span>4.5/5</span>
            <div className='stars'>
              <i className='bi bi-star-fill' />
              <i className='bi bi-star-fill' />
              <i className='bi bi-star-fill' />
              <i className='bi bi-star-fill' />
              <i className='bi bi-star-half' />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='clinic-details d-flex flex-wrap gap-4 '>
            <img
              className='profile_img'
              src='https://images.pexels.com/photos/134060/pexels-photo-134060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Pet Care Veterinary Clinic'
            />
            <div className='d-flex flex-column justify-content-end name_detail'>
              <h1 className='shopTitle'>Pet Care Veterinary Clinic</h1>
              <p>Timing: 10 AM - 8 PM</p>
              <p className="DeliveryStyle"><FaShippingFast size={24} color="rgb(17 162 71)" /> Online Delivery Available</p>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileBanner;
