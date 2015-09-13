myTeamName = "Morgan Stanley SK I.";

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('LLLL');
});

Template.registerHelper('Schemas', Schemas);
