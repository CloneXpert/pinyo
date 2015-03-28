Template.newTeam.events({
  'submit form': function(e) {
    e.preventDefault();

    var team = {
      name: $(e.target).find('[name=name]').val(),
      address: $(e.target).find('[name=address]').val()
    };

    Meteor.call('newTeam', team, function (error, result) {
      if (error) {
        return alert(error.reason);
      }

      if(result.teamExists) {
        alert('A csapat már létre lett hozva');
      }

      Router.go('teamPage', {_id: result._id});
    });
  }
});
