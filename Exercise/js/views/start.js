define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/search',
    'views/details',
    'views/favorites',
    'collections/ytFavorites',
    'text!templates/start/index.html'
], function($, _, Backbone, SearchView, DetailsView, FavoritesView, FavoritesCollection, StartTemplate){

    var StartView = Backbone.View.extend({

        //define the classname which should be added to the created tag
        className:"start",

        initialize:function(vars){
            //TODO -v-
            //1. Initialize new favorite Collection
            //2. Initialise Search and Favorite subviews
            //   Pass favorite collection as parameter to favorite subview
            //3. Listen to events show:video:details and clode:video:details
            //   triggered on the Backbone Object to show/close details subview
        },

        render: function(){
            //TODO -v-
            //1. Render template with underscore
            //2. Append rendered template to $el
            //3. Append search subview
            //4. Append favorite subview
            return this;
        },

        showDetails:function(model){
            //TODO -v-
            //1. remove detailsview if there is an existing one
            //2. Initialise details subview and
            //   pass favorite collection and model of the event as parameter
            //3. Append details view
            //4. Add class "details-shown" to animate the view to the left via css3 transitions
        },

        closeDetails:function(){
            //TODO -v-
            //1. remove detailsview
            //2. Remove class that this view moves back to its original position
        }

    });

    return StartView;

});