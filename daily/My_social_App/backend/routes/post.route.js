import { Router } from "express";
import { getAllPost, createPost, getPostById, updatePost, deletePost } from "../controllers/post.controller.js";
const router = Router();

router.get('/getallpost',getAllPost);
router.post('/createpost',createPost);
router.get('/getpost/:id',getPostById);
router.put('/updatepost/:id',updatePost);
router.delete('/deletepost/:id',deletePost);
export default router;