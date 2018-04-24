Meteor.methods({
    updateUserProfile: function (doc) {
        Meteor.users.update(Meteor.userId(), {
            $set: {
                profile: doc
            }
        });
    }
});
