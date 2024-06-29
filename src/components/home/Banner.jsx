import React, { useEffect, useState } from "react";
import main_Banner from "../../assets/img/common/banner_left.png";
import sub_Banner_one from "../../assets/img/icon/banner-1.png";
import sub_Banner_two from "../../assets/img/icon/banner-2.png";
import sub_Banner_three from "../../assets/img/icon/banner-3.png";
import useAos from "../../useAos";

function Banner() {
  useAos();

  return (
    <div>
      {" "}
      <section id='home_banner'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-6'>
              <div className='main_banner_text_wrapper'>
                <h1>
                  The World Best Team For Pet Care <span>Services</span>
                </h1>
                <p>
                  Reprehenderit non fugiat pariatur ex laboris aute consectetur
                  tempor proident cupidatat et quis reprehenderit consequat.
                </p>
                <a href='#our_pricing_area' className='btn btn_theme btn_md'>
                  Join Our Plan
                </a>

                <div className='banner_main_services'>
                  <div className='banner_main_service_item'>
                    <img src={sub_Banner_one} alt='img' />
                    <h5>Vet Service</h5>
                  </div>
                  <div className='banner_main_service_item'>
                    <img src={sub_Banner_two} alt='img' />
                    <h5>Special care</h5>
                  </div>
                  <div className='banner_main_service_item'>
                    <img src={sub_Banner_three} alt='img' />
                    <h5>Adoption</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 d-lg-block d-none'>
              <div className='main_banner_img_left' data-aos='fade-right'>
                <img
                  src={main_Banner}
                  alt='img'
                  className='animation-img-one'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
