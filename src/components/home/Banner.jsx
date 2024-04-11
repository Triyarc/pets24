import React, { useEffect, useState } from "react";

function Banner() {

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
                <a href='about.html' className='btn btn_theme btn_md'>
                  Learn more
                </a>

                <div className='banner_main_services'>
                  <div className='banner_main_service_item'>
                    <img src='assets/img/icon/banner-1.png' alt='img' />
                    <h5>Vet Service</h5>
                  </div>
                  <div className='banner_main_service_item'>
                    <img src='assets/img/icon/banner-2.png' alt='img' />
                    <h5>Special care</h5>
                  </div>
                  <div className='banner_main_service_item'>
                    <img src='assets/img/icon/banner-3.png' alt='img' />
                    <h5>Adoption</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 d-lg-block d-none'>
              <div className='main_banner_img_left'>
                <img
                  src='assets/img/common/banner_left.png'
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
