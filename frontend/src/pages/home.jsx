import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userlogin") === "true") {
      navigate('/profile');
    }

    // trigger animation
    setTimeout(() => {
      setShowTitle(true);
    }, 300);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center text-white">

      {/* Animated Heading */}
      <h1
        className={`text-4xl md:text-6xl font-bold mb-10 transition-all duration-800 transform ${
          showTitle ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        Welcome to Blog App
      </h1>

      {/* Review Section */}
      <div className="grid md:grid-cols-3 gap-8 px-5">

        {/* Card 1 */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:scale-105 transition duration-300">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4"
            src="https://th.bing.com/th/id/OIP.wWRoK-AcHyNcfPIL42b5kgHaE7?w=108&h=108&c=1&bgcl=e6e6aa&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
            alt=""
          />
          <h3 className="text-xl font-semibold text-center">Alma Smith</h3>
          <p className="text-center mt-2 text-gray-600">
            This blog app is very fast and easy to use and connects you with many people.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:scale-105 transition duration-300">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4"
            src="https://th.bing.com/th/id/OIP.wWRoK-AcHyNcfPIL42b5kgHaE7?w=108&h=108&c=1&bgcl=e6e6aa&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
            alt=""
          />
          <h3 className="text-xl font-semibold text-center">John Doe</h3>
          <p className="text-center mt-2 text-gray-600">
            Super smooth experience with amazing UI. Highly recommended!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-lg border-2 border-gray-200 hover:scale-105 transition duration-300">
          <img
            className="w-20 h-20 rounded-full mx-auto mb-4"
            src="https://th.bing.com/th/id/OIP.wWRoK-AcHyNcfPIL42b5kgHaE7?w=108&h=108&c=1&bgcl=e6e6aa&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3"
            alt=""
          />
          <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
          <p className="text-center mt-2 text-gray-600">
            Loved the features and speed. Blogging feels fun now!
          </p>
        </div>

      </div>
    </div>
  )
}