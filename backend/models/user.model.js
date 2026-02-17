import mongoose from "mongoose";

let userschema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    avatar:String
},{timestamps:true});

const User = mongoose.model("User",userschema);

export default User;