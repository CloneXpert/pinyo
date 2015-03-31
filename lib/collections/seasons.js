Seasons = new Meteor.Collection("seasons");

Schemas.Seasons = new SimpleSchema({
  region: {
    type: String,
    label: "Régió",
  },
  league: {
    type: String,
    label: "Bajnokság"
  },
  class: {
    type: Number,
    label: "Osztály"
  },
  group: {
    type: Number,
    label: "Csoport"
  },
  periodStart: {
    type: Date,
    label: "Szezon kezdete"
  },
  periodEnd: {
    type: Date,
    label: "Szezon vége"
  },
  teams: {
    type: String,
    label: "Csapatok",
    autoform: {
      options: function() {
        return _.each(Teams.find({}, {name: 1}).fetch(), function() {
          return { label: name, value: _id};
        });
      }
    }
  }
});

Meteor.methods({
  createSeason: function(seasonAttr) {
    check(this.userId, String);

    var season = _.extend(seasonAttr, {
      userId: Meteor.user()._id,
      submitted: new Date()
    });

    var seasonId = Seasons.insert(season);

    return {
      _id: season
    };
  }

});
