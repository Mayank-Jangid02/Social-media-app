
 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";

 export default function Account() {
    const navigate = useNavigate();
    const [tab, setTab] = useState("login");

    useEffect(() => {
      const isLogin = JSON.parse(localStorage.getItem("login"));
      if (isLogin) {
        navigate("/profile");
      }
    }, []);

    async function handleLogin(e) {
      e.preventDefault();
      const email = e.target.email.value;

      try {
        const res = await axios.post(
          "http://localhost:5000/api/user/login",
          { email }
        );

        if (res.data.err) {
          alert(res.data.err);
          return;
        }

        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("login", JSON.stringify(true));
        navigate("/profile");
      } catch {
        alert("Server Error!!");
      }
    }

    async function handleSignup(e) {
      e.preventDefault();

      let data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        avatar: e.target.avatar.value,
      };

      try {
        await axios.post(
          "http://localhost:5000/api/user/createuser",
          data
        );
        alert("Signup Successful!");
        e.target.reset();
        setTab("login");
      } catch {
        alert("Server Error!!!");
      }
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-200 to-purple-200 px-4">

        {/* Glass Card */}
        <div className="w-full max-w-md backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl border border-white/40 p-8 transition-all duration-500">

          {/* TAB HEADER */}
          <div className="relative flex bg-gray-200 rounded-full p-1 mb-8">

            {/* Sliding Indicator */}
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow-md transition-all duration-500 ${
                tab === "login" ? "left-1" : "left-1/2"
              }`}
            ></div>

            <button
              onClick={() => setTab("login")}
              className={`relative z-10 w-1/2 py-2 font-semibold rounded-full transition duration-300 ${
                tab === "login"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setTab("signup")}
              className={`relative z-10 w-1/2 py-2 font-semibold rounded-full transition duration-300 ${
                tab === "signup"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
            >
              Signup
            </button>
          </div>

          {/* PANEL */}
          <div className="transition-all duration-500">

            {tab === "login" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  Welcome Back 👋
                </h2>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
                  />

                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:scale-105 transition duration-300 shadow-md"
                  >
                    Login
                  </button>
                </form>
              </div>
            )}

            {tab === "signup" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  Create Account 🚀
                </h2>

                <form onSubmit={handleSignup} className="flex flex-col gap-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
                  />

                  <input
                    type="text"
                    name="avatar"
                    placeholder="Avatar URL"
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300"
                  />

                  <button
                    type="submit"
                    className="bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 hover:scale-105 transition duration-300 shadow-md"
                  >
                    Signup
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    );
 }
