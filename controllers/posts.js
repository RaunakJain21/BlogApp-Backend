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
            const post = new Post({
                title,body
            });
            const savedPost =await post.save();
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