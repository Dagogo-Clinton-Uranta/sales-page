import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import cuddles from '../../sleep-assests/cuddle2.png'
import wristDisplay from '../../sleep-assests/wrist-display.png'

const Services = () => {
  return (
    <section id='services'>
    

    <div className="container services__container ">

    
    <div className='descHeader'><span>HIGH TECH DEVICE</span> SAID TO BE <strong className="highlight">SAVING</strong> MARRIAGES AND RELATIONSHIPS</div> 


    <p>Snoring is a real home-wrecker for many Americans. 
      As we all know, loud snoring can sound like a freight train! 
      The loud and awful noise can positively RUIN your partner’s sleep -
       leading to bad moods, arguments, even resentment! The sad truth 
       is that snoring can ruin even the happiest of relationships.
       <br/><br/>
        Recent reports indicate that up to 25% of Americans prefer to sleep
         in a different room than their partner, just to avoid being exposed to snoring. 
         In fact, snoring can cause such high degrees of marital strain, it could even
          be one of the factors leading up to divorce! &nbsp;
          
          <strong> 
            Thankfully, a new breakthrough
           device can put an end to snoring forever! It uses intelligent technology to
            monitor for any indication of snoring – 
           and if it detects any, it emits sensory feedback which stops
            the snoring dead in its tracks! 
       </strong>
       </p>




       <div className='descHeader'> SIMPLE DEVICE&nbsp;<strong className="highlight">STOPS SNORING FOREVER</strong></div> 


    <p>
    Thankfully, a new breakthrough device can put an end to snoring forever!
     It uses intelligent technology to monitor for any indication of snoring – 
     and if it detects any, it emits sensory feedback which stops the snoring dead in its tracks!
You simply put it on like a wristwatch before going to bed. It’s comfortable to
 wear and non-binding, so it doesn’t interfere with your sleeping positions.
  It’s so easy to use, and it might even save your marriage!
   
   </p>

       <img src={cuddles} alt="couple cuddling" className='cuddleImg' />
        

       <div className='descHeader'><strong className="highlight">SLEEP CONNECTION</strong> STOPS YOUR SNORING WITHOUT WAKING YOU UP!</div> 


    <p>
  The electrical feedback from the Sleep Connection Anti-Snore
   Wristband does not produce a strong enough signal to wake the 
   snorer up. Instead, it sends a gentle electrical signal to the wearer’s 
   wrist to stop the snoring. That said, if the feedback signal feels too 
   strong (or weak) to you, you can set the signal output as high or low as you like it. 
   
   </p>


   {/*<img src={wristDisplay} alt="sleep connection on hand" className='wristImg' />*/}

  </div>     
    
    </section>
  )
}

export default Services