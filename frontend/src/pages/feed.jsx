import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { use } from 'react';

export default function feed() {
   const navigate = useNavigate();
 let [posts,setposts]=useState([]);

  useEffect(()=>{
    let userlogin=localStorage.getItem('userlogin');
    if(!userlogin){
      navigate('/login');
    }
    async function fetchposts(){
      try{
      let res=await axios.get('http://localhost:5000/api/post/getallpost');
      if(!res){
        alert("Failed to fetch posts");
        return;
      }
      setposts(res.data);
      }catch(err)
      {
        alert(err?.response?.data?.message || "Failed to fetch posts");
        console.log(err);
      }
    }
  },[posts,navigate])    

 function handlecreatepost(e){
  e.preventDefault();
  navigate('/createpost');
 }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

    {
      posts.length>0?
      <div className="grid gap-6 max-w-3xl mx-auto">
        {posts.map((post)=>{
          return (
            <div 
              key={post._id} 
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600">
                {post.content}
              </p>
            </div>
          );
        })}
      </div>
      :
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className='text-center text-2xl font-bold text-gray-800 mb-4'>
          No posts available
        </h2>

        <h3 className="text-gray-600 mb-6">
          Create your first post
        </h3>

        <button 
          onClick={handlecreatepost}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition duration-200"
        >
          Create Post
        </button>
      </div>
    }

    </div>
  )
} 