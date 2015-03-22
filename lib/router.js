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

Router.route('/', {name: 'main'});
