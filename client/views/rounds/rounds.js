Template.rounds.helpers({
  rounds: function() {
    /*nextRound = Rounds.findOne({sort: {num: 1}},{startsOn: {$gt: new Date()}});
    if(nextRound) {
      Session.setDefault('nextRoundId', nextRound._id);
    }*/
    return Rounds.find({}, {sort: {num: 1}});
  },

  myNextRound: function () {
    //return Session.equals('nextRoundId', this._id) ? 'myNextRound' : '';
  },

  selectedRound: function () {
    return Session.equals('selectedRoundId', this._id) ? 'active' : '';
  },

  matchStarts: function() {
    homeTeam = Teams.findOne(this.homeTeam);
    if (homeTeam) {
      // TODO: this doesn't work for some reason... >_>
      moment.locale('hu');

      // console.log(moment.locale());
      var roundStart = Template.parentData().startsOn;
      if(homeTeam.matchTime) {
        matchTime = homeTeam.matchTime.split(".");
        return moment(roundStart)
        .add({days: homeTeam.matchDay, hours: matchTime[0], minutes: matchTime[1]});
      } else{
        console.log("WTF - " + this.homeTeam);
      }
    }
  },

  doIHaveMatchInThisRound: function(){
    myTeam = Teams.findOne({name: myTeamName});
    if(myTeam) {
      match = _.find(Template.parentData().matches, function(match) {
        return match.homeTeam === myTeam._id || match.awayTeam === myTeam._id;
      });
      if (match) {
        return "myMatch";
      }
    }
  },

  myMatch: function(){
    if(this.homeTeamName === myTeamName || this.awayTeamName === myTeamName ) {
      return "myMatch";
    };
  },

  setEnemyTeam: function () {
    selectedRoundId = Session.get('selectedRoundId');
    if(Template.parentData()._id !== selectedRoundId) {
      return;
    }
    myTeam = Teams.findOne({name: myTeamName});
    if(!myTeam) {
      return;
    }
    match = _.find(Template.parentData().matches, function(match) {
      return match.homeTeam === myTeam._id || match.awayTeam === myTeam._id;
    });
    if(match) {
      Session.set("enemyTeamId",
      match.homeTeam === myTeam._id
      ? match.awayTeam
      : match.homeTeam);
    }
  },

  hasScores: function(){
    return this.homeTeamScore && this.awayTeamScore;
  },

  matchBetween: function(){
    //refer to dataParser.js - no team placeholder name
    if(this.homeTeamName === "x") {
      return "Idegen meccs elmarad - " + this.awayTeamName;
    } else if(this.awayTeamName === "x") {
      return this.homeTeamName + " - hazai meccs elmarad"
    } else {
      return this.homeTeamName + " - " + this.awayTeamName;
    }
  },

  matchIsNotSkipped: function() {
    return !(this.homeTeamName === "x" || this.awayTeamName === "x");
  },
});

Template.rounds.events({
  'click .round': function(evt, target) {
    Session.set('selectedRoundId', this._id);
  }
});
