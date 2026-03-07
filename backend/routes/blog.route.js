import { Router } from "express";
import { getblog, createblog ,deleteblog} from "../controllers/blog.controller.js";    
let router = Router();

// Define your blog routes here
router.get("/getblog",getblog);
router.post("/createblog",createblog);
router.delete("/deleteblog/:id",deleteblog);
export default router;