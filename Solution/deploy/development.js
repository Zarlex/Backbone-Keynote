var util = require('util'),
    sass = require('node-sass'),
    fs = require('fs-extra'),
    express = require('express'),
    port = 3000,
    __dirname = "..";

var server = express();
server.configure(function(){

    server.use(express.logger('dev'));

    server.use(sass.middleware({
        src: __dirname,
        dest: __dirname+"/css/compiled",
        debug: true
    }));

    server.use("/css",function(req,res){

        var compiledCss=fs.readFileSync(__dirname+"/css/compiled/css/"+req.url,"utf8");
        res.end(compiledCss)

    });

    server.use("/",express.static(__dirname));
});

server.listen(port);

util.puts("\nLocal Development Server started\n")
util.puts('Running on localhost (127.0.0.1) on port: ' + port + '');
util.puts('Press Ctrl + C to stop.');