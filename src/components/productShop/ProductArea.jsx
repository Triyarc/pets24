import React, { useEffect, useState } from "react";
import "../../style/product.css";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import Skeleton from "react-loading-skeleton";
import CartOffcanvas from "../common/CartOffcanvas";
import ProductCard from "../common/card/ProductCard";
import { useNavigate } from "react-router-dom";

function ProductArea({addToCart}) {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleNavigate = (props) => {
    navigate(`/product-detail/${props}`);
  };

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
                            <ProductCard
                              item={item}
                              handleNavigate={handleNavigate}
                              addToCart={addToCart}
                            />
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
