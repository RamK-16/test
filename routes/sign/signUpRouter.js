const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.render('sign/signUp');
});
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  // console.log(name, email, password);
  if (name && email && password) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.send(401);
    }
    const user1 = await User.create({
      ...req.body,
      password: await bcrypt.hash(password, 10),
      role_id: 2,
    });
    req.session.userid = user1.id;
    req.session.username = user1.name;
    req.session.useremail = user1.email;
    req.session.userrole = user1.role_id;
    return res.send(200);
  }

  return res.send(401);
});

module.exports = router;
