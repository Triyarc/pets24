import React, { useEffect, useState } from "react";
import apiCall from "../../apiCall";
import { local_host } from "../../env";
import { useNavigate } from "react-router-dom";
import PetCard from "../common/card/PetCard";
import Autocomplete from 'react-autocomplete';

function MatingPetsArea() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (props) => {
    navigate(`/pet-details/mating/${props}`)
  };

  useEffect(() => {
    return () => {
      apiCall({
        method: "POST",
        apiUrl: `${local_host}/api/v1/list_mating`,
      }).then((res) => {
        setData(res.parameters.data.data);
      });
    };
  }, []);

  const [value, setValue] = useState('');
  const [items] = useState([
    { id: 1, title: 'The Shawshank Redemption' },
    { id: 2, title: 'The Godfather' },
    { id: 3, title: 'The Dark Knight' },
    { id: 4, title: 'Pulp Fiction' },
    { id: 5, title: 'Fight Club' },
    // Add more movie objects as needed
  ]);
  return (
     <div>
      {" "}
      <section id='our_shop_main' className='section_padding pt-5 '>
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
            {/* <div className='col-lg-3 d-none d-md-none d-lg-block'>
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
            </div> */}
            {/* product */}
            <div className="autocomplete-wrapper">
      <Autocomplete
        value={value}
        items={items}
        getItemValue={item => item.title}
        shouldItemRender={(item, value) =>
          item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        renderItem={(item, isHighlighted) => (
          <div
            className={`item ${isHighlighted ? 'selected-item' : ''}`}
            key={item.id}
          >
            {item.title}
          </div>
        )}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setValue(value)}
      />
    </div>
            <div className='col-lg-12'>
              <div className='shop_main_area_wrapper'>
                <div className='shop_heading_sort_area'>
                  <div className='shop_main_area_heading'>
                    <h3>We found {data.length} items</h3>
                  </div>
                </div>
                <div className='shop_item_wrapper'>
                  <div className='row'>
                    {data?.map((item) => (
                       <PetCard item={item} handleClick={handleClick}/>
                    ))}
                  </div>
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

export default MatingPetsArea;
