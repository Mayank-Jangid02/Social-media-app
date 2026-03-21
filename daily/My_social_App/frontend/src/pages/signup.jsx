import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function signup() {
  const navigate = useNavigate();
 
  function onsubmit(e){
    e.preventDefault();
    let obj={
      name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
      avatar:e.target.url.value
    }
    try
    {
       let res=axios.post('http://localhost:5000/api/user/register',obj);
       
       localStorage.setItem('userdetails',JSON.stringify(res.data));
       navigate('/profile');
    } catch(err)
    {
      alert(err.response.data.message);
      console.log(err);
    }
  }
  return (
    <div>
      signup
      <form action="submit">
        <input type="text" placeholder="Name" name='name' />
        <input type="email" placeholder="Email" name='email' />
        <input type="password" placeholder="Password" name='password' />
        <input type="text" placeholder='URL...' name='url' />
        <button onClick={onsubmit}>Sign Up</button>
      </form>
    </div>
  )
}