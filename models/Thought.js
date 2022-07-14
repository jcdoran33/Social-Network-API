const { Schema, model } = require('mongoose');
// const Reaction = require('./Reaction'); // commented this out
//added new line to import reactionSchema
const reactionSchema  = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    username:  //not sure if this should just be username: [User]
      {
        type: String,
        required: true,
        ref: 'User'
      }
    ,
    reactions: [reactionSchema], //added reactionSchema here instead of Reaction
  
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual reactionCount - number of reaction to given thought
thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length; //returns the length of the reactions array
  });

// Initialize our Video model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
