import React, { useEffect, useState } from "react";
import "../../style/product.css";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import Skeleton from "react-loading-skeleton";

function ProductArea() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    apiCall({
      method: "POST",
      apiUrl: `${local_host}/api/v1/product_list?page=${page}`,
    }).then((res) => {
      const newData = res.parameters.data;
      setData((prevData) => [...prevData, ...newData]);
      setPage(page + 1);
      if (newData.length < 10) {
        setHasMore(false);
      }
    });
  };
  useEffect(() => {
    return () => {
      loadMore();
    };
  }, []);

  return (
    <div>
      <section id='our_shop_main' className='section_padding pt-5'>
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
            {/* product */}
            <div className='col-lg-12'>
              <div className='shop_main_area_wrapper'>
                <div className='shop_heading_sort_area'>
                  <div className='shop_main_area_heading'>
                    <h3>Shop food and accressioses</h3>
                  </div>
                </div>
                <div className='shop_item_wrapper'>
                  <div className='row'>
                    {data.length > 0
                      ? data.map((item) => (
                          <div
                            className='col-lg-3 col-md-4 col-sm-12 col-12 '
                            key={item.id}
                          >
                            <div className='shop_main_item '>
                              <div className='shop_item_img'>
                                <a href='shop-details.html'>
                                  <img src={item.image_url} alt='img' />
                                </a>
                                {/* <span
                                  className={`shop_badge ${
                                    item.badge === "In stock"
                                      ? "in_stock"
                                      : "in_sold"
                                  }`}
                                >
                                  Choice
                                </span> */}
                              </div>
                              <div className='shop_item_content'>
                                <h3>
                                  <a href='shop-details.html'>
                                    {item.product_name}
                                  </a>
                                </h3>
                                <p className="product_shop_name">kkr Pet Shop</p>
                                <div class='shop_item_price pt-0 '>
                                  <p>Tk. 500.00</p>
                                  <h5>Tk. 300.00</h5>
                                </div>
                                <button class="btn btn_theme_white btn_sm w-100 my-3">Add Cart</button>
                              </div>
                            </div>
                          </div>
                        ))
                      : Array(16)
                          .fill()
                          .map((item, idx) => (
                            <div
                              key={idx}
                              className='col-lg-3 col-md-6 col-sm-12 col-12'
                            >
                              <li className='card mt-lg-5'>
                                <Skeleton height={180} />
                              </li>
                            </div>
                          ))}
                  </div>
                  {data.length !== 0 && hasMore && (
                    <div className='mt-5 pt-lg-5'>
                      <button
                        className='btn  btn_theme_white btn_md loadMore px-5 py-2'
                        onClick={loadMore}
                      >
                        Load More
                      </button>
                    </div>
                  )}
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

export default ProductArea;
