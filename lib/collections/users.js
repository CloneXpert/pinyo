Meteor.methods({
  setActiveSeason: function(season) {
    if(!Meteor.user()) return;
    var profile = Meteor.user().profile;
    if(profile && profile.activeSeason === season) {
      return;
    }

    if(Seasons.findOne(season)) {
      var newProfile = _.extend(profile, {
        activeSeason: season
      });
      Meteor.users.update(Meteor.userId(),{$set: {profile:newProfile}});
    }
  }
});
