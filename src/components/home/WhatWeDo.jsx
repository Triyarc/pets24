import React, { useEffect } from "react";
import img1 from "../../assets/img/icon/sm-leg.png";
import img2 from "../../assets/img/common/do-icon.png";
import img3 from "../../assets/img/common/do-middle-img.jpg";
import useAos from "../../useAos";

function WhatWeDo() {
  useAos();

  return (
    <section
      id='what_we_do_area'
      className=''
      // data-aos='zoom-out'
      // data-aos-offset='200'
      // data-aos-easing='ease-in-sine'
      // data-aos-duration='600'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='section_heading_two text-center'>
              <h4>
                What We Do
                <span>
                  {" "}
                  <img src={img1} alt='icon' />
                </span>
              </h4>
              <h2>Our commitment</h2>
            </div>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='our_commit_wrapper'>
              <div className='our_commit_list_area'>
                <div className='commit_img'>
                  <img src={img2} alt='icon' />
                </div>
                <div className='commit_content'>
                  <h3>
                    <a href='#!'>Safe Enviroment</a>
                  </h3>
                  <p>
                    Nostrud labore deserunt labore dolor sit amet consectetur
                    adipisicing elit. Omnis, quia.
                  </p>
                </div>
              </div>
            </div>
            <div className='our_commit_wrapper'>
              <div className='our_commit_list_area'>
                <div className='commit_img'>
                  <img src={img2} alt='icon' />
                </div>
                <div className='commit_content'>
                  <h3>
                    <a href='#!'>Vaccinated pets</a>
                  </h3>
                  <p>
                    Nostrud labore deserunt labore dolor sit amet consectetur
                    adipisicing elit. Omnis, quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='commit_middle_img'>
              <img className='animation-img-one' src={img3} alt='img' />
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='our_commit_wrapper'>
              <div className='our_commit_list_area'>
                <div className='commit_img'>
                  <img src={img2} alt='icon' />
                </div>
                <div className='commit_content'>
                  <h3>
                    <a href='#!'>Healthy animals</a>
                  </h3>
                  <p>
                    Nostrud labore deserunt labore dolor sit amet consectetur
                    adipisicing elit. Omnis, quia.
                  </p>
                </div>
              </div>
            </div>
            <div className='our_commit_wrapper'>
              <div className='our_commit_list_area'>
                <div className='commit_img'>
                  <img src={img2} alt='icon' />
                </div>
                <div className='commit_content'>
                  <h3>
                    <a href='#!'>A New Home</a>
                  </h3>
                  <p>
                    Nostrud labore deserunt labore dolor sit amet consectetur
                    adipisicing elit. Omnis, quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
