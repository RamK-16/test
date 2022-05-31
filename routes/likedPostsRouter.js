const router = require('express').Router();
const {
  Post, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.userid) {
    // console.log(reqid);
    // const currentPost = await Post.findOne({ where: { id: reqid }, raw: true });
    // console.log('-------------------------------->', currentPost.user_id);
    // if (currentPost.user_id === req.session.userid) {
    //   return res.render('partials/updatePost', currentPost);
    // }
    // res.send(401);
    res.render('partials/likedPosts');
  }
});

module.exports = router;
