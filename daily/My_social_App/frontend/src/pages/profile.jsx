import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function profile() {
  const navigate = useNavigate();
  
 useEffect(()=>{
  
 },[])
  let userdetails=JSON.parse(localStorage.getItem('userdetails'));
   async function fetchdata()
  {
    try
    {
      let data=await axios.get(`http://localhost:5000/api/user/getuser/${userdetails.user._id}`);
    console.log(data);
    }catch(err)
    {
      console.log(err); 
    }
  }
  return (
    <div>profile
      <h1>Name: {userdetails.user.name}</h1>
      <h1>Email: {userdetails.user.email}</h1>
      <img src={userdetails.user.avatar} alt="avatar" />
    
    </div>
  )
}
