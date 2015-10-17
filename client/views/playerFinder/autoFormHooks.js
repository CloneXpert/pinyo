var formHooks = {
  before: {
    insert: function(doc) {
      if(Meteor.userId()) {
        doc.userId = Meteor.userId();
      }

      return doc;
    }
  },
  onSuccess: function (formType, doc) {
    Router.go('/');
    // Router.go('page',{_id: this.docId}); in case we want to go to update page directly
  }
}

AutoForm.addHooks('newTrainingForm', formHooks);
