import { Router } from "express";
import { getuser, createuser,getuserbyid ,loginuser,updateuser} from "../controllers/user.controller.js";    
let router = Router();

router.get("/getuser",getuser);
router.post("/createuser",createuser);
router.get("/getuserbyid/:id",getuserbyid);
router.post('/login',loginuser);
router.patch('/updateuser/:id',updateuser);
export default router;