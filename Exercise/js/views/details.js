define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/start/details.html'
], function($, _, Backbone, DetailsTemplate){

    var DetailsView = Backbone.View.extend({

        //define the classname which should be added to the created tag
        className:"details",

        //Initialize jQuery event listener
        events:{
            'click .save-js':"save",
            'click .remove-js':"destroy",
            'click .close-js':"close"
        },

        initialize:function(vars){
            //TODO: -v-
            //1. If model of searchresult is already in the favoritcollection set it to favorite
            //2. Bind change eventlistener to model

        },

        render: function(){
            //TODO render view with the model attributes
            return this;
        },

        save: function(){
            //TODO -v-
            //1. set model attribute favorite to true and
            //2. save it into the favorites collection
        },

        destroy: function(){
            //TODO -v-
            //1. find model in the favorites collection and
            //2. remove it
            //3. set model attribute favorite to false
        },

        close:function(){
            //TODO -v-
            //1. remove view and
            //2. trigger close:video:details:event

        }

    });

    return DetailsView;

});