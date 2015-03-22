Meteor.publish('seasons', function() {  return Seasons.find(); });
Meteor.publish('teams', function() {  return Teams.find(); });
Meteor.publish('rounds', function() {  return Rounds.find(); });
