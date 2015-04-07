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
  }
});
