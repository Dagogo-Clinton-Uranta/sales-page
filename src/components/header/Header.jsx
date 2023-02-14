import React from 'react'
import './header.css'
import CTA from './CTA'

import salesTag from '../../assets/salestag.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h1  style={{marginBottom:"-15px"}} className='lightText'>SLEEP CONNECTION</h1>
      <h1  ><strong><span className='highlight'>ANTI-SNORE</span> WRISTBAND</strong></h1>
      
      <h5 style={{marginTop:"15px"}} >A Good Life Starts from a Healthy Sleeping Pattern, be it for You or Your Family</h5>
     
     {/*<div className="me">
      <img src={ME} alt="Amber profile photo" />
     </div>*/}
   
    {/* I am removing pricetag for now so i can center everything
    <div  className="price__tag"><img style={{height:"200px"}} src={salesTag} alt="50% off" /></div>*/}
    
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