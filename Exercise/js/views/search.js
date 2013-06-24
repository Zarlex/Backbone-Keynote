define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/ytSearchResultItems',
    'views/ytPreview',
    'text!templates/start/search.html'
], function($, _, Backbone, YtResultCollection, SearchResultItemView, SearchTemplate){

    var SearchView = Backbone.View.extend({

        //define the classname which should be added to the created tag
        className:"search",

        //TODO initialise youtube result collection

        //Initialize jQuery event listener
        events:{
            'keyup .search input[type="text"]':"search"
        },

        initialize:function(vars){
            //TODO Collection "add" event listener
        },

        render: function(){
            //TODO Apppend rendered template and return the view
            return this;
        },

        //TODO Fetch collection with additional parameters q (query) and max-results
        search: function(ev){
           var value=$(ev.target).val();
           //only fetch collection when last last letter i not a space
           //clear result-set when search term is deleted
        },

        //Add a new searchresultitem view when a model was added
        addOne: function(model){
            //TODO -v-
            //1. find .result-set
            //2. remove old entries so that only 5 entries are shown
            //3. append new result
        }

    });

    return SearchView;

});