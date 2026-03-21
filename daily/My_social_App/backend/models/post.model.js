import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    commentedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps: true
});


const likeSchema = new mongoose.Schema({
    likedBy:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"User",
        required:true
    }
},{
    timestamps: true
});
const postSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    comments:[commentSchema],
    likes:[likeSchema],
    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps: true
});

const Post=mongoose.model("Post",postSchema);

export default Post;
    