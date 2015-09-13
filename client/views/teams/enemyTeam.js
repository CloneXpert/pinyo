Template.enemyTeam.helpers({
  team: function() {
    team = Teams.findOne({_id: Session.get("enemyTeamId")});
    return team;
  }
});
