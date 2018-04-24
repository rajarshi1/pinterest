Template.user.onCreated(function () {
    var instance = this;
    instance.autorun(function () {
        instance.userId = instance.data;
        instance.activeView = new ReactiveVar('all');
    });
});

Template.user.onRendered(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        var container = $('.grid');
        var grid = container.masonry({
            itemSelector: '.grid-item',
            gutter: 10,
            percentPosition: true
        });

        grid.masonry('reloadItems');
        grid.masonry('layout');
    });
});

Template.user.helpers({
    user: function () {
        return Meteor.users.findOne(Template.instance().userId);
    },
    pins: function () {
        return Pins.find({userId: Template.instance().userId}, {sort: {creationDate: -1}}).fetch();
    },
    favoratePins: function () {
        var favs = Favorites.find({userId: Template.instance().userId}).fetch();
        var pinIds = _.pluck(favs, 'pinId');
        return Pins.find({_id: {$in: pinIds}}).fetch();
    }
});
