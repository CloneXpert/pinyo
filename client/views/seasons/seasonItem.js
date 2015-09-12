Template.seasonItem.helpers({
  teams: function () {
    return Teams.find();
  }
});

Template.seasonItem.events({
  "click .activateSeason": function(event, template){
    // TODO: need a better way of doing this
    id = location.href.split('/').pop();
    Meteor.call('setActiveSeason', id, function(error, id) {
      console.log("beallitva");
    });
  }
});
