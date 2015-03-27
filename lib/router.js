Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    Meteor.subscribe('seasons');
    Meteor.subscribe('teams');
    Meteor.subscribe('rounds');
    return;
  }
});

Router.map(function() {
  this.route('main', {path: '/'});

  this.route('teamPage', {
    path: '/csapatok/:_id',
    data: function() {
      return Teams.findOne(this.params._id);
    }
  });

  this.route('newTeam', {
    path: 'bekuldes'
  });
});
