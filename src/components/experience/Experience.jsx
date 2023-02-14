import React from 'react'
import './experience.css'
import { AiFillStar } from 'react-icons/ai'
import watch from '../../sleep-assests/watch.png'

const Experience = () => {
  return (
    <section id='experience'>
   
   
   <div className="container  ">
   
      

   {/*<svg width="454" height="381" viewBox="0 0 454 381" fill="none" >
<rect width="454" height="381" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">

</pattern>

</defs>
</svg>*/}
<div className="product-place">
  
  <ul>
    <li><AiFillStar/>&nbsp;&nbsp;&nbsp; State of the Art <strong>Technology</strong></li>
    <li><AiFillStar/>&nbsp;&nbsp;&nbsp; <strong>Comfortable</strong> to Wear and Adjustable to Fit</li>
    <li><AiFillStar/>&nbsp;&nbsp;&nbsp; Extremely <strong>Effective</strong> and Highly <strong>Affordable</strong></li>
  </ul> 



 <img src={watch} alt="sleep connection band"/>
</div>


   </div>
  
  


<div class="custom-shape-divider-bottom-1675954621">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>


    </section>
  )
}

export default Experience