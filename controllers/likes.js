const Like = require('../models/LikesSchema');
const Post = require('../models/PostSchema');

exports.LikePost = async(req,res) =>{
    try{

        const {post,user} = req.body;
        // const liked = await Like.find({post:post,user:user});

        // if(liked)
        // {
        //     res.status(500).json({
        //         message:"You already liked this post"
        //     })
        // }
        // else{
            const newlikes = await Like.create({post,user});

            const updatedpost = await Post.findByIdAndUpdate(post,{$push: {likes:newlikes._id}},{new:true}).populate("likes").exec();


            res.status(200).json({
                message:"post has been liked",
                post:updatedpost
            })
        // }
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(400)
        .json({
            success:false,
            data:"Error occured while liking the post",
            message:err.message,
        })
    }
}

exports.UnlikePost=async(req,res)=>{
    try{
    const {post,like} = req.body;
    // post or like dono ki id use krege

    const newlikes = await Like.findByIdAndDelete(like);

    const updatedpost = await Post.findByIdAndUpdate(post,{$pull: {likes:newlikes._id}},{new:true}).populate("likes").exec();

    res.status(200).json({
        message:"post has been unliked",
        post:updatedpost
    })
    }
    catch{
        res.status(500).json({
            message:"Problem while unliking the post"
            // ,post:updatedpost
        })
    }

}