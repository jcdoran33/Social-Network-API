const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  //need to add new routes here once created
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser);


// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addNewFriend)
.delete(removeFriend);

module.exports = router;
