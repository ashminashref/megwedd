import React from 'react'
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Works from './pages/Works'
import Appbar from './common/Appbar'
import Footer from './common/Footer'
import Aboutus from './pages/Aboutus'
function App() {
  return (
    <>
    <Appbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
      <Route path = '/works' element = {<Works/>}/>
      <Route path='about/' element = {<Aboutus/> }/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App