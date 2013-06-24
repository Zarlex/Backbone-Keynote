({
    baseUrl: "../js",
    name: "main",
    out: "../release/js/app.js",
    paths: {
        text: 'text',
        jQuery: 'empty:',
        Underscore: 'empty:',
        Backbone: 'empty:',
        BackboneLocalStorage : 'empty:',
        templates: '../templates'
    },
    uglify2: {
        toplevel: true,
        ascii_only: true,
        beautify: false,
        max_line_length: 100000,

        //How to pass uglifyjs defined symbols for AST symbol replacement,
        //see "defines" options for ast_mangle in the uglifys docs.
        defines: {
            DEBUG: ['name', 'false']
        },

        //Custom value supported by r.js but done differently
        //in uglifyjs directly:
        //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
        no_mangle: true
    }
})