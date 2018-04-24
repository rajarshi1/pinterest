Template.settings.helpers({
    schema: function () {
        return Schema.UserProfile;
    }
});

AutoForm.hooks({
    updateUserForm: {
        onSuccess: function () {
            sAlert.success('The settings have been saved!');
        },
        onError: function (type, error) {
            sAlert.error('oh no! A scary error appeared so we could not save your settings :( "' + error + '"');
        }
    }
});
