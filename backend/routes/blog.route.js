import { Router } from "express";
import { getblog, createblog } from "../controllers/blog.controller.js";    
let router = Router();

// Define your blog routes here
router.get("/getblog",getblog);
router.post("/createblog",createblog);
export default router;