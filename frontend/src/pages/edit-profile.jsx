import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditProfile() {
    const navigate = useNavigate();
    let userdetails=JSON.parse(localStorage.getItem('userdetails'));

    useEffect(()=>{
        let userlogin=localStorage.getItem('userlogin');
        if(!userlogin){
          navigate('/login');
        }
    },[userdetails,navigate])

    function handlesubmit(e){   
        e.preventDefault();
        let obj={
            name:e.target.name.value,
            avatar:e.target.avatar.value
        }
        try{
          let res=axios.put(`http://localhost:5000/api/user/updateuser/${userdetails.user._id}`,obj);
          if(res){
            localStorage.setItem('userdetails', JSON.stringify({...userdetails, user: {...userdetails.user, ...obj}}));
            e.target.reset();
            alert("Profile updated successfully");
            navigate('/profile');
          }else{
            alert("Failed to update profile");
          }
        }catch(err)
        {
        alert(err?.response?.data?.message || "Failed to update profile");
        console.log(err);
        }
    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      
      {/* Gradient Border Wrapper */}
      <div className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-full max-w-md">
        
        {/* Form Card */}
        <form 
          onSubmit={handlesubmit} 
          className='bg-gray-900 p-6 rounded-xl shadow-2xl space-y-5'
        >
          
          <h2 className="text-white text-xl font-bold text-center">
            Edit Profile
          </h2>

          {/* Name Input */}
          <input 
            type="text" 
            placeholder='Name' 
            name='name'
            className="w-full p-3 rounded-lg bg-gray-800 text-white 
                       border border-gray-700 outline-none
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40
                       transition duration-300"
          />

          {/* Avatar Input */}
          <input 
            type="text" 
            placeholder='Avatar URL' 
            name='avatar'
            className="w-full p-3 rounded-lg bg-gray-800 text-white 
                       border border-gray-700 outline-none
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40
                       transition duration-300"
          />

          {/* Submit Button */}
          <button 
            type='submit'
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 
                       text-white rounded-lg font-semibold
                       hover:from-purple-700 hover:to-indigo-700
                       hover:scale-105 transition duration-300 shadow-lg"
          >
            Update Profile
          </button>

        </form>
      </div>

    </div>
  )
}