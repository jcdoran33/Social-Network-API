const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  //need to add new routes here once created
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;
