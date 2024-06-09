import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import AboutPage from './Components/AboutPage'
import Testimonial from './Components/TestimonialPage'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="font-clashDisplayFont" >
        <Navbar />
        <LandingPage />
        <AboutPage />
        <Testimonial />
        <Faq />
        <Footer />
      </div>




    </>
  )
}

export default App
