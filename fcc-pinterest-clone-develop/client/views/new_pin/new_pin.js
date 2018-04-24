AutoForm.hooks(
    {
        'insertPinForm': {
            onSuccess: function () {
                Router.go('user', {_id: Meteor.userId()});
            },
            onError: function (type, error) {
                sAlert.error('oh no! A scary error appeared so we could not save your pin :( "' + error + '"');
            }
        }
    });