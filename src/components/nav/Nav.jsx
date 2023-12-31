import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
import testLogo from "../../assets/sleep-logo.png"
import HamburgerMenu from "./HamburgerMenu"
import {isMobile} from 'react-device-detect';

const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav className='container navContainer'>
      
 
      <img src={testLogo} alt="company logo"/>

<div className="navLinkContainer desktopDisp">
<a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio'? 'active':''}>Home</a>
<a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services'? 'active':''}>About us</a>
<a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active':''}>How It Works</a>
</div>

<div className='buttonPlace'>
<button className='btn btn-primary desktopDisp'>Purchase </button>
</div>

<HamburgerMenu className="mobileDisp"/>

    </nav>
  )
}

export default Nav