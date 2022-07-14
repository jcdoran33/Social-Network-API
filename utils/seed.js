//import connection
const connection = require('../config/connection');
//import the models
// const { User, Thought, Reaction } = require('../models');
const { User, Thought } = require('../models');
//import data sets from data.js
const { users, thoughts } = require('./data');

// Connect to the database
connection.on('error', (err) => err);

// Once we are connected to the databse, insertMany for User and Thought
connection.once('open', async () => {
    //first, delete or rest the colelctions User and Thought
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({}); //unsure if this is needed

    // then, insert many for the collections
    await User.insertMany(users);
    await Thought.insertMany(thoughts);
    await Reaction.insertMany(reactions); //unsure if this is needed
});