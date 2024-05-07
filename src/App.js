// import './App.css';
// import React,{useState,useContext, useEffect} from "react";
// import {Context} from "./index";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Navbar from './components/Layout/Navbar';
// import Footer from './components/Layout/Footer'
// import Home from './components/Home/Home';
// import Course from './components/Course/Courses';
// import PostCourse from './components/Course/PostCourse';
// import CourseDetails from './components/Course/CourseDetails';
// import MyCourse from './components/Course/MyCourse';
// import Application from './components/Application/Application';
// import MyApplication from './components/Application/MyApplication';
// import NotFound from './components/NotFound/NotFound';
// import axios from 'axios'
// import {Toaster} from 'react-hot-toast';
// import Courses from './components/Course/Courses';

// function App() {

//   const {isAuthorized,setIsAuthorized,setUser} =useContext(Context)

// useEffect(()=>{
//   const fetchUser=async()=>{
// try{
//   const response=axios.get("",{withCredentials:true})
//   setUser((await response).data.user);
//   setIsAuthorized(true);

// }catch(error){
// setIsAuthorized(false)
// }
//   }
// })

//   return (
//    <>
// <Router>
//   <Navbar/>
//   <Routes>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/register' element={<Register/>}/>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/course/getall' element={<Courses/>}/>
//     <Route path='/course/:id' element={<CourseDetails/>}/>
//     <Route path='/course/:post' element={<PostCourse/>}/>
//     <Route path='/application/:id' element={<Application/>}/>
//     <Route path='/application/me' element={<MyApplication/>}/>
// <Route path='*' element={<NotFound/>}/>
//   </Routes>
//   <Footer/>
//   <Toaster/>
// </Router>
//    </>
// )}

// export default App;
import './App.css';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "./index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Courses from './components/Course/Courses'; // Renamed from Course
import PostCourse from './components/Course/PostCourse';
import CourseDetails from './components/Course/CourseDetails';
import MyCourse from './components/Course/MyCourse';
import Application from './components/Application/Application';
import MyApplication from './components/Application/MyApplication';
import NotFound from './components/NotFound/NotFound';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Payment from './components/Application/Payment';
import reportWebVitals from './reportWebVitals';


function App() {
  const { setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/getuser", { withCredentials: true });
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [setIsAuthorized, setUser]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/payment' element={<Payment/>} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} /> {/* Updated from Course */}
          <Route path='course/:id' element={<CourseDetails />} />
          <Route path='/courses/post' element={<PostCourse />} />
          <Route path='/my-courses' element={<MyCourse />} />
          <Route path='/application/:id/:courseName/:collegeName' element={<Application />} />
          <Route path='/my-applications' element={<MyApplication/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;

