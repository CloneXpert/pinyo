Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    Meteor.subscribe('seasons');
    return;
  }
});

Router.map(function() {
  this.route('main', {
    path: '/',
    waitOn: function() {
      Meteor.subscribe("rounds");
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
      Meteor.subscribe('round', this.params._id);
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
