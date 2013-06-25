define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/start'
], function($, _, Backbone, StartView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Default rule
            '*action': 'start'
        },

        //Render startview and append it to the dom
        start: function(){
           $("#app").append(new StartView().render().$el);
        }

    });

    var initialize = function(){
        new AppRouter();

        //Initailise Bachbone routing and hashchangeevents
        //Call this function only once
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});