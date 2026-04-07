import { Router } from "express";
import { getAllUser, registerUser, loginUser, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/getalluser",getAllUser);
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/getuser/:id",getUserById);
router.put("/updateuser/:id",updateUser);
router.delete("/deleteuser/:id",deleteUser);


export default router;