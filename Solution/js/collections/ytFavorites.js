define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/ytItem',
    'BackboneLocalStorage'
], function ($, _, Backbone, YtItemModel) {
    var YtFavoritesCollection = Backbone.Collection.extend({

        //Overwrite the basic Backbone sync implementation
        //to save collection into localstorage instead on a server
        localStorage: new Backbone.LocalStorage("Favorites"),

        //Define the model of every entry of the collection
        model: YtItemModel

    });

    return YtFavoritesCollection;
});