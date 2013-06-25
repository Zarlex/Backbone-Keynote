requirejs.config({
    //Define the baseurl where all your javascript stuff is
    baseUrl: "js",
    //Define shortcut for paths that you can later use in define dependencies
    paths: {
        text: 'text',
        jQuery: 'vendor/jquery/jquery',
        Underscore: 'vendor/underscore/underscore',
        Backbone: 'vendor/backbone/backbone',
        BackboneLocalStorage : 'vendor/backbone/localStorage',
        templates: '../templates'
    },
    //Define dependencies of libaries e.g. only kickoff Backbone when jQuery was loaded
    shim: {

        'Backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['Underscore', 'jQuery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },

        'jQuery': {
            exports:'$'
        },

        'jQueryPlugins':{
            deps: ['jQuery']
        },

        'Underscore': {
            exports: '_'
        }
    }
});



require([
    'router'
], function(Router){
    // Kickoff Application
    // Call initialize function of router.js
    Router.initialize();
});