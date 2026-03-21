import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function login() {
  const navigate = useNavigate();
 function handlelogin(e){
  e.preventDefault();
  let obj={
    email:e.target.email.value,
    password:e.target.password.value
  }
  try{
    let res = axios.post('http://localhost:5000/api/user/login',obj);
    localStorage.setItem('userdetails',JSON.stringify(res.data));
    navigate('/profile');
  }
  catch(err)
  {    alert(err.response.data.message);
    console.log(err);
  }
}
  return (
    <div>login

      <form action="">
        <input type="email" placeholder='Email' name='email' />
        <input type="password" placeholder='Password' name='password' />
        <button onClick={handlelogin}>Login</button>
      </form>
    </div>
  )
}
