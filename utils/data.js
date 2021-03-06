// seed data for users
const users = [
    { username: "user1", email: "user1@email.com" },
    { username: "user2", email: "user2@email.com" },
    { username: "user3", email: "user3@email.com" },
    { username: "user4", email: "user4@email.com" },
    { username: "user5", email: "user5@email.com" },
];
// seed data for thoughts
const thoughts = [
    { thoughtText: "Today is a good day!", username: "user1" },
    { thoughtText: "I'm hungry.", username: "user2" },
    { thoughtText: "Soccer is my favorite sport.", username: "user3" },
    { thoughtText: "I enjoy cooking.", username: "user4" },
    { thoughtText: "I love going to the movies.", username: "user5" },
    { thoughtText: "Exercise is my favorite.", username: "user1" },
    { thoughtText: "My dog ate my homework!", username: "user2" },
    { thoughtText: "I can't wait for the weekend.", username: "user3" },
    { thoughtText: "I hope there is no rain this week.", username: "user4" },
    { thoughtText: "I'm tired.", username: "user5" },
    { thoughtText: "Can't wait to see everyone tomorrow!", username: "user1" },
];

// seed data for reactions
const reactions = [
    { reactionBody: "I totally agree!", username: "user1" },
    { reactionBody: "I think so, too", username: "user2" },
    { reactionBody: "I would have to disgree here", username: "user3" },
    { reactionBody: "That sounds terrible", username: "user4" },
    { reactionBody: "Hope everything goes well with that!", username: "user5" },
    { reactionBody: "This sounds great, can I join?", username: "user1" },
    { reactionBody: "I'm not sure if I understand you'", username: "user2" },
];




//export everything
module.exports = { users, thoughts, reactions};