import React from 'react'
import Footer from '../common/Footer'
import Appbar from '../common/Appbar'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'

function Home() {
  return (
    <div>
      <Appbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home