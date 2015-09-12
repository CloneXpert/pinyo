Rounds = new Meteor.Collection("rounds");

Rounds.allow({
  insert: function(round) { return true; }
});
