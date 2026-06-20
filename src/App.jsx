import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import  { useEffect, useState } from 'react'
import axios from './../node_modules/axios/lib/axios';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Support from './pages/Support';


const App = () => {
  const [location, setLocation] =useState()


  const getLocation = async()=>{
    navigator.geolocation.getCurrentPosition(async pos =>{
      const{latitude, longitude}= pos.coords
      // console.log(latitude,longitude);


     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

     try {
      const location = await axios.get(url)
      // console.log(location)
      const exactLocation = location.data.address
      setLocation(exactLocation)
      


     } catch (error) {
      console.log(error)
     }


    })
  }
 useEffect(()=>{
  getLocation()
 },[])

  return (
   <BrowserRouter basename='/NexCart'>
   <Navbar location={location} />
     <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/products' element={<Products />} ></Route>
      <Route path='/product/:id' element={< SingleProduct />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />} ></Route>
      <Route path='/Support' element={<Support />} ></Route>
      <Route path='/cart' element={<Cart />} ></Route>
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App
