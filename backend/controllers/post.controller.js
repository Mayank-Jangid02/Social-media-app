import Post from "../models/post.model.js";

export async function getAllPost(req, res) {
    try {
        const posts = (await Post.find().populate("uploadedBy")).sort({createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createPost(req, res) {
    try {
        const newpost = await Post.create(req.body);
        res.status(201).json(newpost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getPostById(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        let post = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deletePost(req, res) {
    try {
        let post = await Post.findByIdAndDelete(req.params.id);
        if (post) {
            res.status(200).json({ message: "Post deleted successfully" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}