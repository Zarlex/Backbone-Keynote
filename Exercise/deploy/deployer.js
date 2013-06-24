var fs = require('fs-extra'),
    cheerio=require("cheerio"),
    sass = require('node-sass'),
    cleanCss = require('clean-css'),
    require = require('./r.js');

var deployer = deployer || {}

deployer ={

    createProductionIndex:function(){
        console.log('OPEN Development Html File.....................done');
        var data=fs.readFileSync("../index.html","utf8");

        $ = cheerio.load(data);

        $('script[data-main="js/main"]').remove();
        $("head").append('    <script src="js/vendor/require/require.js"></script>\r\n')
        $("head").append('    <script>require.config({paths: {"main": "js/app"}});require(["main"]);</script>')

        console.log('WRITE Production Html File.....................done');
        fs.writeFileSync(deployer.releaseFolder+"/index.html", $.html(),"utf8");
    },

    /*ATTENTION RUN createProduction before compile CSS!!!*/

    compileCSS:function(){


        console.log('OPEN index file for referencing style sheets...start');
        fs.readFile(deployer.releaseFolder+"/index.html",function(err,data){

            if(err) {
                return console.log("OPEN index HTML file::ERROR",err);
            }

            console.log('OPEN index file for referencing style sheets...done');

            $ = cheerio.load(data);

            var stylesheets=$('link[rel="stylesheet"]');
            var allInOne="";
            var pathToCompiledCss=deployer.releaseFolder+"/css/style.css";

            stylesheets.each(function(index,element){
                var $stylesheet=$(this);
                var href=$stylesheet.attr("href");
                if(href.match("//"))
                    return;
                var pathWithoutFileExtension=href.split(".css")[0];
                var pathWithNewExtension=pathWithoutFileExtension+".scss";
                allInOne+=fs.readFileSync("../"+pathWithNewExtension,"utf8");
                console.log('APPEND scss file('+pathWithoutFileExtension+')................................start');
                if(index!==stylesheets.length-1)
                    $stylesheet.remove();
                else{
                    console.log('EDIT Index html CSS File path..................start');
                    $stylesheet.attr("href","css/style.css");
                }
            })

            if(allInOne.length===0){
                console.log("CREATE one scss file...........................nothing to compile");
                return;
            }

            console.log('CREATE one scss file...........................done');

            console.log('PARSE scss file into css file..................start');
            sass.render(allInOne,function(err,css){

                if(err) {
                    return console.log("PARSE scss file into css file::ERROR",err);
                }

                console.log('PARSE scss file into css file..................done');

                var minCss=cleanCss.process(css);
                console.log('MINIFY css file................................done');

                fs.mkdirs(deployer.releaseFolder+'/css', function(err){});

                console.log('WRITE css file.................................start');
                fs.writeFile(pathToCompiledCss, minCss, function(err) {
                    if(err) {
                        return console.log("WRITE compiled css file::ERROR",err);
                    }
                    console.log('WRITE css file.................................done');
                });
            });

            $("head").prepend("\n\r    <!-- this file was automatically generated at: " + new Date() + "-->")

            fs.writeFile(deployer.releaseFolder+"/index.html", $.html(), function(err) {
                if(err) {
                    return console.log("EDIT Index  HTML file path::ERROR",err);
                }

                console.log('EDIT Index html CSS File path..................done');
            });


        })
    },

    copyi18nFolder:function(){
        console.log('copy i18n Folder...............................start');
        fs.copy("../i18n", deployer.releaseFolder+"/i18n", function (err) {
            if (err) {
                return console.error("COPY i18n folder::ERROR",err);
            }
            console.log('copy i18n Folder...............................done');
        });
    },

    copyImgFolder:function(){
        console.log('copy img Folder................................start');
        fs.copy("../img", deployer.releaseFolder+"/img", function (err) {
            if (err) {
                return console.error("COPY img folder::ERROR",err);
            }
            console.log('copy img Folder................................done');
        });
    },

    copyJSLibaries:function(){

        console.log('create Javascript Libary Folder................start');
        fs.mkdirs(deployer.releaseFolder+'/js/vendor', function(err){
            if (err) {
                console.error("CREATE JS Libary folder::ERROR",err);
            }
            console.log('create Javascript Libary Folder................done');


            console.log('copy Javascript Libary Folder..................start');
            fs.copy("../js/vendor", deployer.releaseFolder+"/js/vendor", function (err) {
                if (err) {
                    return console.error("COPY JS Libary folder::ERROR",err);
                }
                console.log('copy Javascript Libary Folder..................done');
            });
        });

    },

    buildJS:function(){
        console.log('compile javascript files to one................start');
        var data=eval(fs.readFileSync("r.config.js","utf8"));

        require.optimize(data,function(results){
            console.log(results);
            console.log('compile javascript files to one................done\n\n');
        })
    },

    releaseFolder:"../release",

    init:function(){

        console.log('create release Folder..........................start');

        fs.mkdirs(deployer.releaseFolder, function(err){
            if (err) {
                console.error("CREATE release folder::ERROR",err);
            }

            console.log('create release Folder..........................done');
            deployer.createProductionIndex();
            deployer.copyi18nFolder();
            deployer.copyImgFolder();
            deployer.copyJSLibaries();
            deployer.compileCSS();
            deployer.buildJS();

        });
    }
}

deployer.init();
