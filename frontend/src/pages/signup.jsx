import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
  const navigate = useNavigate();

  async function onsubmit(e) {
    e.preventDefault();

    let obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      avatar: e.target.url.value
    };

    try {
      let res = await axios.post('http://localhost:5000/api/user/register', obj);

      localStorage.setItem('userdetails', JSON.stringify(res.data));
      navigate('/profile');
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong");
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={onsubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="text"
            placeholder="Avatar URL"
            name="url"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? 
          <span
            onClick={() => navigate('/login')}
            className="text-indigo-600 cursor-pointer font-medium ml-1 hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  )
}