Template.playerFinder.helpers({
  activeTrainings: function() {
    return Trainings.find({});
  },
  locationName: function(id) {
    var location = Locations.findOne(id);
    if(location) {
      return location.name;
    }
  }
});
