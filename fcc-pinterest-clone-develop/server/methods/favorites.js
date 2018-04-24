Meteor.methods({
    toggleFavorite: function (pinId) {
        var userId = Meteor.userId();
        var fav = Favorites.findOne({userId: userId, pinId: pinId});
        if (_.isUndefined(fav))
            Meteor.call('insertFavorite', pinId, userId);
        else
            Meteor.call('removeFavorite', fav)
    },
    insertFavorite: function (pinId, userId) {
        Favorites.insert({pinId: pinId, userId: userId});
        Pins.update(pinId, {$inc: {totalFavored: 1}});
    },
    removeFavorite: function (fav) {
        var pinId = fav.pinId;
        Pins.update(pinId, {$inc: {totalFavored: -1}});
        Favorites.remove(fav._id);
    }
});
