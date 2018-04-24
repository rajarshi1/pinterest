Images = new FS.Collection('images', {
    stores: [new FS.Store.GridFS('images', [])]
});

Images.allow({
    insert: function (userId, doc) {
        return !_.isUndefined(userId) && doc.isImage();
    },
    update: function(userId, doc) {
        return !_.isUndefined(userId);
    },
    download: function (userId) {
        return true;
    }
});
