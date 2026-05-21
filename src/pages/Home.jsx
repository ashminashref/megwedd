import React from 'react'
import Footer from '../common/Footer'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Why from '../components/Home/Why'
import GyroCanvas from '../components/ui/Gyrocanvas'
function Home() {
  return (
    <div>
      <Hero/>
      <GyroCanvas/>
      <Services/>
      <Why/>
      
    </div>
  )
}

export default Home