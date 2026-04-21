import React from 'react'
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Works from './pages/Works'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/work' element = {<Works/>}/>
    </Routes>
    
    </>
  )
}

export default App