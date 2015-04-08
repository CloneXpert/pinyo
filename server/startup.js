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

  var morgan = Teams.insert({
    name: "Morgan Stanley SK",
    address: "VIII.kerület Elnök utca 1. - Joo pont",
    matchDay: 2,
    matchTime: "18:30",
    table: "JOOLA",
    ball: "DHS",
    rightForPermVenue: false,
    players: [
      { name:"Béla Tamás", id: "belat", license: "123"  },
      { name:"Dr. Bodon Ferenc", id:"bodonfe", license: "234" }
      /*
      "Csővári Dániel",
      "Galbáts Borisz",
      "Hirs Zoltán",
      "Dr. Kék László",
      "Nyilas Attila",
      "Pesti Pál",
      "Dominic Ward"
      */
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

  var round16 = Rounds.insert({
    startsOn: new Date(2015,00,19),
    num: 16,
    matches: [
      {
        homeTeam: morgan,
        awayTeam: dorsum,
        //startsOn: should be Date(2015,01,21) because morgan is at home and they play on Wed
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
        homeTeam: morgan,
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

  var kerII = Seasons.insert({
    region: "II-XII-XXI. kerületi",
    division: 2,
    group: 1,
    periodStart: new Date(2014,10,8),
    periodEnd: new Date(2015,05,18),
    teams: [morgan, dorsum, pingponghaz],
    rounds: [round16, round25, round26]
  });
});
