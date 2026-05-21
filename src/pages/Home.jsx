import React from 'react'
import Footer from '../common/Footer'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Why from '../components/Home/Why'
import CinematicPortals from '../components/Home/CinematicPortals'
function Home() {
  return (
    <div>
      <Hero/>
      <CinematicPortals/>
      <Services/>
      <Why/>
      
    </div>
  )
}

export default Home