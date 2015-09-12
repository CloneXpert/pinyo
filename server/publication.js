Meteor.publish('seasons', function() {  return Seasons.find(); });
Meteor.publish('rounds', function() {  return Rounds.find(); });
Meteor.publish('teams', function() { return Teams.find(); });

Meteor.publish('season', function(seasonId) {
  return Seasons.find({season:seasonId});
 });

Meteor.publish('team', function(seasonId) {
  check(seasonId, String);
  var season = Seasons.findOne(seasonId);
  return Teams.find({_id: { $in: season.teams} });
 });

Meteor.publish('round', function(seasonId) {
  check(seasonId, String);
  return Rounds.find({season: seasonId});
});
