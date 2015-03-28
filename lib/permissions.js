isManager = function (userId) {
  return Meteor.users(userId).isManager;
}
