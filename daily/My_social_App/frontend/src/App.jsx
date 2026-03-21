import React from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/home'
import Createpost from './pages/createpost'
import Feed from './pages/feed'
import Profile from './pages/profile'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}
