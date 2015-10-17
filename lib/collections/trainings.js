Trainings = new Meteor.Collection("trainings");

Schemas.Trainings = new SimpleSchema({
  user: {
    type: String,
    regEx: /^[a-z0-9A-z .]{3,30}$/,
    index: true,
    optional: true,
    autoform: {
      omit: true
    },
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
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    autoform: {
      omit: true
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true,
    autoform: {
      omit: true
    },
  }
});

Trainings.allow({
  insert: function(doc) { return true; },
  remove: function(doc) { return true; }
});
