const router = require('express').Router();
const {
  Post, User,
} = require('../db/models');

router.delete('/:id', async (req, res) => {
  const currentUserId = req.session.userid;
  const postId = req.params.id;
  const postInBase = await Post.findOne({ where: { id: postId } });
  const userIdByPostData = await Post.findOne({ where: { id: postId }, attributes: ['user_id'] });
  const userIdByPost = userIdByPostData.dataValues.user_id;
  if (currentUserId === userIdByPost) {
    await postInBase.destroy();
    return res.send(200);
  }
});

module.exports = router;
