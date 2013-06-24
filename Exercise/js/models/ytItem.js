define([
    'jQuery',
    'Underscore',
    'Backbone'
], function ($, _, Backbone) {
    var YtItemModel = Backbone.Model.extend({

        //Set default model attributes
        //TODO Model should have attribute favorite
        defaults:{

        },

        //validate method is called before model is saved
        //TODO check if we have a valid ytid
        validate: function(attrs,options){
        }

    });

    return YtItemModel;
});