Trainings = new Meteor.Collection("trainings");

Schemas.Trainings = new SimpleSchema({
  title: {
    type: String,
  },
  location: {
    type: String,
    label: "Cím",
  },
  periodStart: {
    type: Date,
    label: "Edzés kezdete",
    optional: true
  },
  periodEnd: {
    type: Date,
    label: "Edzés vége",
    optional: true
  }
});
