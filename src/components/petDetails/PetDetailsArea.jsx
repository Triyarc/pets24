import React from "react";
import palm_icon from "../../assets/img/icon/sm-leg.png";
import { useNavigate } from "react-router-dom";

function PetDetailsArea({
  data,
  setSelectedImage,
  selectedImage,
  id,
  desiredPart,
}) {
  const navigate = useNavigate();
  const isAuthenticated = document.cookie.includes("loggedIn=true");

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleInfoEvent = () => {
    if (!isAuthenticated) {
      navigate("/login");
      document.cookie = `redirection_path=/pet-details/${desiredPart}/${id};path=/`;
    }
  };

  return (
    <>
      <section
        id='adoption_details_wrapper'
        className='section_padding slider_side_btn pt-md-5 pt-4'
      >
        <div className='container'>
          <div className='row'>
            <div className='heading_border_bottom'>
              <h2>
                {data?.heat_duration
                  ? `Mate with ${data.name}`
                  : `Adope ${data.name}`}
              </h2>
            </div>
            <div className='col-lg-9'>
              <div className='adoption_details_content'>
                <div className='adoption_details_item'>
                  <div className='row gx-0'>
                    <div className='col-lg-5'>
                      <div className='adoption_details_big_img'>
                        {/* <img src={data.image_url} alt='img' /> */}
                        <div className='shop_details_slider_wrapper'>
                          <div className='slider slider-for'>
                            {selectedImage && (
                              <img
                                src={selectedImage}
                                alt='Pet'
                                className='img-fluid '
                                style={{
                                  height: "380px",
                                  borderRadius: "5px",
                                }}
                              />
                            )}
                          </div>
                          <div className='slider slider-nav'>
                            <div style={{ width: "70px", display: "flex" }}>
                              {data?.petPhoto?.map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt='pet'
                                  className='img-thumbnail mx-2 '
                                  style={{
                                    cursor: "pointer",
                                    border:
                                      selectedImage[idx] === image[idx]
                                        ? "2px solid grey"
                                        : "none",
                                  }}
                                  onClick={() => handleImageSelect(image)}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-7'>
                      <div className='adoption_details_main_content'>
                        <div className='adoption_pet_infos'>
                          <h3>
                            {data.name} ({data.pets_name})
                          </h3>
                          <ul>
                            <li>
                              Breed: <span>{data.breeds_name}</span>
                            </li>
                            <li>
                              Gender: <span>{data.gender}</span>
                            </li>
                            <li>
                              Age: <span>{data.dob}</span>
                            </li>
                            <li>
                              Color: <span>{data.color}</span>
                            </li>
                            {data?.heat_duration && <li>
                              Heat Duration: <span>{data.heat_duration}</span>
                            </li>}
                            <li>
                              Height (Ft): <span>{data.height}</span>
                            </li>
                            <li>
                              Weight (kg): <span>{data.weight}</span>
                            </li>
                            <li className='d-flex justify-content-between align-items-center pt-2'>
                              <div>
                                Certificate: <span>{data.is_certificate}</span>
                              </div>
                              <div>
                                <button className='btn text-primary'>
                                  view
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='adoption_infos_para'>
                          <ul>
                            <li>
                              <img src={palm_icon} alt='icon' />
                              Behave Friendly
                            </li>
                            <li>
                              <img src={palm_icon} alt='icon' />
                              Vaccinated
                            </li>
                            {/* <li>
                              <img src={palm_icon} alt='icon' />
                              Neat &amp; clean
                            </li>
                            <li>
                              <img src={palm_icon} alt='icon' />
                              Friendly with Kids
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='adoption_details_item'>
                  <div className='heading_border_bottom'>
                    <h2>About {data.name}</h2>
                  </div>
                  <div className='adoption_pet_aabout'>
                    <p className='p-0'>{data.description}</p>
                  </div>
                </div>

                <div className='adoption_details_item'>
                  <div className='adoption_submit_btn'>
                    <div
                      onClick={handleInfoEvent}
                      alt="handle info"
                      className='btn btn_theme btn_md me-4'
                    >
                      Adopt me
                    </div>
                    <a href='/adoption' className='btn btn_theme_white btn_md'>
                      Go back to adopt gallery
                    </a>
                  </div>
                </div>
                <div className='sidebar_boxed_wrapper'>
                  <div className='sidebar_common_heading'>
                    <h3>Adoption info</h3>
                  </div>
                  <div className='sidebar_adoption_info_content'>
                    <img src='assets/img/adoption/adoptin-info.png' alt='img' />
                    <div className='sidebar_adoption_info_content_inner'>
                      <h3>Dino adoption ltd.</h3>{" "}
                      <div className='d-md-flex justify-content-between'>
                        <p>
                          <i className='fas fa-map-marker-alt' /> Etiam rhoncus
                          leo a dolor plac
                        </p>{" "}
                        <div
                          onClick={handleInfoEvent}
                          alt="handle info"
                          className='btn btn_theme_white btn_sm'
                          style={{ height: "39px  " }}
                        >
                          Contact info
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='sidebar_boxed_wrapper'>
                <div className='sidebar_common_heading'>
                  <h3>Adopt others</h3>
                </div>
                <div className='adopt_other_wrapper'>
                  <div className='adopt_other_item'>
                    <div className='adopt_other_img'>
                      <img
                        src='assets/img/adoption/adoption-sm-1.png'
                        alt='img'
                      />
                    </div>
                    <div className='adopt_other_content'>
                      <h3>Olivia</h3>
                      <p>
                        Gender: <span>Male</span>
                      </p>
                    </div>
                  </div>
                  <div className='adopt_other_item'>
                    <div className='adopt_other_img'>
                      <img
                        src='assets/img/adoption/adoption-sm-2.png'
                        alt='img'
                      />
                    </div>
                    <div className='adopt_other_content'>
                      <h3>Donik</h3>
                      <p>
                        Gender: <span>Female</span>
                      </p>
                    </div>
                  </div>
                  <div className='adopt_other_item'>
                    <div className='adopt_other_img'>
                      <img
                        src='assets/img/adoption/adoption-sm-3.png'
                        alt='img'
                      />
                    </div>
                    <div className='adopt_other_content'>
                      <h3>Parsia</h3>
                      <p>
                        Gender: <span>Male</span>
                      </p>
                    </div>
                  </div>
                  <div className='adopt_other_item'>
                    <div className='adopt_other_img'>
                      <img
                        src='assets/img/adoption/adoption-sm-4.png'
                        alt='img'
                      />
                    </div>
                    <div className='adopt_other_content'>
                      <h3>Diki</h3>
                      <p>
                        Gender: <span>Male</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='adoption_details_item'>
              <div className='heading_border_bottom'>
                <h2>Suggestion</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PetDetailsArea;
