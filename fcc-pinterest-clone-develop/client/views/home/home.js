Template.home.onCreated(function () {
    var instance = this;
    instance.pins = new ReactiveVar([]);
    Meteor.call('mostFavoritePins', function(err, pins) {
        instance.pins.set(pins);
    });
});

Template.home.helpers({
    pins: function() {
        return Pins.find({}, {sort: {totalFavored: -1}, limit: 20}).fetch();
    }
});
