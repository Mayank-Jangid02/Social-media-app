import React,{useState} from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Feed from './pages/Feed.jsx'
import Account from './pages/Account.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './pages/Profile.jsx'
import Createblog from './pages/Createblog.jsx'
import Editprofile from './pages/Editprofile.jsx'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/createblog' element={<Createblog />} />
          <Route path='editprofile' element={<Editprofile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
