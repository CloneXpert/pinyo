parseTeamDetails = function() {
  teams = [];
  _.each(teamsRaw.teams, function(teamRaw) {
    var split = teamRaw.split(":");
    //console.log(split[0]+"#");
    if(split[1])
    {
      var part = split[1].split(")");
      //console.log(part2[0]+")"+"#");
      //console.log(part2[1]+"#");
      if(part[1]) {
        var datum = part[1].split(" ");
        var matchday = -1;
        switch(datum[1].trim()) {
          case "hétfő" : matchday=0; break;
          case "kedd" : matchday=1; break;
          case "szerda" : matchday=2; break;
          case "csütörtök" : matchday=3; break;
          case "péntek" : matchday=4; break;
        }
        var kezdes=datum[2];
        var team = {
          name: split[0].trim(),
          address: part[0]+")",
          matchDay: matchday,
          matchTime: kezdes
        }
        //console.log("Jateknap: " + team.matchDay + " kezdes: " + team.matchTime);
        teams.push(team);
      }
    }
  });

  var len = teams.length;
  for(i=0;i<len;i++) {
    playersList = [];
    if(playersRaw.players[i]) {
      _.each(playersRaw.players[i].split(","), function(player) {
        playersList.push({ name: player.trim()});
      });
    }

    if(teams[i] && playersList) {
      _.extend(teams[i], { players: playersList});
      console.log(JSON.stringify(teams[i],null,2));
    }
  }
  return teams;
}


//[{name: "A"},{name: "B"}] , [{players: [{name: "p1"},{name: "p2"}]}]
/*var extended = _.extend(teams, teamPlayersList);
_.each(teams, function (team) {
_.extend(team)
console.log(JSON.stringify(team));
});*/


/*
teamPlayersList={};
_.each(playersRaw.players, function(players) {
playersList = [];
_.each(players.split(","), function(player) {
playersList.push({ name: player.trim()});
});
teamPlayersList.push({ players: playersList});
//console.log(players);
});
*/
