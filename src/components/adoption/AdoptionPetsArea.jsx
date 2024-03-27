import React from "react";

function AdoptionPetsArea() {
  const shopItems = [
    {
      id: 1,
      imgSrc: "assets/img/shop/shop-1.png",
      name: "Automatic dog blue leash",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 2,
      imgSrc: "assets/img/shop/shop-2.png",
      name: "Cat toilet bowl",
      badge: "Sold",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 3,
      imgSrc: "assets/img/shop/shop-3.png",
      name: "Bowl with rubber toy",
      badge: "20% off",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 4,
      imgSrc: "assets/img/shop/shop-4.png",
      name: "Automatic dog blue leash",
      badge: "In stock",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 5,
      imgSrc: "assets/img/shop/shop-5.png",
      name: "Cat toilet bowl",
      badge: "Sold",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 6,
      imgSrc: "assets/img/shop/shop-6.png",
      name: "Bowl with rubber toy",
      badge: "20% off",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 7,
      imgSrc: "assets/img/shop/shop-7.png",
      name: "Automatic dog blue leash",
      badge: "In stock",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 8,
      imgSrc: "assets/img/shop/shop-8.png",
      name: "Cat toilet bowl",
      badge: "Sold",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 9,
      imgSrc: "assets/img/shop/shop-9.png",
      name: "Bowl with rubber toy",
      badge: "20% off",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 10,
      imgSrc: "assets/img/shop/shop-10.png",
      name: "Automatic dog blue leash",
      badge: "In stock",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 11,
      imgSrc: "assets/img/shop/shop-11.png",
      name: "Cat toilet bowl",
      badge: "Sold",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
    {
      id: 12,
      imgSrc: "assets/img/shop/shop-12.png",
      name: "Bowl with rubber toy",
      badge: "20% off",
      originalPrice: "Tk. 500.00/KG",
      discountedPrice: "Tk. 300.00/KG",
      rating: 729,
    },
  ];
  return (
    <div>
      {" "}
      <section id='our_shop_main' className='section_padding'>
        <div className='container'>
          <button
            className='btn btn-primary filter-btn d-lg-none pa_filter_btn'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#filterOffcanvas'
            aria-controls='filterOffcanvas'
          >
            Filter
          </button>
          <div className='row'>
            {/* filter lg */}
            <div className='col-lg-3 d-none d-md-none d-lg-block'>
              <div className='sidebar_boxed_wrapper'>
                <div className='sidebar_common_heading'>
                  <h3>Filter by price</h3>
                </div>
                <div className='filter-price'>
                  <div id='price-slider'></div>
                </div>
              </div>
              <div className='sidebar_boxed_wrapper'>
                <div className='sidebar_common_heading'>
                  <h3>Category</h3>
                </div>
                <div className='shop_sidebar_category'>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault'
                      >
                        <span>Pet basket</span>
                        <span className='shop_cate_conter'>21</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault1'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault1'
                      >
                        <span>Chair</span>
                        <span className='shop_cate_conter'>14</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault2'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault2'
                      >
                        <span>Pet food</span>
                        <span className='shop_cate_conter'>84</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault3'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault3'
                      >
                        <span>Pet medicine</span>
                        <span className='shop_cate_conter'>08</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault4'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault4'
                      >
                        <span>Belt</span>
                        <span className='shop_cate_conter'>06</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault5'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault5'
                      >
                        <span>Accessories</span>
                        <span className='shop_cate_conter'>15</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sidebar_boxed_wrapper'>
                <div className='sidebar_common_heading'>
                  <h3>Filter by color</h3>
                </div>
                <div className='shop_sidebar_category'>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault-f1'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault-f1'
                      >
                        <span>Red</span>
                        <span className='shop_cate_conter'>20</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault1-f2'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault1-f2'
                      >
                        <span>Green</span>
                        <span className='shop_cate_conter'>34</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault2-f3'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault2-f3'
                      >
                        <span>Yellow</span>
                        <span className='shop_cate_conter'>14</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault3-f4'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault3-f4'
                      >
                        <span>Magenta</span>
                        <span className='shop_cate_conter'>10</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault4-f5'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault4-f5'
                      >
                        <span>Brown</span>
                        <span className='shop_cate_conter'>19</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault5-f6'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault5-f6'
                      >
                        <span>Violet</span>
                        <span className='shop_cate_conter'>21</span>
                      </label>
                    </div>
                  </div>
                  <div className='sidebar_form_checkboxed'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault5-f7'
                      />
                      <label
                        className='form-check-label'
                        for='flexCheckDefault5-f7'
                      >
                        <span>White</span>
                        <span className='shop_cate_conter'>23</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='sidebar_boxed_wrapper'>
                <div className='sidebar_add_img'>
                  <a href='#!'>
                    <img src='assets/img/shop/ad_banner.png' alt='img' />
                  </a>
                </div>
              </div>
            </div>
            {/* product */}
            <div className='col-lg-9'>
              <div className='shop_main_area_wrapper'>
                <div className='shop_heading_sort_area'>
                  <div className='shop_main_area_heading'>
                    <h3>We found {shopItems.length} items</h3>
                  </div>
                </div>
                <div className='shop_item_wrapper'>
                  <div className='row'>
                    {shopItems.map((item) => (
                      <div
                        className='col-lg-4 col-md-6 col-sm-12 col-12'
                        key={item.id}
                      >
                        <div className='shop_main_item'>
                          <div className='shop_item_img'>
                            <a href='shop-details.html'>
                              <img src={item.imgSrc} alt='img' />
                            </a>
                            {item.badge && (
                              <span
                                className={`shop_badge ${
                                  item.badge === "In stock"
                                    ? "in_stock"
                                    : "in_sold"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className='shop_item_content'>
                            <h3>
                              <a href='shop-details.html'>{item.name}</a>
                            </h3>
                            <div className='shop_item_price'>
                              <p>{item.originalPrice}</p>
                              <h5>{item.discountedPrice}</h5>
                            </div>
                            <div className='shop_item_rating'>
                              {Array.from({ length: 5 }, (_, index) => (
                                <i key={index} className='fas fa-star'></i>
                              ))}
                              <span>{item.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* filter sm md offcanvas*/}
            <div className='col-lg-3 '>
              <div
                className='offcanvas offcanvas-start'
                tabindex='-1'
                id='filterOffcanvas'
                aria-labelledby='filterOffcanvasLabel'
              >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title' id='filterOffcanvasLabel'>
                    Filter
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='offcanvas-body'>
                  <div className='sidebar_boxed_wrapper'>
                    <div className='sidebar_common_heading'>
                      <h3>Filter by price</h3>
                    </div>
                    <div className='filter-price'>
                      <div id='price-slider'></div>
                    </div>
                  </div>
                  <div className='sidebar_boxed_wrapper'>
                    <div className='sidebar_common_heading'>
                      <h3>Category</h3>
                    </div>
                    <div className='shop_sidebar_category'>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault'
                          >
                            <span>Pet basket</span>
                            <span className='shop_cate_conter'>21</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault1'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault1'
                          >
                            <span>Chair</span>
                            <span className='shop_cate_conter'>14</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault2'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault2'
                          >
                            <span>Pet food</span>
                            <span className='shop_cate_conter'>84</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault3'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault3'
                          >
                            <span>Pet medicine</span>
                            <span className='shop_cate_conter'>08</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault4'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault4'
                          >
                            <span>Belt</span>
                            <span className='shop_cate_conter'>06</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault5'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault5'
                          >
                            <span>Accessories</span>
                            <span className='shop_cate_conter'>15</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sidebar_boxed_wrapper'>
                    <div className='sidebar_common_heading'>
                      <h3>Filter by color</h3>
                    </div>
                    <div className='shop_sidebar_category'>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault-f1'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault-f1'
                          >
                            <span>Red</span>
                            <span className='shop_cate_conter'>20</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault1-f2'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault1-f2'
                          >
                            <span>Green</span>
                            <span className='shop_cate_conter'>34</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault2-f3'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault2-f3'
                          >
                            <span>Yellow</span>
                            <span className='shop_cate_conter'>14</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault3-f4'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault3-f4'
                          >
                            <span>Magenta</span>
                            <span className='shop_cate_conter'>10</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault4-f5'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault4-f5'
                          >
                            <span>Brown</span>
                            <span className='shop_cate_conter'>19</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault5-f6'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault5-f6'
                          >
                            <span>Violet</span>
                            <span className='shop_cate_conter'>21</span>
                          </label>
                        </div>
                      </div>
                      <div className='sidebar_form_checkboxed'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault5-f7'
                          />
                          <label
                            className='form-check-label'
                            for='flexCheckDefault5-f7'
                          >
                            <span>White</span>
                            <span className='shop_cate_conter'>23</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='sidebar_boxed_wrapper'>
                    <div className='sidebar_add_img'>
                      <a href='#!'>
                        <img src='assets/img/shop/ad_banner.png' alt='img' />
                      </a>
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

export default AdoptionPetsArea;
