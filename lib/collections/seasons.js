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
  division: {
    type: Number,
    label: "Osztály"
  },
  group: {
    type: Number,
    label: "Csoport"
  },
  periodStart: {
    type: Date,
    label: "Szezon kezdete",
    optional: true
  },
  periodEnd: {
    type: Date,
    label: "Szezon vége",
    optional: true
  }
});

Seasons.allow({
  insert: function(season) { return true; }
});
