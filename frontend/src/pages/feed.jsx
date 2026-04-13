import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Feed() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userlogin = localStorage.getItem('userlogin');
    if (!userlogin) {
      navigate('/login');
    }

    async function fetchPosts() {
      try {
        const res = await axios.get('http://localhost:5000/api/post/getallpost');
        setPosts(res.data);
      } catch (err) {
        alert(err?.response?.data?.message || "Failed to fetch posts");
        console.log(err);
      }
    }

    fetchPosts();
  }, [navigate]);

  function handleCreatePost(e) {
    e.preventDefault();
    navigate('/createpost');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {posts.length > 0 ? (
        <div className="grid gap-8 max-w-3xl mx-auto">
          {
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fadeIn"
            >

              {/* Header */}
              <div className="flex items-center gap-4 p-4 border-b bg-gray-50">
                <img
                  src={post.uploadedBy.avatar}
                  alt={post.uploadedBy.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {post.uploadedBy.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>  
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-[400px] object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            No posts available
          </h2>

          <p className="text-gray-600 mb-6">
            Create your first post 🚀
          </p>

          <button
            onClick={handleCreatePost}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition duration-300 hover:scale-105"
          >
            Create Post
          </button>
        </div>
      )}

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
        `}
      </style>

    </div>
  )
}
