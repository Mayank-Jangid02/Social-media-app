import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  let Navlink = [
    { name: 'Feed', link: '/' },
    { name: 'Account', link: '/account' },
    { name: 'Profile', link: '/profile' },
  ]
let [login,setlogin]=useState(false);

useEffect(()=>{
  setlogin(JSON.parse(localStorage.getItem('login') ));
},[localStorage.getItem('login')])
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <h2 className="text-2xl font-bold tracking-wide">Socialix</h2>

      {/* Links */}
      <ul className="flex gap-6 text-lg">
        {
         Navlink.map((item, index) => {

          if(item.name=='Profile')
          {
            if(login)
            {
              return (
                <li key={index}><Link to={item.link}>{item.name}</Link></li>
              )
            } 
          }else if(item.name=='Account')
            {
              if(!login)
              {
               return( <li  key={index}><Link to={item.link}>{item.name}</Link></li>)
              }
            }else{
              return(<li key={index}><Link to={item.link}>{item.name}</Link></li>)
            }
         }
         
         )
        }
      </ul>

    </nav>
  )
}
