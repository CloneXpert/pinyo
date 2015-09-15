Template.enemyTeam.helpers({
  team: function() {
    team = Teams.findOne({_id: Session.get("enemyTeamId")});
    return team;
  },

  winRateFormatted: function() {
    if(this.winRate) {
      return  +(Math.round(this.winRate * 100  + "e+2")  + "e-2") + "%";
    }
  }
});
