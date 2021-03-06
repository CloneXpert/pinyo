Meteor.publish('seasons', function() {  return Seasons.find(); });
//Meteor.publish('rounds', function() {  return Rounds.find(); });
//Meteor.publish('teams', function() { return Teams.find(); });

Meteor.publish('season', function(seasonId) {
  return Seasons.find({season:seasonId});
});

Meteor.publish('teams', function(seasonId) {
  check(seasonId, String);
  var season = Seasons.findOne(seasonId);
  if(season) {
    return Teams.find({_id: { $in: season.teams} });
  }
});

Meteor.publish('rounds', function(seasonId) {
  check(seasonId, String);
  debugger;
  var season = Seasons.findOne(seasonId);
  if(season) {
    return Rounds.find({_id: { $in: season.rounds} });
  }
});
