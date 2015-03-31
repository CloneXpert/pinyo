Teams = new Meteor.Collection("teams");

Schemas.Teams = new SimpleSchema({
  name: {
    type: String,
    label: "Csapat név",
    max: 200
  },
  address: {
    type: String,
    label: "Cím",
  },
  matchDay: {
    type: Number,
    // firstOption: "Meccsnap",
    autoform: {
      options: function() {
        return _.map(['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'], function(day, i) {
          return { label: day, value: i}
        });
      }
    }
  },
  // TODO: make this datetime
  matchTime: {
    type: String
  },
  permanentVenue: {
    type: Boolean,
    label: "Pályaválasztási jog"
  },
  players: {
    type: Array
  },
  'players.$': {
    type: Object
  },
  'players.$.name': {
    type: String,
    label: "Játékos neve"
  },
  'players.$.phone': {
    type: String,
    label: "Telefonszám"
  },
  'players.$.userId': {
    type: String,
    label: "Felhasználónév"
  }
});

Teams.allow({
  update: function(userId, post) { return isManager(userId); },
  remove: function(userId, post) { return isManager(userId); }
})

Meteor.methods({
  registerNewTeam: function(teamAttr) {
    check(this.userId, String);
    check(teamAttr, {
      name: String,
      address: String,
      matchDay: Number
    });

    var teamWithSameName = Teams.findOne({name: teamAttr.name});
    if (teamWithSameName) {
      return {
        teamExists: true,
        _id: teamWithSameName._id
      }
    }

    var team = _.extend(teamAttr, {
      userId: Meteor.user()._id,
      submitted: new Date()
    });

    var teamId = Teams.insert(team);

    return {
      _id: teamId
    };
  }

});
