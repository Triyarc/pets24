import React from "react";

function SubscribeArea() {
  return (
    <div>
      <section id='subscribe_area' className="mt-lg-5 pt-lg-5">
        <div className='container'>
          <div className='subscribe_wrapper'>
            <div className='row align-items-center'>
              <div className='col-lg-4'>
                <div className='subscribe_text'>
                  <p>Newsletter</p>
                  <h3 className='heading_main_subscribe'>
                    To get weekly & monthly news,
                    <span>Subscribe</span> to our newsletter.
                  </h3>
                </div>
              </div>
              <div className='col-lg-6 offset-lg-2'>
                <div className='cta_right_side'>
                  <form action='#!' id='subscribe_form'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Your mail address'
                        required
                      />
                      <button className='btn btn_theme btn_md' type='submit'>
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubscribeArea;
