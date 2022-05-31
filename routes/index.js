const router = require('express').Router();
const { Role, User, Post } = require('../db/models');

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    include: {
      model: User,
    },
    order: [['id', 'ASC']],
  });
  // console.log('===================', JSON.parse(JSON.stringify(posts)));
  res.render('index', { posts });
});

module.exports = router;
