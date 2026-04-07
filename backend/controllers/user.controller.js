import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export async function getAllUser(req,res){
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function registerUser(req,res){
    try {
        const {name,email,password,avatar} = req.body;
        const user = new User({name,email,password,avatar});
        await user.save();
        res.status(201).json({
            user, 
            accessToken: user.generateAccessToken(), 
            refreshToken: user.generateRefreshToken()
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function loginUser(req,res){
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password "});
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        res.status(200).json({accessToken, refreshToken, user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function getUserById(req,res){
    try {
        const user = await User.findById(req.params.id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function updateUser(req,res){
    try{
        const {id} = req.params;
        let user=await User.findByIdAndUpdate(id,req.body,{new:true});
        if(user){    
            res.status(200).json(user);
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
    }

 export async function deleteUser(req,res){
    try{
        let user=await User.findByIdAndDelete(req.params.id);
        if(user){
            res.status(200).json({message: "User deleted successfully"});
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
    } 