import User from "../models/user.model.js";

export async function getuser(req, res) {
    
    res.json(await User.find());
}
export async function getuserbyid(req, res) {
    let {id} = req.params;
    res.json( await User.findById(id));
}
export async function createuser(req, res) {
   
    await  User.create(req.body);
    return res.json({ message: "user created successfully" });
}
export async function loginuser(req,res){
  
let {email}=req.body;
let user=await User.findOne({email});
  console.log(user);
  return res.json(user);  
}
export async function updateuser(req, res) {
  try {
    let { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
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
