var title = 'Pinterest clone';

Router.configure({
    layoutTemplate: 'defaultLayout',
    progress: true,
    title: title
});

Router.plugin('ensureSignedIn', {
    except: ['login']
});

Router.route('/login', {
    name: 'login',
    title: title + ' - Authenticate'
});

Router.route('/', {
    name: 'home',
    title: title + ' - Home',
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/search/:searchQuery', {
    name: 'search',
    title: function() {
        return title + ' - Results for "' + this.params.searchQuery + '"'
    },
    data: function() {
        return this.params.searchQuery;
    },
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/user/:_id', {
    name: 'user',
    title: title + ' - User\'s profile',
    data: function() {
        return this.params._id;
    },
    waitOn: function () {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images'),
            Meteor.subscribe('favorites'),
            Meteor.subscribe('users')
        ];
    }
});

Router.route('/new', {
    name: 'newPin',
    title: title + ' - New pin',
    waitOn: function() {
        return [
            Meteor.subscribe('pins'),
            Meteor.subscribe('images')
        ];
    }
});

Router.route('/settings', {
    name: 'settings',
    title: title + ' - Settings'
});
