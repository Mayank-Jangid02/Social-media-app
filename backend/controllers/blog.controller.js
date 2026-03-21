import Blog from "../models/blog.model.js";


export async function getblog(req, res) {

  return res.json(await Blog.find().populate("uploadedBy").sort({ createdAt: -1 }));
}

export async function createblog(req, res) {


  await Blog.create(req.body);
  return res.json({ message: "Blog created successfully" });
}

export async function deleteblog(req, res) {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    return res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}