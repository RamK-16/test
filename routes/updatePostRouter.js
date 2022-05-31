const router = require('express').Router();
const {
  Post, User,
} = require('../db/models');

router.get('/:id', async (req, res) => {
  if (req.session.userid) {
    const reqid = Number(req.params.id);
    // console.log(reqid);
    const currentPost = await Post.findOne({ where: { id: reqid }, raw: true });
    console.log('-------------------------------->', currentPost.user_id);
    if (currentPost.user_id === req.session.userid || req.session.userid === 1) {
      return res.render('partials/updatePost', currentPost);
    }
    res.send(500);
  }
});
router.put('/Now', async (req, res) => {
  if (req.session.userid) {
    const { id, title, user_id } = req.body;

    console.log(id, title, user_id);
    const currentPost = await Post.findOne({ where: { id: +id } });
    const updatedPost = await Post.update({
      ...currentPost,
      title: title,
    }, {
      where: { id: +id },
    });
    return res.send(200);
  }
});
module.exports = router;
