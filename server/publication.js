Meteor.publish("training", function(id){
  return Trainings.find(id);
});

Meteor.publish("location", function(id){
  return Locations.find(id);
});

Meteor.publish("userProfile", function(id){
  return Meteor.users.find(id);
});

Meteor.publish('season', function(seasonId) {
  return Seasons.find({season:seasonId});
});

Meteor.publish("availableLocations", function(){
  return Locations.find({});
});

Meteor.publish("activeTrainings", function(){
  return Trainings.find({});
});

Meteor.publish("userProfiles", function(){
  return Meteor.users.find({}, {fields: {_id: 1, profile: 1, username: 1}});
});

Meteor.publish('seasons', function() {
  return Seasons.find();
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
