const express=require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/posts');
const { createComment } = require('../controllers/comments');
const { LikePost, UnlikePost } = require('../controllers/likes');


router.post('/createComment',createComment);
router.post('/createPost',createPost);
router.get('/posts',getAllPosts);
router.post('/like',LikePost);
router.put('/unlikepost',UnlikePost);

module.exports=router;