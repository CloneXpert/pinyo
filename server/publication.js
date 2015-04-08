Meteor.publish('seasons', function() {  return Seasons.find(); });
Meteor.publish('season', function(seasonId) {  return Seasons.find({season:seasonId}); });

Meteor.publish('teams', function(seasonId) {
  check(seasonId, String);
  return Teams.find({season: seasonId});
 });

Meteor.publish('rounds', function(seasonId) {
  check(seasonId, String);
  return Rounds.find({season: seasonId});
});
