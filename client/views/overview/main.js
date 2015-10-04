myTeamName = "Morgan Stanley SK I.";

Template.registerHelper('formatDateWithTime', function(date) {
  return moment(date).format('MMMM Do, H:mm');
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do');
});

Template.registerHelper('Schemas', Schemas);
