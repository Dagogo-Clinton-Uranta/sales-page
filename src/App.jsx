import React from 'react'
//jsx files are for emmet shortcux, not js
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
    <Nav/>
    <Header />
    <Experience />
    <About />
    <Services/>
    <Testimonials />
    <Portfolio/>
    
   
    

    <Footer/>
    
    
    </>
  )
}

export default App