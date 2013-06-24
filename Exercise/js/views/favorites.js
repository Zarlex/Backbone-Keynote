define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/ytPreview',
    'text!templates/start/favorites.html'
], function($, _, Backbone, FavoriteView, FavoritesTemplate){

    var FavoritesView = Backbone.View.extend({

        //define the classname which should be added to the created tag
        className:"favorites",

        initialize:function(vars){
            //TODO bind add eventlistener on collection
        },

        render: function(){
            //TODO Render template and fetch favorites collection
            return this;
        },

        addOne: function(model){
            //TODO -v-
            //1. remove default text and
            //2. create new favorite view and pass model as parameter
            //3. append view
        }

    });

    return FavoritesView;

});