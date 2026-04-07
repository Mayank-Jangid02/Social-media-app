import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://www.bing.com/th/id/OIP.4SsWTLs8JxW6QS5llAKApAHaEK?w=234&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]

},{
    timestamps: true
});
userSchema.pre("save", async function(){
if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password, 10);
}
});

userSchema.methods.generateAccessToken = function() {
    const token=jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    return token;
}

userSchema.methods.generateRefreshToken = function() {
    const refreshToken=jwt.sign({id:this._id},process.env.JWT_REFRESH_SECRET,{expiresIn:"28d"});
    return refreshToken;
}

const User=mongoose.model("User",userSchema);

export default User;