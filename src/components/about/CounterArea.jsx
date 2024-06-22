import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import countImg1 from '../../assets/img/icon/counter-1.png'
import countImg2 from '../../assets/img/icon/counter-2.png'
import countImg3 from '../../assets/img/icon/counter-3.png'
import countImg4 from '../../assets/img/icon/counter-4.png'

function CounterArea() {
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(countRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(countRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="mt-lg-5">
      <section id='our_counter_area' className='section_padding_bottom'>
        <div className='container'>
          <div className='counter_area_wrapper'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='our_counter_item'>
                  <img src={countImg1} alt='img' />
                  <h2 className='counter' ref={countRef}>
                    {isVisible && (
                      <CountUp start={300} end={348} duration={2} />
                    )}
                  </h2>
                  <p>Pet groomers</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='our_counter_item'>
                  <img src={countImg2} alt='img' />
                  <h2 className='counter' ref={countRef}>
                    {isVisible && (
                      <CountUp start={300} end={348} duration={2} />
                    )}
                  </h2>
                  <p>Adopted pet</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='our_counter_item'>
                  <img src={countImg3} alt='img' />
                  <h2 className='counter' ref={countRef}>
                    {isVisible && (
                      <CountUp start={300} end={348} duration={2} />
                    )}
                  </h2>
                  <p>Awards won</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
                <div className='our_counter_item'>
                  <img src={countImg4} alt='img' />
                  <h2 className='counter' ref={countRef}>
                    {isVisible && (
                      <CountUp start={300} end={348} duration={2} />
                    )}
                  </h2>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CounterArea;
