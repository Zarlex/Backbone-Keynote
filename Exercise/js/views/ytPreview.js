define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/start/ytPreview.html'
], function($, _, Backbone,ItemTemplate){

    var YtPreviewView = Backbone.View.extend({

        //set tagName of view
        tagName:"li",

        //define the classname which should be added to the created tag
        className:"yt-preview",

        //Bind jQuery events like click, submit, hover, ...
        events: {
            'click':"showDetails"
        },

        initialize: function(){
           //TODO Listen on remove event of model and remove this view
        },

        render: function(){
            //TODO -v-
            //1. Render template with underscore
            //2. Pass the model to the template
            return this;
        },

        showDetails:function(ev){
            ev.preventDefault();
            //TODO Trigger Event "show:video:details" to open the detailsview (startview is listening to it)
        },

        //TODO Overwrite backbone remove implementation with an own one
        //Unbind all events and then fade out
        remove: function(){

        }

    });

    return YtPreviewView;

});