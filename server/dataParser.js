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
      var address;
      if(!part[1]) {
        // a Csepeli Vállalkozók Asztalitenisz Egyesülete II, III-nal nincs ')'
        // gyors megoldaskent most csak 19.-nel vagunk
        part =  split[1].split("19.");
        address = part[0] + "19.";
      } else {
        address = part[0]+")";
      }
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
          address: address,
          matchDay: matchday,
          matchTime: kezdes
        }
        //console.log("Jateknap: " + team.matchDay + " kezdes: " + team.matchTime);
        teams.push(team);
      }
    }
  });

  var len = playersRaw.teams.length;
  for(i=0;i<len;i++) {
    playersList = [];
    if(playersRaw.players[i]) {
      _.each(playersRaw.players[i].split(","), function(player) {
        playersList.push({ name: player.trim()});
      });
    }

    if(playersRaw.teams[i] && playersList) {
      var teamToExtend = _.find(teams, function(team) {
        return playersRaw.teams[i] === team.name;
      });
      if(teamToExtend) {
        _.extend(teamToExtend, { players: playersList});
      } else {
        console.log(playersRaw.teams[i] + " not found.");
      }
      //console.log(JSON.stringify(teams[i],null,2));
    }
  }

  //add placeholder when a match is not taking place
  teams.push({
    name: "x",
    address: "-",
    matchDay: 0,
    matchTime: "0.0"
  });
  return teams;
}

parseRounds = function() {
  var maxNumOfRounds = 15;
  var matchesPerRound = 8;
  var rounds = [];
  var firstMatch = new Date(2015,8,7,0,0,0,0);
  var matchTime = firstMatch;
  var matchNum = 0;
  for(var roundNum = 1;roundNum<=maxNumOfRounds;roundNum++) {
    //console.log(matchTime);
    var round = {
      startsOn: new Date(matchTime),
      num: roundNum
    };
    var matches = [];
    for(matchNum=0; matchNum < 8; matchNum++) {
      var stage1 = roundsRaw.matches[(roundNum - 1) * matchesPerRound + matchNum].split(" - ");
      var team1 = stage1[0];
      var team2 = stage1[1];
      var match = {};
      if(stage1[1]) {
        var i = stage1[1].search(/\d\d?:/);
        if(i!==-1) {
          team2 = stage1[1].substr(0, i-1);
          var stage2 = stage1[1].match(/\d\d?:\d\d?/);
          var scores = stage2[0].split(":");
          var team1score = scores[0];
          var team2score = scores[1];
          match = {
            homeTeamName: team1,
            awayTeamName: team2,
            homeTeamScore: team1score,
            awayTeamScore: team2score,
          };
        } else {
          match = {
            homeTeamName: team1,
            awayTeamName: team2,
          };
        }
        matches.push(match);
        //console.log(JSON.stringify(match, null, 2));
      }
    }
    _.extend(round, {matches: matches});
    matchTime.setDate(matchTime.getDate()+7);
    //console.log(JSON.stringify(round, null, 2));
    rounds.push(round);
  };
  return rounds;
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
