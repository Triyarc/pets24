import React from 'react'
import consultantImg1 from '../../assets/img/icon/consultation-1.png'
import consultantImg2 from '../../assets/img/icon/consultation-2.png'
import consultantImg3 from '../../assets/img/icon/consultation-3.png'
import consultantImg4 from '../../assets/img/icon/consultation-4.png'
import arrowUpImg from '../../assets/img/element/arrow-up.png'
import arrowDownImg from '../../assets/img/element/arrow-down.png'

function ConsultantArea() {
  return (
    <div> <section id='our_consultation_area' class='section_padding bg_section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 offset-lg-3'>
          <div className='section_heading'>
            <h2>Consultation</h2>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat
              voluptate. Esse adipisicing in deserunt adipisicing duis.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='our_consultation_item'>
            <img src={consultantImg1} alt='img' />
            <h3>Get in touch</h3>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat
              voluptate. Esse adipisicing in deserunt.
            </p>
            <img
              src={arrowDownImg}
              alt='img'
              className='arrow_down_consult'
            />
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='our_consultation_item'>
            <img src={consultantImg2} alt='img' />
            <h3>Make a schedule</h3>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat
              voluptate. Esse adipisicing in deserunt.
            </p>
            <img
              src={arrowUpImg}
              alt='img'
              className='arrow_up_consult'
            />
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='our_consultation_item'>
            <img src={consultantImg3} alt='img' />
            <h3>Pet admission</h3>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat
              voluptate. Esse adipisicing in deserunt.
            </p>
            <img
              src={arrowDownImg}
              alt='img'
              className='arrow_down_consult'
            />
          </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
          <div className='our_consultation_item'>
            <img src={consultantImg4} alt='img' />
            <h3>Cure your pet</h3>
            <p>
              Tempor aute culpa consectetur labore deserunt cupidatat
              voluptate. Esse adipisicing in deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default ConsultantArea