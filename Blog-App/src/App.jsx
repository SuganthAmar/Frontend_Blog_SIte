import { useState } from 'react'
import Topbar from "../src/component/components/Topbar"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user=false;

  return (
    
    <BrowserRouter>
    <Topbar/>
    <Routes>
    <Route path="/" exact element={<Home></Home>}></Route> 
    {/* <Route index element={<Home />} /> */}
          {/* <Route path="/topbar" element={<Topbar />} /> */}
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/register" element={user ? <Home/> : <Register />} />
          <Route path="/setting" element={user ? <Settings /> : <Register/>} />
          <Route path="/single" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
