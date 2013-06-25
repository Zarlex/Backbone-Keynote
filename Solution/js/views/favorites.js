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
            //bind add eventlistener on collection
            this.collection.on("add",this.addOne,this);
        },

        render: function(){
            //Render template and fetch favorites collection
            this.$el.append(_.template(FavoritesTemplate));
            this.collection.fetch();
            return this;
        },

        addOne: function(model){
            //remove default text and append a new favoriteview
            this.$el.find(".default-text").remove();
            var favoriteView=new FavoriteView({model:model});
            this.$el.find(".favorite-set").append(favoriteView.render().$el);
        }

    });

    return FavoritesView;

});