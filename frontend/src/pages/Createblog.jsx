import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Createblog() {

  let navigate=useNavigate();

  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem("login"))){
      navigate("/account");
    }
  },[]);

  async function handlesubmit(e) {
    e.preventDefault();

    let data = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      avatar: e.target.avatar.value,
      uploadedBy: JSON.parse(localStorage.getItem("user"))._id
    };

    try {
      let res = await axios.post(
        "http://localhost:5000/api/blog/createblog",
        data
      );

      alert(res.data.message);
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-[400px]
        hover:shadow-xl transition duration-300"
      >

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Create Blog
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          required
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:border-blue-400 transition duration-200"
        />

        {/* Avatar */}
        <input
          type="text"
          placeholder="Enter image URL"
          name="avatar"
          required
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:border-blue-400 transition duration-200"
        />
 {/* Description */}
        <textarea
          placeholder="Enter description..."
          name="desc"
          required
          rows="4"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:border-blue-400 transition duration-200 resize-none"
        />
        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl
          hover:bg-blue-600 hover:scale-[1.02]
          active:scale-[0.98]
          transition duration-200 shadow-md font-medium"
        >
          Publish Blog
        </button>

      </form>

    </div>

  )
}
