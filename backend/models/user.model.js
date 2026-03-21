import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

let userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be at least 3 characters long!!"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists!!"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long!!"]
    },
    refreshToken: {
        type: String,
        default: "default_refresh_token"
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }

}, { timestamps: true });

userschema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);

    if (process.env.SECRET_KEY) {
        this.refreshToken = jwt.sign({ id: this._id }, process.env.SECRET_KEY);
    } else {
        console.warn("SECRET_KEY not found in environment variables. Refresh token not generated securely.");
    }
});

userschema.methods.generateAccessToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY);
}
const User = mongoose.model("User", userschema);

export default User;