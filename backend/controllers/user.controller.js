import User from "../models/user.model.js";
import Blog from "../models/blog.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

export async function getuser(req, res) {

  res.json(await User.find());
}
export async function getuserbyid(req, res) {
  let { id } = req.params;
  console.log(id);
  if (!id) {
    return res.json({ message: "Invalid id" });
  }
  res.json(await User.findById(id));
}
export async function createuser(req, res) {
  try {
    let newUser = await User.create(req.body);
    const userobject = newUser.toObject();
    delete userobject.password;
    console.log(userobject);
    return res.status(201).json({
      message: "Signup successful!!",
      user: userobject,
      token: {
        accessToken: newUser.generateAccessToken(),
        refreshToken: newUser.refreshToken
      }
    });

  } catch (error) {
    console.log(error);
    // Send a meaningful error message instead of the raw error object which might be empty when serialized
    return res.status(400).json({
      message: "Signup failed",
      error: error.message || "Invalid user data"
    });
  }
}
export async function loginuser(req, res) {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ err: "Invalid username!!" });
    }

    let ismatch = await bcrypt.compare(password, user.password);

    if (!ismatch) {
      return res.status(401).json({ err: "Invalid password!!" });
    }

    const userobject = user.toObject();
    delete userobject.password;

    console.log(user);
    return res.json({
      message: "Login successful!!",
      user: userobject,
      token: {
        accessToken: user.generateAccessToken(),
        refreshToken: user.refreshToken
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
}
export async function updateuser(req, res) {
  try {
    let { id } = req.params;
    let { name, avatar } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, avatar },
      { new: true } // returns updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      message: "Edit successfully",
      user: updatedUser
    });

  } catch (error) {
    return res.status(500).json({
      message: "Update failed",
      error: error.message
    });
  }
}
export async function deleteuser(req, res) {
  let { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: " id required" });
  }
  try {
    let deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({ message: "User not found!!" });
    }
    //delete all blogs of that user
    Blog.deleteMany({ uploadedBy: id }).then(() => {
      console.log("Blog deleted");
    });
    return res.json({
      message: "Delete successfully",
    })
  } catch (error) {
    return res.status(500).json({
      message: "Delete failed",
      error: error.message
    });
  }
}
