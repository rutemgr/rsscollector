var rssFeed = require('rss-to-json');
var async = require('async');

var newsList = [
{name: 'DERIKBAILEY.COM', link: 'https://derickbailey.com/feed/'},
{name: 'Medium: Addy Osmani', link: 'https://medium.com/feed/@addyosmani'},
{name: 'Test', link: 'http://feeds.feedburner.com/johnpapa'},
]

function getAsyncRSS() {
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
		console.log("done");
	});
}

function getNews() {
	
	for(var x in newsList) {
		calls.push(function(callback) {
			rssFeed.load(newsList[x].link, function(err, rss) {
				var temp = [];
				
				for(var i in rss.items) {
					rssData.push({title: rss.items[i].title, link: rss.items[i].link});
				}

				callback();
			});
		});
	}
	
	/*rssFeed.load(newsList[2].link, function(err, rss) {
		var temp = [];
		
		for (var i in rss.items) {
			console.log(rss.items[i].title);
		}
	});*/
}

function getLatestNews() {

}

exports.getAsyncRSS = getAsyncRSS;
