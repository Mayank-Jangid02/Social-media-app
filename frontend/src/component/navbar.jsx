import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const dispatch = useDispatch();
  const pages = useSelector(state => state.pages);
  const isLoggedIn = localStorage.getItem('userlogin') === 'true';

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg px-6 py-4">
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          BlogApp
        </h1>

        {/* Links */}
        <ul>
          {
            pages.map((page, index) => {

              // Hide profile if not logged in
              if (page === 'profile' && !isLoggedIn) return null;

              // Hide login if already logged in
              if (page === 'login' && isLoggedIn) return null;

              // Hide home if NOT logged in (based on your logic)
              if (page === 'home' && isLoggedIn) return null;

              // Hide signup if already logged in
              if (page === 'signup' && isLoggedIn) return null;

              // Hide createpost if NOT logged in (based on your logic)
              if (page === 'createpost' && !isLoggedIn) return null;
              if(page==='feed' && !isLoggedIn) return null; 

              return (
                <li key={index} className="inline-block mx-4">
                  <Link
                    to={page}
                    className="text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    {page}
                  </Link>
                </li>
              );
            })
          }
        </ul>

      </div>
    </nav>
  )
}