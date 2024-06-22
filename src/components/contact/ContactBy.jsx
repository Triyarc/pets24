import React from 'react'
import contactImg1 from '../../assets/img/icon/contact-1.png'
import contactImg2 from '../../assets/img/icon/contact-2.png'
import contactImg3 from '../../assets/img/icon/contact-3.png'
import contactImg4 from '../../assets/img/icon/contact-4.png'

function ContactBy() {
  return (
    <div><section id="contact_main_card_area" className="section_padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="contact_card_item">
                    <img src={contactImg1} alt="icon" />
                    <h3>Address</h3>
                    <p>107, Broklyn Golden Road Street. New York, USA.</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="contact_card_item">
                    <img src={contactImg2} alt="icon" />
                    <h3>Email</h3>
                    <ul>
                        <li><a href="#!">support@domain.com</a></li>
                        <li><a href="#!">contact@domain.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="contact_card_item">
                    <img src={contactImg3} alt="icon" />
                    <h3>Phone number</h3>
                    <ul>
                        <li><a href="#!">+01 123 456 789</a></li>
                        <li><a href="#!">+01 123 456 789</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="contact_card_item">
                    <img src={contactImg4} alt="icon" />
                    <h3>Open hours</h3>
                    <ul>
                        <li>Mon-Fri: 8am-10pm</li>
                        <li>Saturday: 8am-7pm</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact_main_form_area" className="section_padding_bottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="contact_form_left_side">
                    <div className="contact_form_hrading">
                        <h2>Contact us</h2>
                        <p>
                            If you are going to use a passage of Lorem Ipsum, you need to be sure
                            there isn't anything embarrang hidden in the middle of text.
                        </p>
                    </div>
                    <div className="contact_form_main_area">
                        <form action="#!" id="contact_form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter full name" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter email address" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <select className="form-select form-control">
                                            <option selected>Select service</option>
                                            <option value="1">Pet Service</option>
                                            <option value="2">Pet Service</option>
                                            <option value="3">Pet Service</option>
                                          </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="time" className="form-control" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea rows="5" placeholder="Write your comments" className="form-control" required=""></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="submit_btn">
                                        <button className="btn btn_theme btn_md">Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="contact_map_area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"></iframe>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default ContactBy