Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    Meteor.subscribe('teams');
    Meteor.subscribe('rounds');
    return;
  }
});

Router.map(function() {
  this.route('main', {path: '/'});

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
