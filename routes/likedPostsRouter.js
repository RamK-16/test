/* eslint-disable camelcase */
const router = require('express').Router();
const {
  Post, User, Liked,
} = require('../db/models');
router.get('/', async (req, res) => {
  const currentUserId = req.session.userid;
  const likedPosts = await Post.findAll({
    include: [{
      model: User,
    }, {
      model: User, as: 'userLike', where: { id: currentUserId },
    }],
    order: [['id', 'ASC']],
  });
  console.log('=======>', likedPosts);
  res.render('partials/likedPosts', { likedPosts });
});
router.post('/:id', async (req, res) => {
  // console.log('asasdfasdfasd');
  if (req.session.userid) {
    const post_id = req.params.id;
    const user_id = req.session.userid;
    const checkLiked = await Liked.findOne({ where: { user_id, post_id } });
    if (checkLiked) {
      return res.send(500);
    }
    const newLiked = await Liked.create({
      user_id,
      post_id,
    });
    return res.send(200);
  }
  res.send(401);
});

module.exports = router;
