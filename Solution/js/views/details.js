define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/start/details.html'
], function($, _, Backbone, DetailsTemplate){

    var DetailsView = Backbone.View.extend({

        //define the classname which should be added to the created tag
        className:"details",

        events:{
            'click .save-js':"save",
            'click .remove-js':"destroy",
            'click .close-js':"close"
        },

        initialize:function(vars){
            //Initialize Stuff like creating subviews, bind events, etc
            //If model of searchresult is already in the favoritcollection set it to favorite
            if(typeof this.collection.get(this.model) !== "undefined"){
                this.model=this.collection.get(this.model);
            }

            //Bind change eventlistener to model
            this.model.on("change",this.render,this)
        },

        render: function(){
            //render view with the model attributes
            var template = _.template(DetailsTemplate);
            this.$el.html(template(this.model.toJSON()));
            return this;
        },

        save: function(){
            //set model attribute favorite and save it into the favorites collection
            this.model.set({favorite:true});
            this.collection.create(this.model.toJSON());
        },

        destroy: function(){
            //find model in the favorites collection
            //set model attribute favorite and remove it of the favorites collection
            var model=this.collection.get(this.model);
            model.destroy();
            this.model.set({favorite:false});
        },

        //remove view and trigger close:video:details:event
        close:function(){
            this.remove();
            Backbone.trigger("close:video:details");
        }

    });

    return DetailsView;

});