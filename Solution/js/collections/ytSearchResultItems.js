define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/ytItem'
], function ($, _, Backbone, YtItemModel) {
    var YtSearchResultItemsCollection = Backbone.Collection.extend({

        //Set url to fetch data from youtube api
        url: "https://gdata.youtube.com/feeds/api/videos?v=2&alt=json",

        //Define the model of every entry of the collection
        model: YtItemModel,

        //parse the response that it fits to the backbone collection requirements
        //"The server handler for fetch requests should return a JSON array of models."
        parse: function (resp, xhr) {
            var results=[];
            var ytResp = resp.feed.entry
            for (var i = 0; i < ytResp.length; i++) {
                results.push({
                    "id": ytResp[i]["media$group"]["yt$videoid"]["$t"],
                    "thumb": ytResp[i]["media$group"]["media$thumbnail"][2].url,
                    "large": ytResp[i]["media$group"]["media$thumbnail"][0].url,
                    "title": ytResp[i]["media$group"]["media$title"]["$t"],
                    "description": ytResp[i]["media$group"]["media$description"]["$t"],
                    "uploader": ytResp[i].author[0].name["$t"],
                    "uploadedAt":ytResp[i]["media$group"]["yt$uploaded"]["$t"],
                    "likes":ytResp[i]["yt$rating"]?ytResp[i]["yt$rating"].numLikes:"NaN",
                    "dislikes":ytResp[i]["yt$rating"]?ytResp[i]["yt$rating"].numDislikes:"NaN",
                    "views": ytResp[i]["yt$statistics"]?ytResp[i]["yt$statistics"].viewCount:"NaN"
                });
            }
            return results;
        }

    });

    return YtSearchResultItemsCollection;
});