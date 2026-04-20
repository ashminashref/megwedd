import React from 'react'
import './App.css'
import Appbar from './common/Appbar'
import Hero from './components/Home/Hero'
import Services from './components/Home/Services'

function App() {
  return (
    <div className=''>
      <Appbar/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App