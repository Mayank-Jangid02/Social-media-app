import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PenIcon } from "lucide-react";
import axios from "axios";
import { logout } from "../store";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userdetails = JSON.parse(localStorage.getItem("userdetails"));  

  // Redirect if not logged in
  useEffect(() => {
    if (!userdetails) {
      navigate("/login");
    }
  }, [userdetails, navigate]);

  // Fetch user data
  useEffect(() => {
    async function fetchdata() {
      try {
        if (userdetails?.user?._id) {
          const res = await axios.get(
            `http://localhost:5000/api/user/getuser/${userdetails.user._id}`
          );
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchdata();
  }, [userdetails]);

  // Logout
  function handlelogout() {
    localStorage.removeItem("userdetails");
    localStorage.setItem("userlogin", false);
    dispatch(logout());
    navigate("/login");
  }

  function showfollower() {
    navigate("/follower");
  }

  function showfollowing() {
    navigate("/following");
  }

  function handleEditProfile() {
    navigate("/edit-profile");
  }

  if (!userdetails) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      
      {/* Profile Card */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        
        <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md text-center shadow-2xl">
          
          {/* Avatar Section */}
          <div className="relative flex justify-center group">
            
            {/* Gradient Border */}
            <div className="p-[3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                            group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-indigo-500 transition duration-500">
              
              <img
                src={userdetails?.user?.avatar}
                alt="avatar"
                className="w-36 h-36 rounded-full object-cover border-4 border-gray-900
                           transition duration-500 ease-in-out
                           group-hover:scale-110 group-hover:rotate-3
                           shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              />
            </div>

            {/* Online Status */}
            <span className="absolute bottom-3 right-[calc(50%-72px)] w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full animate-pulse"></span>

            {/* Edit Icon */}
            <button
              onClick={handleEditProfile}
              className="absolute bottom-2 right-[calc(50%-60px)] bg-purple-600 p-2 rounded-full 
                         hover:bg-purple-700 transition shadow-lg"
            >
              <PenIcon size={16} className="text-white" />
            </button>
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold text-white mt-4 hover:text-purple-400 transition duration-300">
            {userdetails?.user?.name}
          </h1>
          <p className="text-gray-400">{userdetails?.user?.email}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button
              onClick={showfollower}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg 
              hover:bg-purple-700 hover:scale-105 transition duration-300 shadow-md"
            >
              Followers
            </button>

            <button
              onClick={showfollowing}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
              hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md"
            >
              Following
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handlelogout}
            className="mt-6 w-full py-2 bg-red-500 text-white rounded-lg 
            hover:bg-red-600 hover:scale-105 transition duration-300 shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}