const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("Like",LikeSchema);