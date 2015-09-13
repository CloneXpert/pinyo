Meteor.startup(function () {
  Meteor.methods({
    removeAll: function() {
      Seasons.remove({});
      Teams.remove({});
      Rounds.remove({});
    }
  });

  Seasons.remove({});
  Teams.remove({});
  Rounds.remove({});

   var kerIcsop2oszi = {
     _id: "kerIcsop2oszi",
     name: "II-XII-XXI. kerületi Első osztály I. csoport",
     region: "II-XII-XXI. kerületi",
     division: 1,
     group: 2,
     periodStart: new Date(2015,8,7),
     periodEnd: new Date(2016,11,14),
     teams: [],
     rounds: []
   };

   var teams = parseTeamDetails();
   _.each(teams, function(team){
     kerIcsop2oszi.teams.push(Teams.insert(team));
   });

   var rounds = parseRounds();
   _.each(rounds, function(round){
     resolveTeamsForRound(round);
     kerIcsop2oszi.rounds.push(Rounds.insert(round));
   });

   Seasons.insert(kerIcsop2oszi);
 /*
  var morgan2 = Teams.insert({
    name: "Morgan Stanley SK 2",
    address: "VIII.kerület Elnök utca 1. - Joo pont",
    matchDay: 3,
    matchTime: "18:30",
    table: "JOOLA",
    ball: "DHS",
    rightForPermVenue: false,
    players: [
      { name:"Csővári Dani", id: "dani", license: "111"  },
      { name:"Pesti Pál", id:"pestipal", license: "222" }
    ]
  });

  // my team implementation searches on name
  var morgan1 = Teams.insert({
    name: "Morgan Stanley SK 1",
    address: "VIII.kerület Elnök utca 1. - Joo pont",
    matchDay: 2,
    matchTime: "18:30",
    table: "JOOLA",
    ball: "DHS",
    rightForPermVenue: false,
    players: [
      { name:"Béla Tamás", id: "belat", license: "123"  },
      { name:"Dr. Bodon Ferenc", id:"bodonfe", license: "234" }
    ]
  });

  var dorsum = Teams.insert({
    name: "Dorsum SK",
    address: "Vhol",
    matchDay: 0,
    matchTime: "18:00",
    table: "JOOLA",
    ball: "DHS",
    rightForPermVenue: false,
    players: [
      {name: "Borovszky Tamás", id:"borov"},
      {name: "Fenesi Kinga", id: "fenesi"}
    ]
  });

  var pingponghaz = Teams.insert({
    name: "Pingponghaz",
    address: "Vhol",
    matchDay: 4,
    matchTime: "18:00",
    table: "JOOLA",
    ball: "DHS",
    rightForPermVenue: false,
    players: [
      {name: "A", id:"borov"},
      {name: "B", id: "fenesi"}
    ]
  });

  var dunakanyar = Teams.insert({
    name: "Dunakanyar Asztalitenisz SK",
    address: "XIV.kerület Róna utca 86-100. (Postás)",
    matchDay: 3,
    matchTime: "18:00",
    table: "Yasaka",
    ball: "Nittaku",
    rightForPermVenue: false,
    players: [
      {name: "Duna Bácsi", id:"dask1"},
      {name: "Kanyar Néni", id: "dask2"}
    ]
  });

  var barossgabor = Teams.insert({
    name: "Baross Gabor SK",
    address: "XIV.kerület Róna utca 86-100. (Postás)",
    matchDay: 3,
    matchTime: "18:00",
    table: "Yasaka",
    ball: "Nittaku",
    rightForPermVenue: false,
    players: [
      {name: "Duna Bácsi", id:"dask1"},
      {name: "Kanyar Néni", id: "dask2"}
    ]
  });

  var round16 = Rounds.insert({
    startsOn: new Date(2015,00,19),
    num: 16,
    matches: [
      {
        homeTeam: morgan1,
        awayTeam: dorsum,
        //startsOn: should be Date(2015,01,21) because morgan1 is at home and they play on Wed
        results: [
          { p1: "belat", p2:"borov", s1: 3, s2: 1},
          { p1: "bodonfe", p2: "fenesi", s1: 3, s2:0}
        ]
      }
    ]
  });

  var round25 = Rounds.insert({
    startsOn: new Date(2015,02,23),
    num: 25,
    matches: [
      {
        homeTeam: morgan1,
        awayTeam: pingponghaz
      }
    ]
  });

  var round26 = Rounds.insert({
    startsOn: new Date(2015,02,30),
    num: 26,
    matches: [
      {
        homeTeam: pingponghaz,
        awayTeam: dorsum
      }
    ]
  });

  var round3ker1 = Rounds.insert({
    startsOn: new Date(2015,8,21),
    num: 3,
    matches: [
      {
        homeTeam: morgan1,
        awayTeam: dunakanyar
      }
    ]
  });

  var round4ker1 = Rounds.insert({
    startsOn: new Date(2015,8,29),
    num: 4,
    matches: [
      {
        homeTeam: morgan1,
        awayTeam: barossgabor
      }
    ]
  });

  var kerIIcsop2tavasz = Seasons.insert({
    _id: "kerIIcsop2tavasz",
    region: "II-XII-XXI. kerületi Másodosztály II. csoport",
    division: 2,
    group: 2,
    periodStart: new Date(2014,10,8),
    periodEnd: new Date(2015,05,18),
    teams: [morgan2, dorsum, pingponghaz],
    rounds: [round16, round25, round26]
  });

  var kerIcsop2oszi = Seasons.insert({
    _id: "kerIcsop2oszi",
    region: "II-XII-XXI. kerületi Első osztály I. csoport",
    division: 1,
    group: 2,
    periodStart: new Date(2015,8,7),
    periodEnd: new Date(2016,11,14),
    teams: [morgan1, dunakanyar],
    rounds: [round3ker1, round4ker1]
  });
*/

});
