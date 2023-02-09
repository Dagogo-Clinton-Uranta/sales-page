import React from 'react'
import './portfolio.css'
import leftBg from '../../sleep-assests/left-bg.png'
import rightBg from '../../sleep-assests/right-bg.png'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const Portfolio = () => {
  return (
<section id='portfolio'>
 

<div className="portfolio__container">

<div className="portfolio__item">
    <img src={leftBg} className="portfolio-item"/>
    </div>
  

  <div className="portfolio__item">
     <h2>Change your life <span>NOW</span> and eliminate snoring!</h2>
    <p>works on men, women and even kids! 100% safe<br/>
      and very effective! it's a miracle device!
    </p>

    <div>
       <a href="#" className="btn btn-primary">Shop Now</a>
       </div>

    </div>



    <div className="portfolio__item">
    <img src={rightBg} className="portfolio-item"/>
    </div>
   
   
    


</div>


</section>
  )
}

export default Portfolio