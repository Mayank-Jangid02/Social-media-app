import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Feed() {

  let [post, setpost] = useState([]);
const navigate=useNavigate();
  async function fetchblog() {
    try {
      let res = await axios.get("http://localhost:5000/api/blog/getblog");
      setpost(res.data);
    } catch (error) {
      console.log(error);
    }
  }
 function handlecreateblog(){
  if(!JSON.parse(localStorage.getItem("login"))){
    navigate("/account");
  }
  navigate("/createblog");
 }
  useEffect(() => {
    fetchblog();
  }, []);

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">

    {/* Heading + Button Section */}
    <div className="max-w-4xl mx-auto flex justify-between items-center px-6 mb-10">

      <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
        Blog Feed
      </h1>

      <button
        onClick={handlecreateblog}
        className="border border-blue-500 text-blue-500 px-5 py-2 rounded-full 
                   font-semibold transition duration-300 
                   hover:bg-blue-500 hover:text-white 
                   active:scale-95 active:bg-blue-600"
      >
        + Create Post
      </button>

    </div>

    {/* Blog Feed Container */}
    <div className="max-w-2xl mx-auto space-y-10 px-4">

      {post.map((e) => (

        <div
          key={e._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                     transition duration-300 overflow-hidden"
        >

          {/* Uploaded By */}
          <div className="flex items-center gap-4 p-5 border-b bg-gray-50">

            <img
              src={e.uploadedBy?.avatar}
              alt="user"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
            />

            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                {e.uploadedBy?.name}
              </h2>
              <p className="text-gray-500 text-sm">
                Posted a blog
              </p>
            </div>

          </div>

          {/* Blog Content */}
          <div className="p-6">

            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              {e.title}
            </h1>

            <p className="text-gray-600 mb-5 leading-relaxed">
              {e.desc}
            </p>

            {e.avatar && (
              <img
                src={e.avatar}
                alt="blog"
                className="w-full h-80 object-cover rounded-xl 
                           hover:scale-105 transition duration-300"
              />
            )}

          </div>

        </div>

      ))}

    </div>

  </div>
);
 
}
