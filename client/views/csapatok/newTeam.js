Template.newTeam.events({
  'submit form': function(e) {
    e.preventDefault();

    var team = {
      name: $(e.target).find('[name=name]').val(),
      address: $(e.target).find('[name=address]').val()
    };

    team._id = Teams.insert(team);
    Router.go('teamPage', team);
  }
});
