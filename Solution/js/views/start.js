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
            //Initialize new favorit Colelction
            this.favoritesCollection = new FavoritesCollection;

            //Initialise subviews
            this.searchView = new SearchView;
            this.favoritesView = new FavoritesView({collection:this.favoritesCollection});

            //Listen to events tiggered on the Backbone Object to show/close details subview
            Backbone.on("show:video:details",this.showDetails, this)
            Backbone.on("close:video:details",this.closeDetails, this)
        },

        render: function(){

            //Render template with underscore
            var template = _.template(StartTemplate);

            //Append rendered template to $el
            this.$el.append(template);

            //Append search subview
            this.$el.append(this.searchView.render().el);

            //Append favorite subview
            this.$el.append(this.favoritesView.render().el);

            //Always return this
            return this;
        },

        showDetails:function(model){

            //remove detailsview if there is an existing one
            if(this.detailsView)
                this.detailsView.remove();

            //Initialise details subview and
            //pass favorite collection and model of the event as parameter
            this.detailsView = new DetailsView({collection:this.favoritesCollection,model:model});

            //Append details view
            this.$el.append(this.detailsView.render().el);

            //Add class "details-shown" to animate the view to the left via css3 transitions
            this.$el.addClass("details-shown");

            //Listen on the css3 transition finished event and scroll the browser to the right (for mobile browsers)
            this.$el.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){
                window.scrollTo(550,0);
            })

        },

        closeDetails:function(){
            this.detailsView.remove();
            //Remove class that this view moves back to its original position
            this.$el.removeClass("details-shown")
        }

    });

    return StartView;

});