import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function createpost() {
  useEffect(()=>{
    let userlogin=localStorage.getItem('userlogin');
    if(!userlogin){
      navigate('/login');
    }
  },[]) 
  const navigate = useNavigate();

  function handlesubmit(e){
    e.preventDefault();
    let obj={
      image:e.target.image.value,
      caption:e.target.caption.value
    }
    try
    {
    let res=axios.post('http://localhost:5000/api/post/createpost',obj);
    if(!res){
      alert("Post creation failed");
      return;
    }
    if(res.status===200)  {
      alert("Post creatd successfully");
      navigate('/profile');
    }
    }catch(err)
    {
      alert(err?.response?.data?.message || "Post creation failed");
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Post
        </h2>

        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          
          <input 
            type="text" 
            alt='image' 
            placeholder='Image URL' 
            name='image' 
            required 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="text" 
            placeholder='Caption' 
            name='caption' 
            required 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button 
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}