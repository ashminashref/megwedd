import React from 'react'
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
    </Routes>
    
    </>
  )
}

export default App