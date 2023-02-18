import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/gray copy-min.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>See what Others are saying...</h2>
     
   <Swiper className="container testimonials__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR1} alt="avatar one" />
     </div>

     
     <h5 className="client__name">Alison B.</h5>
     <small className="client__review">
     Believe me, my husband has tried everything, but nothing seemed to work until he tried the sleep connection wristband. It stopped his snoring completely! It was like a miracle, I feel like I have my husband back!
      </small>

    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR2} alt="avatar one" />

     </div>

     <h5 className="client__name">Thomas R.</h5>
     <small className="client__review">
     My own snoring would wake me up almost every night. I tried medicines and nose strips but nothing worked. I then tried sleep connection after a friend's recommendation. That very night I slept through the entire night! My entire life has improved as a result and my wife is really grateful too!
      </small>

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR3} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Tim C.</h5>
     <small className="client__review">
     The electrical feedback from the Sleep Connection Anti-Snore Wristband does not produce a strong enough signal to wake the snorer up. Instead, it sends a gentle electrical signal to the wearer’s wrist to stop the snoring.
      </small>

    </SwiperSlide>

  {/*3 */}
  <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR4} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Patricia P.</h5>
     <small className="client__review">
    My husband's snoring kept getting worse over the years until it finally became unbearable. The only time I got any sleep was when he slept on the couch. With the Sleep Connection device, all of that changed! His snoring has completely dissapeared!
      </small>

    </SwiperSlide>




  </Swiper> 


    </section>
  )
}

export default Testimonials