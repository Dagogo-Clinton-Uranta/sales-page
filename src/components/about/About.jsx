import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      
      <h2>HOW IT WORKS</h2>
      

      <div className="container about__container">
      

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <div className='about__icon'>1</div>
           
           <small>It monitors the sound of the room while you're sleeping</small>
          </article>
         
          <article className='about__card'>
          <div className='about__icon'>2</div>
           
           <small>Its intelligent biosensor detects if you are snoring</small>
          </article>

          <article className='about__card'>
          <div className='about__icon'>3</div>
           
           <small>If it discovers any snoring it sends a tiny electrical feedback impulse to your wrist</small>
          </article>

          <article className='about__card'>
          <div className='about__icon'>4</div>
          
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