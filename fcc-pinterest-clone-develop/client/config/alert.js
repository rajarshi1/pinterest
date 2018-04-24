Meteor.startup(function () {
    sAlert.config({
        effect: 'jelly',
        position: 'top-right',
        timeout: 5000,
        html: false,
        stack: true,
        offset: 0
    });
});