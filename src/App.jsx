import React from 'react'
import './App.css'
import Appbar from './common/Appbar'
import Hero from './components/Home/Hero'
import Services from './components/Home/Services'
import Footer from './common/Footer'

function App() {
  return (
    <div className=''>
      <Appbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App