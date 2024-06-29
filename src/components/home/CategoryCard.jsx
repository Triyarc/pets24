import React from "react";
import img1 from "../../assets/img/common/offer-1.png";
import img2 from "../../assets/img/common/offer-2.png";
import img3 from "../../assets/img/common/offer-3.png";
import img4 from "../../assets/img/common/about.png";
import img5 from "../../assets/img/icon/round-check.png";
import useAos from "../../useAos";

function CategoryCard() {
  useAos();

  return (
    <div>
      <section
        id='banner_bottom_area'
        className='section_padding'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-sm-12'>
              <div className='banner_bottom_item'>
                <img src={img1} alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
              <div className='banner_bottom_item'>
                <img src={img2} alt='img' />
              </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
              <div className='banner_bottom_item'>
                <img src={img3} alt='img' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='about_area'
        className='section_padding_bottom'
        data-aos='zoom-in-left'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='about_area_right_img'>
                <img src={img4} alt='img' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about_area_left_wrapper'>
                <div className='about_left_content_top'>
                  <h2>Best Agency For Your Pet</h2>
                  <p>
                    Nostrud labore deserunt labore culpa cillum labore ex
                    commodo aute elit dolor pariatur. Fugiat duis exercitation
                    ut ea duis dolore. Velit ut veniam aliquip aute dolor aliqua
                    aute consectetur.
                  </p>
                  <div className='about_round_check_wrapper'>
                    <div className='about_round_check_item'>
                      <div className='about_round_check_inner'>
                        <img src={img5} alt='icon' />
                        <p>Certified goomer</p>
                      </div>
                      <div className='about_round_check_inner'>
                        <img src={img5} alt='icon' />
                        <p>Pet care service</p>
                      </div>
                    </div>
                    <div className='about_round_check_item'>
                      <div className='about_round_check_inner'>
                        <img src={img5} alt='icon' />
                        <p>Animal lover</p>
                      </div>
                      <div className='about_round_check_inner'>
                        <img src={img5} alt='icon' />
                        <p>Adoption pets</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='about_left_content_bottom'>
                  <div className='accordion' id='accordionExample'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingOne'>
                        <button
                          className='accordion-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          Magna quis tempor excepteur eu sint laborum sunt duis.
                        </button>
                      </h2>
                      <div
                        id='collapseOne'
                        className='accordion-collapse collapse show'
                        aria-labelledby='headingOne'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          <p>
                            Nostrud labore deserunt labore culpa cillum labore
                            ex commodo aute elit dolor pariatur. Fugiat duis
                            exercitation ut ea duis dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingTwo'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseTwo'
                          aria-expanded='false'
                          aria-controls='collapseTwo'
                        >
                          Magna quis tempor excepteur eu sint laborum sunt duis.
                        </button>
                      </h2>
                      <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          <p>
                            Nostrud labore deserunt labore culpa cillum labore
                            ex commodo aute elit dolor pariatur. Fugiat duis
                            exercitation ut ea duis dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseThree'
                          aria-expanded='false'
                          aria-controls='collapseThree'
                        >
                          Magna quis tempor excepteur eu sint laborum sunt duis.
                        </button>
                      </h2>
                      <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          <p>
                            Nostrud labore deserunt labore culpa cillum labore
                            ex commodo aute elit dolor pariatur. Fugiat duis
                            exercitation ut ea duis dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryCard;
