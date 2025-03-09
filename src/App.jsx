import Navbar from "./components/Navbar"
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home  from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import CompetitiveLevel  from "./pages/CompetitiveLevel"
import SwimmingCourses from "./pages/SwimmingCourses"
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import Register from "./pages/Register"


export default function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/courses' element={<SwimmingCourses />}></Route>
          <Route path='/competitive' element={<CompetitiveLevel/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>

    </BrowserRouter>
  )
}