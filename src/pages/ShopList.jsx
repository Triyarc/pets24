import React from "react";
import "../style/petShopList.css";

function ShopList() {
  const shopItems = [
    {
      id: 1,
      imgSrc: "assets/img/shop/shop-1.png",
      name: "Automatic dog blue leash",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 2,
      imgSrc: "assets/img/shop/shop-2.png",
      name: "Cat toilet bowl",
      badge: "delivery avaliable",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 3,
      imgSrc: "assets/img/shop/shop-3.png",
      name: "Bowl with rubber toy",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 4,
      imgSrc: "assets/img/shop/shop-4.png",
      name: "Automatic dog blue leash",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 5,
      imgSrc: "assets/img/shop/shop-5.png",
      name: "Cat toilet bowl",
      badge: "delivery avaliable",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 6,
      imgSrc: "assets/img/shop/shop-6.png",
      name: "Bowl with rubber toy",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 7,
      imgSrc: "assets/img/shop/shop-7.png",
      name: "Automatic dog blue leash",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 8,
      imgSrc: "assets/img/shop/shop-8.png",
      name: "Cat toilet bowl",
      badge: "delivery avaliable",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 9,
      imgSrc: "assets/img/shop/shop-9.png",
      name: "Bowl with rubber toy",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 10,
      imgSrc: "assets/img/shop/shop-10.png",
      name: "Automatic dog blue leash",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 11,
      imgSrc: "assets/img/shop/shop-11.png",
      name: "Cat toilet bowl",
      badge: "delivery avaliable",
      Location: "selvapuram",
      rating: 729,
    },
    {
      id: 12,
      imgSrc: "assets/img/shop/shop-12.png",
      name: "Bowl with rubber toy",
      Location: "selvapuram",
      rating: 729,
    },
  ];
  return (
    <div>
      <section id='our_shop_main ' className='section_padding pt-lg-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='shop_main_area_wrapper'>
                <div className='shop_heading_sort_area'>
                  <div className='shop_main_area_heading'>
                    <h3>List of near by pet shop {shopItems.length}</h3>
                  </div>
                </div>
                <div className='shop_item_wrapper'>
                  <div className='row'>
                    {shopItems.map((item) => (
                      <div
                        className='col-md-12 col-lg-6 col-sm-12 col-12'
                        key={item.id}
                      >
                        <div className='shop_main_item d-flex'>
                          <div className='shop_item_img pet_shop_img'>
                            <a href='shop-details.html'>
                              <img src={item.imgSrc} alt='img' />
                            </a>
                            {item.badge && (
                              <span
                                className={`shop_badge ${
                                  item.badge === "delivery avaliable" &&
                                  "bg-success text-white "
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className='shop_item_content'>
                            <h3>
                              <a href='shop-details.html'>{item.name}</a>
                            </h3>{" "}
                            <div className='shop_item_rating'>
                              {Array.from({ length: 5 }, (_, index) => (
                                <i key={index} className='fas fa-star'></i>
                              ))}
                              <span>{item.rating}</span>
                            </div>
                            <div className='shop_item_price'>
                              <h6>
                                Pet Food, Adoption, Mating, Pet training, Pet
                                grooming, Walking and sitting
                              </h6>
                            </div>
                            <div className='d-flex justify-content-between'>
                              {" "}
                              <div
                                className='shop_item_price'
                             
                              >
                                <h5>{item.Location}</h5>
                              </div>
                              <div className='shop_item_price'>
                                <h6>Near By 2Km</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ShopList;
