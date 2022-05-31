const router = require('express').Router();
const { Role, User, Post, Liked } = require('../db/models');

router.get('/', async (req, res) => {
  const currentUserId = req.session.userid;
  const posts = await Post.findAll({
    include: [{
      model: User,
    }, {
      model: User, as: 'userLike',
    }],
    order: [['id', 'ASC']],
  });
  console.log('===================', JSON.parse(JSON.stringify(posts)));
  return res.render('index', { posts });
});

module.exports = router;
