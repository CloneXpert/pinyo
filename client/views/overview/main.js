myTeamName = "Morgan Stanley SK I.";

Template.registerHelper('formatDateWithTime', function(date) {
  return moment(date).format('LLLL');
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('LL');
});

Template.registerHelper('Schemas', Schemas);
