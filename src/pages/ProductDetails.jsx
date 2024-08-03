import React, { useEffect, useState } from "react";
import RelatedProduct from "../components/productShopDetails/RelatedProduct";
import Details from "../components/productShopDetails/Details";
import SubscribeArea from "../components/common/SubscribeArea";
import { local_host } from "../env";
import apiCall from "../apiCall";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ProductDetails( {addToCart}) {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [dataReturn, setDataReturn] = useState(false);
  const [relatedDataReturn, setRelatedDataReturn] = useState(false);
  const [related, setRelated] = useState();

  useEffect(() => {
    return async () => {
      try {
        const response = await apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/product_detail`,
          payload: { product_slug: slug },
        });
        setData(response?.parameters);
        setDataReturn(true);
      } catch (err) {
        if (err.status) {
          toast.error("404 warning");
        }
      }
    };
  }, []);

  useEffect(() => {
    return async () => {
      try{
        const response = await apiCall({
          method: "POST",
          apiUrl: `${local_host}/api/v1/recommended_product_list`,
          payload: { product_slug: slug },
        });
        setRelated(response?.parameters);
        setRelatedDataReturn(true);
      }catch (err) {
        if (err.status) {
          toast.error("404 warning");
        }
      }
    }
  },[])


  return (
    <div>
      {dataReturn ? (
        <Details data={data} addToCart={addToCart}/>
      ) : (
        <h2
          style={{ height: "60vh" }}
          className=' d-flex text-center align-items-center justify-content-center'
        >
          Loading...
        </h2>
      )}
      {relatedDataReturn ? (
        <RelatedProduct related={related} />
      ) : (
        <h2
          style={{ height: "20vh" }}
          className=' d-flex text-center align-items-center justify-content-center'
        >
          Loading...
        </h2>
      )}

      <SubscribeArea />
    </div>
  );
}

export default ProductDetails;
