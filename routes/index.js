var newsFetcher = require('../lib/newsfetcher.js');
var async = require('async');
var rssFeed = require('rss-to-json');

var newsList = [
	{name: 'DERIKBAILEY.COM', link: 'https://derickbailey.com/feed/'},
	{name: 'Medium: Addy Osmani', link: 'https://medium.com/feed/@addyosmani'},
	{name: 'Test', link: 'http://feeds.feedburner.com/johnpapa'},
]

module.exports = function(app) {
		app.get('/', function (req, res, next) {
			res.sendFile('/public/index.html', {root: './'});
		});
		
		app.get('/news/all', function (req, res, next) {
			var rssData = [];

			async.each(newsList, function(a, callback) {
				rssFeed.load(a.link, function (err, rss) {
					var data = [];
					for(var i in rss.items) {
						data.push({title: rss.items[i].title, link: rss.items[i].link});
					}
					console.log(data.length);
					rssData.push({name: a.name, content: data});
					callback();
				});
			},
			function() {
				res.send(rssData);
			});
		});

}