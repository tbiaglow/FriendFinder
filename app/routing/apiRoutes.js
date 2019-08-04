var path = require('path');
var friends = require("../data/friends.js");

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
var newFriend = req.body;
console.log(newFriend);

var difference = []
for (i = 0; i < friends.length; i++) {
    for (j = 0; j < friends[i].scores.length; j++) {
        difference[i] += Math.abs(friends[i].scores[j] - newFriend.scores[j])
    }
}
var min = difference[0];
var minIndex = 0;

for (var i = 1; i < difference.length; i++) {
    if (difference[i] < min) {
        minIndex = i;
        min = difference[i];
    }
}

match = friends[minIndex];
friends.push(newFriend);
res.json(match);
});
}