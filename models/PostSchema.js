const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true

    },
   body:{
        type: String,
        required:true

    },
    likes:[{
        type:mongoose.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{
        type:mongoose.Types.ObjectId,
        ref:"Comment"
    }],
  
   
})
module.exports = mongoose.model("Post",PostSchema);