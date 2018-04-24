Template.navigation.events({
    'click a[data-logout]': function (e) {
        e.preventDefault();
        AccountsTemplates.logout();
        Router.go('login');
    },
    'submit [data-search]': function (e) {
        e.preventDefault();
        Router.go('search', {
            searchQuery: e.target.query.value
        })
    }
});
