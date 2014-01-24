// Tumblr information
var api_key = 'myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd';
var secret_key = 'VZDqb392XyjWcetMsQheO9D8EU9tiXcl1DbPSm3jhWUhNGxq8a';

var fs = require('fs');
var http = require('http');
var request = require('request');
var url = require('url');

var blogUrl = process.argv[2];
var downloadDir = process.argv[3];

http.get('http://api.tumblr.com/v2/blog/' + blogUrl + '/posts/photo?api_key=' + api_key, function(res) {
	console.log('Tumblr responded with status ' + res.statusCode);
	var result = '';
	res.on('data', function(chunk) {
		result += chunk;
	});
	res.on('end', function() {
		var posts = JSON.parse(result).response.posts;

		posts.forEach(function(e, i) {
			var photos = e.photos.original_size;
		});

		// this is the link to the full size image
		console.log(posts[0].photos[0].original_size.url);

		var photoUrl = posts[0].photos[0].original_size.url;

		request(photoUrl).pipe(fs.createWriteStream('downloads/test.jpg'));

	});
});

