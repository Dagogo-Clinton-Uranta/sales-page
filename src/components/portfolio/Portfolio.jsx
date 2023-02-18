import React from 'react'
import './portfolio.css'
import leftBg from '../../sleep-assests/left-bg.png'
import rightBg from '../../sleep-assests/right-bg.png'


const Portfolio = () => {
  return (
<section id='portfolio'>
 

<div className="portfolio__container">

   {/*<div className="portfolio__item">
    <img src={leftBg} className="portfolio-item"/>
    </div>*/}
  

  <div className="portfolio__item">
     <h2>Change your life <span>NOW</span> and eliminate snoring!</h2>
    <p>works on men, women and even kids! 100% safe<br/>
      and very effective! it's a miracle device!
    </p>

    <div>
       <a href="#" className="btn btn-primary-variant">Shop Now</a>
       </div>

    </div>



    {/*<div className="portfolio__item">
    <img src={rightBg} className="portfolio-item"/>
  </div>*/}
   
   
    


</div>


</section>
  )
}

export default Portfolio