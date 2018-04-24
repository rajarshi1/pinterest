Pins = new Meteor.Collection('pins');
Pins.attachSchema(Schema.Pins);
Pins.initEasySearch('tags', {limit: 20});
