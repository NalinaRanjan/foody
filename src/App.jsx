import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route  } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place Order/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'




const App = () => {
const[showPopUp , setShowPopUp] = useState(false)
  return (
    <>
    {showPopUp ? <LoginPopUp setShowPopUp={setShowPopUp}/> : <></>}
      <div className='app'>
        <Navbar showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
