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

        //initialise youtube result collection
        collection: new YtResultCollection,

        //Initialse jQuery Event listener
        events:{
            'keyup .search input[type="text"]':"search"
        },

        initialize:function(vars){
            //Collection "add" event listener
            this.collection.on("add",this.addOne,this)
        },

        render: function(){
            //Apppend rendered template and return the view
            this.$el.append(_.template(SearchTemplate));
            return this;
        },

        //Fetch collection with additional parameters q (query) and max-results
        search: function(ev){
           var value=$(ev.target).val();
           //only fetch collection when last last letter i not a space
           //clear result-set when search term is deleted
           if(value.length<2){
               this.$el.find(".result-set").empty();
               return
           } else if(value[value.length-1]===" "){
               return;
           } else{
               this.collection.fetch({
                    data:{
                        q:value,
                        "max-results":5
                    }
               });
           }

        },

        //Add a new searchresultitem view when a model was added
        addOne: function(model){
            var $resultset=this.$el.find(".result-set");
            //remove old entries so that only 5 entries are shown
            if($resultset.children().length>=5)
                $resultset.children().first().remove();
            $resultset.append(new SearchResultItemView({model:model}).render().$el);
        }

    });

    return SearchView;

});