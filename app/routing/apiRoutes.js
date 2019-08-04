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
    for (i = 0; i < data.scores.length; i++) {
        difference[i] += Math.abs(friends.scores[i] - newFriend.scores[i])
    }
    var min = difference[0];
    var minIndex = 0;

    for (var i = 1; i < difference.length; i++) {
        if (difference[i] < max) {
            minIndex = i;
            min = difference[i];
        }
    }
}

friends.push(newFriend);
res.json(newFriend);
});
}