import Navbar from "./components/Navbar"
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home  from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import CompetitiveLevel  from "./pages/CompetitiveLevel"
import SwimmingCourses from "./pages/SwimmingCourses"
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import Register from "./pages/Register"
import Test from './pages/Test'
import NewNavbar from "./components/NewNavbar"
import Lts from "./pages/Courses/Lts"


export default function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/courses' element={<SwimmingCourses />}></Route>
          <Route path='/competitive' element={<CompetitiveLevel/>}>
            <Route path="lts" element={<Lts/>}> </Route>
          </Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/test' element={<Test />}></Route>
      </Routes>

    </BrowserRouter>
  )
}