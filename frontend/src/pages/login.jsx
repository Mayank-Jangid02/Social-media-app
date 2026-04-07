import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate();

  async function handlelogin(e) {
    e.preventDefault();

    let obj = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    try {
      let res = await axios.post('http://localhost:5000/api/user/login', obj);

      localStorage.setItem('userdetails', JSON.stringify(res.data));
      localStorage.setItem('userlogin', true);
      navigate('/profile');
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handlelogin} className="space-y-4">
          
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?
          <span
            onClick={() => navigate('/signup')}
            className="text-blue-600 cursor-pointer font-medium ml-1 hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  )
}