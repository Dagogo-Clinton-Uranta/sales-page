import React from 'react'
import './header.css'
import CTA from './CTA'

import salesTag from '../../assets/salestag.png'
import HeaderSocials from './HeaderSocials'
import watch from '../../sleep-assests/watch.png'

const Header = () => {
  return (
    <header>
    <div
     className="container header__container">
     <div className="container__position">
      <div   className='lightText title'>SLEEP CONNECTION</div>
      <div className='title'><strong><span className='highlight '>ANTI-SNORE</span> WRISTBAND</strong></div>
      
      <div className='titleJr' >A Good Life Starts from a Healthy Sleeping Pattern, be it for You or Your Family</div>
    </div>
   
    <div  className="price__tag"><img  src={watch} alt="anti-snore band" /></div>
    
    </div>

    <div class="wave1">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
         <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
   </div>

    </header>
  )
}

export default Header