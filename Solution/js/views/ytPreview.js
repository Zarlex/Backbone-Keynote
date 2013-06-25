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

        //Bind dom events like click, submit, hover, ...
        events: {
            'click':"showDetails"
        },

        initialize: function(){
           //Listen on remove event and remove this view
           this.model.on("remove",this.remove,this);
        },

        render: function(){
            //Render template with underscore
            var template = _.template(ItemTemplate);
            //Pass the model to the template
            this.$el.append(template(this.model.toJSON()));

            return this;
        },

        showDetails:function(ev){
            ev.preventDefault();

            //Trigger Event "show:video:details" to open the detailsview (startview is listening to it)
            Backbone.trigger("show:video:details",this.model)
        },

        //Overwrite backbone remove implementation with an own one
        //Unbind all events and then fade out
        remove: function(){
            this.off();
            var self=this;
            this.$el.fadeOut("slow",function(){
                self.$el.remove();
            })
        }

    });

    return YtPreviewView;

});