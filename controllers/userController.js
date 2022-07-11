const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  //add new method: PUT to update a user by its _id


  //add new method: DELETE to remove a user by its _id

  //===============================================================
  //endpoint for two below: /api/users/:userId/friends/:friendId - will route to use this method
  //===============================================================
  //add new method: POST to add a new friend to a user's friend list

  //add new method: DELETE to remove a friend from a user's friend list

};



