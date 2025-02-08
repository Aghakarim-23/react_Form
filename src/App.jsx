import React from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from "react-router";
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import NotFound from './common/NotFound.jsx';
import Count from './pages/Count.jsx';
import UserDetails from './userDetails/UserDetails.jsx';


const App = () => {
  const token = true

  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {
            token && <Route path="/home" element={<Home />} />
        }
        <Route path="*" element={<NotFound/>}/>
        <Route path='/count' element={<Count/>}></Route>
        <Route path='/userDetails' element={<UserDetails/>}></Route>
      </Routes>
   </BrowserRouter>
   
  )
}

export default App