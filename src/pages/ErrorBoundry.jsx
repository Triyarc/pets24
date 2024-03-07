import React from "react";
import SubscribeArea from "../components/common/SubscribeArea";
import Banner from "../components/common/Banner";

function ErrorBoundry() {
  var pageName = "Error";
  return (
    <div>
      <Banner pageName={pageName} />

      <section id='error_main_area' className='section_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 col-md-12 col-12'>
              <div className='error_inner'>
                <img src='assets/img/common/error.png' alt='img' />
                <h2>The page you requested could not be found</h2>
                <a href='/' className='btn btn_theme btn_md'>
                  Go back home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeArea />
    </div>
  );
}

export default ErrorBoundry;
