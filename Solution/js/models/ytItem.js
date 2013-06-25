define([
    'jQuery',
    'Underscore',
    'Backbone'
], function ($, _, Backbone) {
    var YtItemModel = Backbone.Model.extend({

        //Set default model attributes
        defaults:{
            favorite:false,
            timestamp:new Date().getTime()
        },

        //validate method is called before model is saved
        //check if we have a valid ytid
        validate: function(attrs,options){

            if(attrs.id.length<10){
                return "YoutubeId must have a length of 11";
            }
        }

    });

    return YtItemModel;
});