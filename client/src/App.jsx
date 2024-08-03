import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import PrivateRoute from './Components/PrivateRoute'
import CreateListing from './Pages/CreateListing'

export default function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route  element={<PrivateRoute/>} >
            <Route path="/profile" element={<Profile/>} />
            <Route path="/create-listing" element={<CreateListing/>} />
          </Route>
      </Routes>
   </BrowserRouter>
  )
}
