Teams = new Meteor.Collection("teams");

Meteor.methods({
  newTeam: function(teamAttr) {
    check(this.userId, String);
    check(teamAttr, {
      name: String ,
      address: String
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
