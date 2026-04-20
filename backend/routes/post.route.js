import { Router } from "express";
import { getAllPost, createPost, getPostById, updatePost,togglelike, commentpost, deletecomment, getallLike, getallComment  } from "../controllers/post.controller.js";
const router = Router();

router.get('/getallpost',getAllPost);
router.post('/createpost',createPost);
router.get('/getpost/:id',getPostById);
router.put('/updatepost/:id',updatePost);
router.delete('/deletepost/:id',deletePost);
router.post('/togglelike/:id',togglelike);
router.post('/comment/:id',commentpost);
router.delete('/comment/:id',deletecomment);
router.get('/like/:id',getallLike);
router.get('/comment/:id',getallComment);

export default router;