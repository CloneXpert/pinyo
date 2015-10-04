//Template.registerHelper("availableLocations", function(){
Template.newTrainingForm.helpers({
  availableLocations: function() {
    var locations = [];
    _.each(Locations.find().fetch(), function(location) {
      locations.push({label: location.name, value: location._id});
    });
    return locations;
  }
});

Template.newTrainingForm.events({
  'submit form': function(event, template){
    event.preventDefault();
    console.log("submitted");
  }
});
