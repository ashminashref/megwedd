import React from 'react'
import Footer from '../common/Footer'
import Appbar from '../common/Appbar'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Why from '../components/Home/Why'
function Home() {
  return (
    <div>
      <Appbar/>
      <Hero/>
      <Services/>
      <Why/>
      
      <Footer/>
    </div>
  )
}

export default Home