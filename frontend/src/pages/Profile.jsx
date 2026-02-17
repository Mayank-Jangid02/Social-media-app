import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {PenLine} from 'lucide-react';
export default function Profile() {
  let [userdata, setUserdata] = useState({});
  const navigate = useNavigate();
  let isLogin;
  
  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("login"));

    if (!isLogin) {
      navigate("/account");
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserdata(user);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    navigate("/account");
  }
function handleeditprofile(e){
  e.preventDefault();
  navigate("/editprofile");
}
  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 flex items-center justify-center px-4">

    {/* Main Profile Card */}
    <div className="w-full max-w-md backdrop-blur-lg bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-indigo-300/50">

      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Profile 👤
      </h2>

      {/* Avatar Section */}
      <div className="flex flex-col items-center">

        <div className="relative group">
          <img
            src={userdata?.avatar || "https://via.placeholder.com/150"}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg transition duration-500 group-hover:scale-110"
          />

          {/* Online Indicator */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-gray-800">
          {userdata?.name || "User"}
        </h1>

        {/* <p className="text-gray-500 mt-2">
          {userdata?.email}
        </p> */}

        <p className="mt-4 text-sm text-gray-600">
          You are logged in successfully 🎉
        </p>
      </div>
      <button id="edit" onClick={handleeditprofile}><PenLine/></button>
      {/* Divider */}
      <div className="my-8 border-t border-gray-300"></div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full py-3 rounded-2xl bg-red-500 text-white font-semibold 
        transition duration-300 
        hover:bg-white hover:text-red-500 border border-red-500 
        hover:shadow-lg hover:shadow-red-300/50"
      >
        Logout
      </button>

    </div>
  </div>
);

}
