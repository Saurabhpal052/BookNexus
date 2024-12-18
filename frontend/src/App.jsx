 import React from 'react';
 import Home from './Home/Home';
 import { Navigate, Route, Routes } from "react-router-dom"
 import toast, { Toaster } from 'react-hot-toast';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import {useAuth} from "./context/AuthProvider";
import Contacts from './Contacts/Contacts';
import Abouts from './Abouts/Abouts';

 function App() {
  const [authUser,setAuthUser]=useAuth();
   return (
     <>
     <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
      <Route path='/Abouts' element={<Abouts/>}/>
      
    </Routes>
    <Toaster />
    </div>
     </>
   )
 }
 
 export default App;
