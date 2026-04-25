import React from 'react'
import './App.css'
import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Works from './pages/Works'
import Appbar from './common/Appbar'
import Footer from './common/Footer'
import Aboutus from './pages/Aboutus'
import Userhome from './pages/Userhome'
import Services from './pages/Services'

const MainLayout = () => (
  <>
    <Appbar />
    <Outlet /> 
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/works' element={<Works />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/services' element={<Services/>}/>
      </Route>

      <Route path='/user' element={<Userhome />} />
    </Routes>
  )
}

export default App