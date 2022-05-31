const router = require('express').Router();
const {
  Post, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.userid) {
    return res.render('./partials/addPost');
  }
  return res.send(500);
});
router.post('/', async (req, res) => {
  if (req.session.userid) {
    const id = req.session.userid;
    const title1 = req.body.text;
    // console.log(title1);
    const newPost = await Post.create({
      title: title1,
      user_id: id,
    });
    return res.send(200);
  }
  return res.send(500);
});
module.exports = router;
