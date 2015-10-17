Trainings = new Meteor.Collection("trainings");

Schemas.Trainings = new SimpleSchema({
  user: {
    type: String,
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      afFieldInput: {
        type: "String",
        omit: true
      }
    }
  },
  location: {
    type: String,
    label: "Helyszín",
  },
  periodStart: {
    type: Date,
    label: "Edzés kezdete",
    optional: true
  },
  duration: {
    type: Number,
    label: "Tervezett órák száma",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
});

Trainings.allow({
  insert: function(doc) { return true; },
  remove: function(doc) { return true; }
});
