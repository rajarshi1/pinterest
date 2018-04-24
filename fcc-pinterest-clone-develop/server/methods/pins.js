Meteor.methods({
    insertPin: function (doc) {
        Schema.Pins.clean(doc);
        Pins.insert(_.extend(doc, {totalFavored: 0}));
    },
    deletePin: function(id) {
        var pin = Pins.findOne(id);
        if (!_.isUndefined(pin) && pin.userId === this.userId) {
            Favorites.remove({pinId: id});
            Pins.remove(id);
        }
    }
});
