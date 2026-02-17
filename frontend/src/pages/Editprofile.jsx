import React from 'react';
import axios from 'axios';
export default function Edit() {

  async function handlesubmit(e){
    e.preventDefault();

    let data={
      name:e.target.name.value,
      avatar:e.target.avatar.value
    }
   e.target.reset();
    const id=JSON.parse(localStorage.getItem("user"))._id;

    try{
      console.log("data is to be sent")
      let res= await axios.put(
        `http://localhost:5000/api/user/updateuser/${id}`,
        data
      );
      console.log("data sent")
      console.log(res.data);

      localStorage.setItem("user",JSON.stringify(res.data.user));

      alert(res.data.message);

      e.target.reset();

    }catch(error){
      console.log(error);
      alert(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handlesubmit}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-96 hover:shadow-xl transition duration-300"
      >

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Edit Profile
        </h2>

        {/* Name input */}
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:border-blue-400 transition duration-200"
        />

        {/* Avatar input */}
        <input
          type="text"
          placeholder="Enter Avatar URL"
          name="avatar"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-xl
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:border-blue-400 transition duration-200"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl
          hover:bg-blue-600 hover:scale-[1.02]
          active:scale-[0.98]
          transition duration-200 shadow-md"
        >
          Update Profile
        </button>

      </form>

    </div>
  )
}
