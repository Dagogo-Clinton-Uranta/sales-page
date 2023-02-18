import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import dmca from '../../sleep-assests/dmca.png'

const Footer = () => {
  return (
    <footer>
     
   <div className="linkOrg">
      <ul className='permalinks'>
        <li><a href="#Home">Contact Us</a></li>
        <li><a href="#about">Affiliate</a></li>
       
      </ul>
     <div className='shortLine'></div>


      <ul className='permalinks'>
       
        <li><a href="#services">Terms and conditions</a></li>
        <li><a href="#portfolio">Privacy Policy</a></li>
        
      </ul>

      <div className='shortLine'></div>

      <ul className='permalinks'>
       
       <li><a href="#services">About Us</a></li>
       <li><a href="#Testimonials">Manual</a></li>
     </ul>
    </div>

    <hr className='lineDivider1'/>

      <p>
      All the information on this website is published in good faith and for general information purpose only. The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment of any disease or illness. Sleep Connection makes no representation and assumes no responsibility for the accuracy of information contained on or available through this web site, and such information is subject to change without notice. Consult your medical professional before using any health or exercise product. You are encouraged to confirm any information obtained from or through this web site with other sources, including your own physician, and review all information regarding any medical condition or treatment with your physician. NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR ACCESSED THROUGH THIS WEB SITE.<br/><br/>
The Sleep Connection Anti-Snore Wristband or any of the claims listed in its web material have not been evaluated by the US Food and Drug Administration (FDA). The aforementioned product is not intended to diagnose, treat, cure, or prevent any specific disease or condition, but rather to provide a complementary supplement to the professionally assigned treatments. If you have a health concern or a pre-existing condition, please consult a physician or an appropriate specialist before using the Sleep Connection Anti-Snore Wristband. The Sleep Connection Anti-Snore Wristband is NOT intended to replace or to supersede any of your doctor’s advice or prescriptions.<br/><br/>
The testimonials, statements, and opinions presented on our website are applicable to the individuals depicted. Results will vary and may not be representative of the experience of others. The testimonials are voluntarily provided and are not paid, nor were they provided with free products, services, or any benefits in exchange for said statements. The testimonials are representative of customer experience, but the exact results and experience will be unique and individual to each customer.
      </p>


      <hr className='lineDivider2'/>

      <a href="#" className='footer__logo'><img src={dmca} alt=""/> </a>


  <div className="endColor">
    
    <div className="endStripe">
      
    </div>
  </div>

    </footer>
  )
}

export default Footer