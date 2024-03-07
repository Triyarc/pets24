import React from "react";

function PricingCard() {
  return (
    <div>
      {" "}
      <section id='our_pricing_area' className='section_padding'>
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
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='our_pricing_wrapper'>
                <div className='our_pricing_top'>
                  <h3>Basic plan</h3>
                  <h2>
                    $199.00<sub>/Per month</sub>
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
                    <li>
                      <i className='fas fa-check-circle'></i> Non dolore in anim
                      nostrud{" "}
                    </li>
                    <li>
                      <i className='fas fa-check-circle'></i> Est veniam nisi
                      empor mollit{" "}
                    </li>
                    <li className='active'>
                      <i className='fas fa-check-circle'></i> Velit nisi commodo
                      proi{" "}
                    </li>
                    <li>
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
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div className='our_pricing_wrapper'>
                <div className='our_pricing_top pricing_active'>
                  <h3>Premium plan</h3>
                  <h2>
                    $299.00<sub>/Per month</sub>
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
                    <li>
                      <i className='fas fa-check-circle'></i> Velit nisi commodo
                      proi{" "}
                    </li>
                    <li>
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
                    <a href='pricing.html' className='btn btn_theme btn_md'>
                      Get service
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingCard;
