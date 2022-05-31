const router = require('express').Router();
const {
  Post, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  res.render('./partials/addPost');
});
router.post('/', async (req, res) => {
  const id = req.session.userid;
  const title1 = req.body.text;
  // console.log(title1);
  const newPost = await Post.create({
    title: title1,
    user_id: id,
  });
  return res.send(200);
});
module.exports = router;
