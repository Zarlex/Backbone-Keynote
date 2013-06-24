define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/start'
], function($, _, Backbone, StartView){

    var AppRouter = Backbone.Router.extend({

        //TODO Set routes
        routes: {

        },


        start: function(){
            //TODO Render startview and append it to the dom
        }

    });

    var initialize = function(){
        new AppRouter();

        //Initialize Bachbone routing and hashchangeevents
        //Call this function only once
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});