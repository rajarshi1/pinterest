Meteor.publish('favorites', function() {
    return Favorites.find();
});
