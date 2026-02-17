import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},
    desc: {
        type: String,
        required: true
    },
    avatar:String,
    uploadedBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" //{model to model relation b/w user and blog}
    }
},{timestamps:true});

const Blog = mongoose.model("Blog",blogSchema);

export default Blog;