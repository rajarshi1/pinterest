Template.pinContainer.onCreated(function () {
    this.pins = new ReactiveVar();
});

Template.pinContainer.onRendered(function () {
    var instance = this;
    var container = this.$('.grid');
    instance.autorun(function () {
        instance.pins.set(Template.currentData().pins);
        container.imagesLoaded(function () {
            var grid = container.masonry({
                itemSelector: '.grid-item',
                gutter: 10,
                percentPosition: true
            });

            container.imagesLoaded(function () {
                grid.masonry('reloadItems');
                grid.masonry('layout');
            });
        });
    });
});

Template.pinContainer.helpers({
    pins: function () {
        return Template.instance().pins.get();
    },
    isFavorite: function () {
        var userId = Meteor.userId();
        return !_.isUndefined(Favorites.findOne({pinId: this._id, userId: userId}));
    },
    isMine: function () {
        return this.userId === Meteor.userId();
    },
    searchTag: function() {
        return {searchQuery: this}
    }
});

Template.pinContainer.events({
    'click [data-toggle-favorite]': function () {
        Meteor.call('toggleFavorite', this._id);
    },
    'click [data-delete]': function () {
        var id = this._id;
        var element = $('[data-id="' + id + '"]');
        element.confirmation(
            {
                placement: 'right',
                popout: true,
                onConfirm: function () {
                    Meteor.call('deletePin', id);
                    sAlert.info('The pin has been deleted. We salute it goodbye and may it rest in peace.');
                },
                onCancel: function () {
                    sAlert.info('The pin has not been deleted and it\'s still full of life!');
                }
            });
        element.confirmation('show');
    },
    'click [data-pin-image]': function() {
        sImageBox.open(this.url(), {
            originalHeight: false,
            originalWidth: false,
            animation: 'zoomIn'
        });
    }
});
