import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import PageNotFound from './Pages/PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Contact from './Pages/Contact'
import Testimonials from './Pages/Testimonials'
import Blog from './Pages/Blog'
import BlogDetails from './Pages/BlogDetails'
import StudentRegistration from './Pages/StudentRegistration'
import TeacherRegistration from './Pages/TeacherRegistration'
import Teacher from './Pages/Teacher'
import Faqs from './Pages/Faqs'
import Event from './Pages/Event'
import EventDetails from './Pages/EventDetails'
import Course from './Pages/Course'
import CourseDetails from './Pages/CourseDetails'
import TeacherDetails from './Pages/TeacherDetails'
import About from './Pages/About'
import Service from './Pages/Service'
import EducationShop from './Pages/EducationShop'
import Cart from './Pages/Cart'
import PricingTable from './Pages/PricingTable'
import CheckOut from './Pages/CheckOut'
import TopBar from './components/Navbar/TopBar'
import ServiceDetails from './Pages/ServiceDetails'
import courseData from './sampleData/CourseData'

import GalleryPage from './Pages/Gallery'
import Campus from './Pages/Campus'
import Academics from './Pages/Academics'
import Admissions from './Pages/Admissions'



const App = () => {
 

  return (
    <div>
  <BrowserRouter>
      <TopBar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home courseData={courseData}/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/testimonials' element={<Testimonials/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/faqs' element={<Faqs/>}></Route>
        <Route path='/event' element={<Event/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/services/details' element={<ServiceDetails/>}></Route>
        <Route path='/courses' element={<Course courseData={courseData}/>}></Route>
        <Route path='/courses/details' element={<CourseDetails/>}></Route>
        <Route path='/event/:id' element={<EventDetails/>}></Route>
        <Route path='/gallery' element={<GalleryPage/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/campus' element={<Campus/>}></Route>
        <Route path='/pricingtable' element={<PricingTable/>}></Route>
        <Route path='/educationshop' element={<EducationShop/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/blog/:id' element={<BlogDetails/>}></Route>
        <Route path='/teacher' element={<Teacher />}></Route>
        <Route path='/teacher/:id' element={<TeacherDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
        <Route path='/admissions' element={<Admissions/>}></Route>
        <Route path='/pagenotfound' element={<PageNotFound/>}></Route>
        <Route path='/student/registration' element={<StudentRegistration/>}></Route>
        <Route path='/Teacher/registration' element={<TeacherRegistration/>}></Route>



      </Routes>
 
      <Footer/>
      </BrowserRouter>
    
    </div>
  )
}

export default App