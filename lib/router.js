Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    Meteor.subscribe('seasons');
    return;
  }
});

Router.map(function() {
  this.route('playerFinder', {
    path: '/',
    waitOn: function() {
      Meteor.subscribe("activeTrainings");
      Meteor.subscribe("userProfiles");
      Meteor.subscribe("availableLocations");
    }
  });

  this.route('newTrainingForm', {
    path: '/edzes/uj',
    waitOn: function() {
      Meteor.subscribe("activeTrainings");
      Meteor.subscribe("availableLocations");
    },
    data: function() {
      return Locations.find();
    }
  });

  this.route('updateTrainingForm', {
    path: '/edzes/:_id/modositas',
    waitOn: function() {
      Meteor.subscribe("availableLocations");
      Meteor.subscribe("training", this.params._id);
    },
    data: function() {
      return Trainings.findOne(this.params._id);
    }
  });

  this.route('locationDetails', {
    path: '/helyszin/:_id',
    waitOn: function() {
      Meteor.subscribe("location", this.params._id);
    },
    data: function() {
      return Locations.findOne(this.params._id);
    }
  });

  this.route('userDetails', {
    path: '/jatekos/:_id',
    waitOn: function() {
      Meteor.subscribe("userProfile", this.params._id);
    },
    data: function() {
      return Meteor.users.findOne(this.params._id);
    }
  });

  this.route('rounds', {
    path: '/fordulok',
    waitOn: function() {
      if(Meteor.user() && Meteor.user().profile) {
        Meteor.subscribe("rounds", Meteor.user().profile.activeSeason);
        Meteor.subscribe("teams", Meteor.user().profile.activeSeason);
      } else {
        var defaultSeason = "kerIcsop2oszi";
        Meteor.subscribe("rounds", defaultSeason);
        Meteor.subscribe("teams", defaultSeason);
      }
    }
  });

  this.route('newTeamForm', {
    path: '/csapatok/uj'
  });

  this.route('teamPage', {
    path: '/csapatok/:_id',
    data: function() {
      return Teams.findOne(this.params._id);
    }
  });

  this.route('newSeasonForm', {
    path: '/szezon/uj'
  });

  this.route('seasonsList', {
    path: '/szezonok',
    waitOn: function() {
      Meteor.subscribe('seasons');
    }
  });

  this.route('seasonItem', {
    path: '/szezonok/:_id',
    waitOn: function() {
      Meteor.subscribe('rounds', this.params._id);
      Meteor.subscribe('teams', this.params._id);
      Meteor.subscribe('season', this.params._id);
    },
    data: function() {
      return Seasons.findOne(this.params._id);
    }
  })
});

var requireLogin = function() {
  if(!Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

//Router.before(requireLogin, {only: 'newTeamForm'})
