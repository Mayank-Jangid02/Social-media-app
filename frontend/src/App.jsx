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
import follower from './pages/follower'
import following from './pages/following'
import EditProfile from './pages/edit-profile'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/follower" element={<follower />} />
          <Route path="/following" element={<following />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}
