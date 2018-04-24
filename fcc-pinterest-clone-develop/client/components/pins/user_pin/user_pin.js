Template.userPin.onCreated(function() {
    var instance = this;
    var id = Template.currentData().userId;
    instance.user = new ReactiveVar(Meteor.users.findOne(id));
});

Template.userPin.helpers({
    user: function() {
        return Template.instance().user.get();
    }
});
