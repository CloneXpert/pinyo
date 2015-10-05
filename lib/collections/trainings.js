Trainings = new Meteor.Collection("trainings");

Schemas.Trainings = new SimpleSchema({
  location: {
    type: String,
    label: "Helyszín",
  },
  periodStart: {
    type: Date,
    label: "Edzés kezdete",
  },
  duration: {
    type: Number,
    label: "Tervezett órák száma",
    optional: true
  }
});

Trainings.allow({
  insert: function(doc) { return true; }
});
