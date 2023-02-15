import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


import { FaHeartbeat,FaWifi ,FaBed} from "react-icons/fa"
import {AiFillThunderbolt} from "react-icons/ai"

const About = () => {
  return (
    <section id='about'>
      
      <h2>HOW IT WORKS</h2>
      

      <div className=" about__container">
      

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <div className='about__icon'><FaHeartbeat/></div>
           
           <small>It monitors the sound of the room while you're sleeping</small>
          </article>
         
          <article className='about__card'>
          <div className='about__icon'><FaWifi/></div>
           
           <small>Its intelligent biosensor detects if you are snoring</small>
          </article>

          <article className='about__card'>
          <div className='about__icon'> <AiFillThunderbolt/></div>
           
           <small>If it discovers any snoring it sends a tiny electrical feedback impulse to your wrist</small>
          </article>

          <article className='about__card'>
          <div className='about__icon'><FaBed/></div>
          
           <small>This gentle impulse is enough to mae you shift positions - which stops the snoring</small>
          </article>
        </div>

        
      
       <div className='ctaButton'>
       <a href="#contact" className="btn btn-primary">Order Now</a>
       </div>
      
      </div>




      </div>

      
      </section>
  )
}

export default About