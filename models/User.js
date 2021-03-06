const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unqiue: true, required: true, trim: true},
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true, //true so the friendCOunt will be displayed
    },
    id: false,
  }
);

// Create a virtual property friendCount that will retrieve the length og the user's friends array field (above) on query
userSchema
  .virtual('friendCount')
  .get(function() {
    return this.friends.length //include .this?
});



// Initialize the User model
const User = model('User', userSchema);

//export User
module.exports = User;
