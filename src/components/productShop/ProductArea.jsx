import React, { useEffect, useState } from "react";
import "../../style/product.css";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import Skeleton from "react-loading-skeleton";
import CartOffcanvas from "../common/CartOffcanvas";

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
          <CartOffcanvas />
          <div className='row'>
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
                                <p className='product_shop_name'>
                                  kkr Pet Shop
                                </p>
                                <div class='shop_item_price pt-0 '>
                                  <p>Tk. 500.00</p>
                                  <h5>Tk. 300.00</h5>
                                </div>
                                <button class='btn btn_theme_white btn_sm w-100 my-3'>
                                  Add Cart
                                </button>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductArea;
