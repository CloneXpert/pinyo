
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('LLLL');
});

Template.rounds.helpers({
  rounds: function() {
    nextRound = Rounds.findOne({startsOn: {$gt: new Date()}});
    if(nextRound) {
      Session.setDefault('nextRoundId', nextRound._id);
    }
    return Rounds.find();
  },

  selectedRound: function () {
    return Session.equals('nextRoundId', this._id) ? 'selectedRound' : '';
  },

  teamName: function(teamId) {
    //check(teamId,'string');
    team = Teams.findOne({_id:teamId});
    return team && team.name;
  },
  matchStarts: function() {
    homeTeam = Teams.findOne({_id: this.homeTeam});
    if (homeTeam) {
      // TODO: this doesn't work for some reason... >_>
      moment.locale('hu');

      // console.log(moment.locale());
      var roundStart = Template.parentData().startsOn;
      matchTime = homeTeam.matchTime.split(":");
      return moment(roundStart)
      .add({days: homeTeam.matchDay, hours: matchTime[0], minutes: matchTime[1]});
    }
  },
  myMatch: function(){
    myTeam = Teams.findOne({name: "Morgan Stanley SK"});
    match = _.find(Template.parentData().matches, function(match) {
      return match.homeTeam === myTeam._id || match.awayTeam === myTeam._id;
    });
    if (match) {
      return "myMatch";
    }
  },
  myNextMatch: function () {
    selectedRoundId = Session.get('nextRoundId');
    if(Template.parentData()._id !== selectedRoundId) {
      return;
    }
    myTeam = Teams.findOne({name: "Morgan Stanley SK"});
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

      return "myNextMatch";
    }
  }
});

Template.rounds.events({
  'click .round': function(evt, target) {
    Session.set('nextRoundId', this._id);
  }
});

Template.enemyTeam.helpers({
  team: function() {
    team = Teams.findOne({_id: Session.get("enemyTeamId")});
    //console.log(team);
    return team;
  }
});
