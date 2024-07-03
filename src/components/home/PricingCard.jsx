import React from "react";

function PricingCard() {

  return (
    <div id='our_pricing_area'>
      {" "}
      <section
        className='section_padding'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='section_heading'>
                <h2>Our pricing</h2>
                <p>
                  Tempor aute culpa consectetur labore deserunt cupidatat
                  voluptate. Esse adipisicing in deserunt adipisicing duis.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
              <div className='our_pricing_wrapper'>
                <div className='our_pricing_top'>
                  <h3>Kennel plan</h3>
                  {/* <h2>
                    ₹ 399.00<sub>/ 6 month</sub>
                  </h2> */}
                  <h2>
                    Free Registration <br></br>
                    <sub> Till May-2024</sub>
                  </h2>
                  <p>
                    Occaecat ex consectetur eu irure non dolore in anim nostrud
                    est veniam nisi. Tempor mollit velit nisi commodo
                    reprehenderit proident.
                  </p>
                </div>
                <div className='our_pricing_bottom'>
                  <ul>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Unlimited Post
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Cover All Pet
                      Service
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Maintain With
                      DashBoard
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Order Service
                      Available
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Maintain with
                      Employee
                    </li>
                    <li>
                      <i className='fas fa-times-circle'></i> Post Pet
                      accesories
                    </li>
                    <li>
                      <i className='fas fa-times-circle'></i> Post Pet Food
                      Product
                    </li>
                    <li>
                      <i className='fas  fa-times-circle'></i> Order Product
                      Online
                    </li>
                  </ul>
                  <div className='our_pricing_btn'>
                    <a
                      href='pricing.html'
                      className='btn btn_theme_white btn_md'
                    >
                      Get service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
              <div className='our_pricing_wrapper'>
                <div className='our_pricing_top pricing_active'>
                  <h3>Pet Shop plan</h3>
                  {/* <h2>
                    ₹ 599.00<sub>/ 6 month</sub>
                  </h2> */}
                  <h2>
                    Free Registration <br></br>
                    <sub> Till May-2024</sub>
                  </h2>
                  <p>
                    Occaecat ex consectetur eu irure non dolore in anim nostrud
                    est veniam nisi. Tempor mollit velit nisi commodo
                    reprehenderit proident.
                  </p>
                </div>
                <div className='our_pricing_bottom'>
                  <ul>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Unlimited Post
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Cover All Pet
                      Service
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Maintain With
                      DashBoard
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Order Service
                      Available
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Maintain with
                      Employee
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Post Pet
                      accesories
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Post Pet Food
                      Product
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Order Product
                      Online
                    </li>
                  </ul>
                  <div className='our_pricing_btn'>
                    <a href='pricing.html' className='btn btn_theme btn_md'>
                      Get service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='our_pricing_wrapper'>
                <div className='our_pricing_top'>
                  <h3>Pro plan</h3>
                  <h2>
                    $399.00<sub>/Per month</sub>
                  </h2>
                  <p>
                    Occaecat ex consectetur eu irure non dolore in anim nostrud
                    est veniam nisi. Tempor mollit velit nisi commodo
                    reprehenderit proident.
                  </p>
                </div>
                <div className='our_pricing_bottom'>
                  <ul>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Occaecat ex
                      consectetur{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Non dolore in anim
                      nostrud{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Est veniam nisi
                      empor mollit{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Velit nisi commodo
                      proi{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Occaecat ex
                      consectetur{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Non dolore in anim
                      nostrud{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Est veniam nisi
                      empor mollit{" "}
                    </li>
                  </ul>
                  <div className='our_pricing_btn'>
                    <a
                      href='pricing.html'
                      className='btn btn_theme_white btn_md'
                    >
                      Get service
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingCard;
