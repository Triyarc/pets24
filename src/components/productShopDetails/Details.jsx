import React, { useState } from "react";

function ProductDetails({ data }) {
  const [images] = useState(data?.product_image);
  const [selectedImage, setSelectedImage] = useState(images[0]); // Set default to the first image

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <section id='shop_details_area' className='section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='shop_details_slider_wrapper'>
                <div className='slider slider-for'>
                  {selectedImage && (
                    <img
                      src={selectedImage.image_url}
                      alt='product image'
                      className='img-fluid '
                      style={{
                        height: "250px",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                  )}
                </div>
                <div className='slider slider-nav'>
                  <div style={{ width: "70px", display: "flex" }}>
                    {images.map((image) => (
                      <img
                        key={image.id}
                        src={image.image_url}
                        alt='product imgage'
                        className='img-thumbnail mx-2 '
                        style={{
                          cursor: "pointer",
                          border:
                            selectedImage?.id === image.id
                              ? "2px solid grey"
                              : "none",
                        }}
                        onClick={() => handleImageSelect(image)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='shop_details_wrapper'>
                <div className='shop_details_top_content'>
                  <h2>Automatic dog blue leash</h2>
                  <p style={{ lineHeight: "15px" }}>Reviews of Seller</p>
                  <div className='d-flex align-items-center'>
                    {" "}
                    <div className='reviews_rating d-flex me-2'>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                      <i className='fas fa-star'></i>
                    </div>
                    <p className='p-0'>(729)</p>
                  </div>

                  <h3>$99.99</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam asperiores beatae fuga harum gui laboriosam maiores
                    quasi quidem quo repudiandae voluptate. Lorem ipsum dolor
                    sit amet, denos consectetur adipisicing elit. Aliquam
                    asperiores beatae fuga harum laboriosam maio.
                  </p>
                </div>

                {/* <div className='variable-single-item'>
                  <span>Color</span>
                  <div className='product-variable-color'>
                    <label for='modal-product-color-red'>
                      <input
                        name='modal-product-color'
                        id='modal-product-color-red'
                        className='color-select'
                        type='radio'
                        checked=''
                      />
                      <span className='product-color-red'></span>
                    </label>
                    <label for='modal-product-color-green'>
                      <input
                        name='modal-product-color'
                        id='modal-product-color-green'
                        className='color-select'
                        type='radio'
                      />
                      <span className='product-color-green'></span>
                    </label>
                    <label for='modal-product-color-blue'>
                      <input
                        name='modal-product-color'
                        id='modal-product-color-blue'
                        className='color-select'
                        type='radio'
                      />
                      <span className='product-color-blue'></span>
                    </label>
                    <label for='modal-product-color-tomato'>
                      <input
                        name='modal-product-color'
                        id='modal-product-color-tomato'
                        className='color-select'
                        type='radio'
                      />
                      <span className='product-color-tomato'></span>
                    </label>
                    <label for='modal-product-color-light-blue'>
                      <input
                        name='modal-product-color'
                        id='modal-product-color-light-blue'
                        className='color-select'
                        type='radio'
                      />
                      <span className='product-color-light-blue'></span>
                    </label>
                  </div>
                </div> */}
                {/* <div className='product_count_wrapper'>
                  <form action='#!' className='product_count_form_two'>
                    <div className='product_count_one'>
                      <div className='plus-minus-input'>
                        <div className='input-group-button'>
                          <button
                            type='button'
                            className='button'
                            data-quantity='minus'
                            data-field='quantity'
                          >
                            <i className='fa fa-minus' aria-hidden='true'></i>
                          </button>
                        </div>
                        <input
                          className='form-control'
                          type='number'
                          name='quantity'
                          value='0'
                        />
                        <div className='input-group-button'>
                          <button
                            type='button'
                            className='button'
                            data-quantity='plus'
                            data-field='quantity'
                          >
                            <i className='fa fa-plus' aria-hidden='true'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
                <div className='shop_details_cart_submit_wrapper'>
                  <div className='product_cart_btn'>
                    <a href='cart.html' className='btn btn_theme btn_md'>
                      Add to cart
                    </a>
                  </div>
                  {/* <div className='product_wishlist_btn'>
                    <a href='#!'>
                      <i className='far fa-heart'></i> Add to wishlist
                    </a>
                  </div> */}
                </div>
                {/* <div className='product_tags_area'>
                  <p>
                    <span>Tags:</span> Fresh, Top, Best, Recent
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className='row d-none'>
            <div className='col-lg-12'>
              <div className='shop_details_tabs_wrapper'>
                <div className='shop_details_tab_nav'>
                  <nav>
                    <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                      <button
                        className='nav-link active'
                        id='nav-home-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#nav-home'
                        type='button'
                        role='tab'
                        aria-controls='nav-home'
                        aria-selected='true'
                      >
                        Descriptions
                      </button>
                      <button
                        className='nav-link'
                        id='nav-profile-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#nav-profile'
                        type='button'
                        role='tab'
                        aria-controls='nav-profile'
                        aria-selected='false'
                      >
                        Additional info
                      </button>
                      <button
                        className='nav-link'
                        id='nav-contact-tab'
                        data-bs-toggle='tab'
                        data-bs-target='#nav-contact'
                        type='button'
                        role='tab'
                        aria-controls='nav-contact'
                        aria-selected='false'
                      >
                        Reviews
                      </button>
                    </div>
                  </nav>
                </div>
                <div className='tab-content' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-home'
                    role='tabpanel'
                    aria-labelledby='nav-home-tab'
                  >
                    <div className='descriptions_shop_details_wrapper'>
                      <div className='shop_details_descriptions_item'>
                        <h5>General info:</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Aliquam asperiores beatae fuga harum laboriosam.
                        </p>
                      </div>
                      <div className='shop_details_descriptions_item'>
                        <h5>Packaging and delivery:</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>
                      <div className='shop_details_descriptions_item'>
                        <h5>Return policy:</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Aliquam asperiores beatae fuga harum laboriosam
                          maiores quasi quidem quo repudiandae voluptate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-profile'
                    role='tabpanel'
                    aria-labelledby='nav-profile-tab'
                  >
                    <div className='additional_info_tabel_wrapper'>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <td>Weight</td>
                            <td>7.25kg</td>
                          </tr>
                          <tr>
                            <td>Dimensions</td>
                            <td>90 x 60 x 90 cm</td>
                          </tr>
                          <tr>
                            <td>Screen Size</td>
                            <td>13 Inches</td>
                          </tr>
                          <tr>
                            <td>color</td>
                            <td>Black with Red, White with Gold</td>
                          </tr>
                          <tr>
                            <td>Guarantee</td>
                            <td>5 years</td>
                          </tr>
                          <tr>
                            <td>Brand</td>
                            <td>Apple</td>
                          </tr>
                          <tr>
                            <td>Product Dimensions</td>
                            <td>21.9 x 31.4 x 1.8 cm</td>
                          </tr>
                          <tr>
                            <td>Item model number</td>
                            <td>MF841HN/A</td>
                          </tr>
                          <tr>
                            <td>Processor Brand</td>
                            <td>Intel</td>
                          </tr>
                          <tr>
                            <td>Processor Type</td>
                            <td>Core i5</td>
                          </tr>
                          <tr>
                            <td>Graphics Coprocessor</td>
                            <td>Intel Integrated Graphics</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-contact'
                    role='tabpanel'
                    aria-labelledby='nav-contact-tab'
                  >
                    <div className='product_review_tabs'>
                      <h3>2 Review</h3>

                      <div className='product_review_details_item'>
                        <div className='product_review_item_img'>
                          <img src='assets/img/common/review-1.png' alt='img' />
                        </div>
                        <div className='product_review_item_content'>
                          <h4>James martin</h4>
                          <p>
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are many variations of
                            passages of Lorem Ipsum jeloi available but the
                            majority. idem quo repudiandae voluptate. Lorem
                            ipsum dolor sit amet, denos consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <div className='product_review_details_item'>
                        <div className='product_review_item_img'>
                          <img src='assets/img/common/review-2.png' alt='img' />
                        </div>
                        <div className='product_review_item_content'>
                          <h4>Cavin thomas</h4>
                          <p>
                            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim
                            exerci phaedrum. There are many variations of
                            passages of Lorem Ipsum jeloi available but the
                            majority. idem quo repudiandae voluptate. Lorem
                            ipsum dolor sit amet, denos consectetur adipisicing
                            elit.
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
      <div className='container'>
        {" "}
        <div className='row justify-content-start d-flex'>
          <div className='sidebar_boxed_wrapper  col-lg-8'>
            <div className='sidebar_common_heading'>
              <h3>Seller Details</h3>
            </div>
            <div className='sidebar_adoption_info_content'>
              <img src='assets/img/adoption/adoptin-info.png' alt='img' />
              <div className='sidebar_adoption_info_content_inner'>
                <h3>Dino adoption ltd.</h3>{" "}
                <div className='d-md-flex justify-content-between'>
                  <p>
                    <i className='fas fa-map-marker-alt' /> Etiam rhoncus leo a
                    dolor plac
                  </p>{" "}
                  <div
                    alt='handle info'
                    className='btn btn_theme_white btn_sm'
                    style={{ height: "39px  " }}
                  >
                    Contact info
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
