resolveTeamsForRound = function(round) {
  console.log(round.num);
  _.each(round.matches, function(match){
    var hteam = Teams.findOne({name: match.homeTeamName});
    if(hteam)
    {
      match.homeTeam = hteam._id;
    } else {
      console.log("resolveTeamsForRound: "+match.homeTeamName);
    }
    var ateam = Teams.findOne({name: match.awayTeamName});
    if(ateam)
    {
      match.awayTeam = ateam._id;
    } else {
      console.log("resolveTeamsForRound: "+match.awayTeamName);
    }
  });
}
