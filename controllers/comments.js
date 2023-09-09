 //import th model
const Comment = require("../models/CommentSchema");
const PostSchema = require("../models/PostSchema");

//define route handler

exports.createComment = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {post,user,body} = req.body;
            const newcomment = new Comment({
                post,user,body
            });
            // const savedPost =await post.save();
            const savedcomment = await newcomment.save();
            // insert comment at that post
            const posth = await PostSchema.findByIdAndUpdate(post,{$push: { comments: savedcomment._id}},{new:true})
            .populate("comments").exec();
            res.status(200).json(
                {
                    message:'Entry Created Successfully',
                    post:posth
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