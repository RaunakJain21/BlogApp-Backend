//import th model
const Post = require("../models/PostSchema");

//define route handler

exports.createPost = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {title,body} = req.body;
            //create a new Todo Obj and insert in DB
            // const response = await Post.create({title,body});
            // //send a json response with a success flag
            // const post = new Post({
            //     title,body
            // });
            // const savedPost =await post.save();
            await Post.create({
                title,body
            });
            res.status(200).json(
                {
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

exports.getAllPosts = async(req,res) => {
    try {
         const posts = await Post.find({}).populate("comments").populate("likes").exec();
            
            res.status(200).json(
                {
                    posts
                    // message:'Entry Created Successfully'
                }
            );
    }
    
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"error in fetching all posts",
            message:err.message,
        })
    }
}