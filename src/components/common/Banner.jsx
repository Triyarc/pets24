import React from "react";

function Banner({pageName}) {
  return (
    <div>
      {" "}
      <section id='common_area_banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='common_banner_content'>
                <h2>Shop</h2>
                <ul>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <span>/</span> {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
