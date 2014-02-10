#!/usr/bin/env node

// Tumblr information
var api_key = 'myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd';
var secret_key = 'VZDqb392XyjWcetMsQheO9D8EU9tiXcl1DbPSm3jhWUhNGxq8a';

// node modules
var program = require('commander');

// process cmd line args
program
	.version('0.0.1')
	.option('-l, --verbose', 'Print out information about what TumblrBackup is doing as it runs')
	.parse(process.argv);

var args = program.parse(process.argv).args;
var blogUrl = args[0];
var downloadDir = args[1] || 'downloads/';
var rename = args[2] || 'image';
var offset = 0;
var apiEndpoint = 'http://api.tumblr.com/v2/blog/' + blogUrl + '/posts/photo?api_key=' + api_key;

// add trailing slash if left off download dir
if (downloadDir[downloadDir.length -1] !== '/') { downloadDir += '/'; }

// GET request
if (program.verbose) { console.log('Making request to ' + apiEndpoint); }

(function downloadPhotos() {
	var begin = offset;
	http.get(apiEndpoint + '&offset=' + offset, function(res) {
		if (program.verbose) { console.log('Tumblr responded with status ' + res.statusCode); }

		if (res.statusCode == 200) {
			var result = '';
			res.on('data', function(chunk) {
				result += chunk;
			});

			res.on('end', function() {
				// note - tumblr returns at most 20 posts in a given query
				var posts = JSON.parse(result).response.posts;

				if (posts.length) {
					posts.forEach(function(e, i) {
						// grab URL to the full size photo
						var photoUrl = e.photos[0].original_size.url;
						if (program.verbose) { console.log('Downloading photo at URL: ' + photoUrl); }

						//get format of photo - tumblr supports only jpg, jpeg, gif, png, bmp
						var extension = url.parse(photoUrl).pathname.split('.').pop();

						// download photo
						request(photoUrl).pipe(fs.createWriteStream(downloadDir + rename + '_' + offset + '.' + extension).on('finish', function() {
							if (program.verbose) { console.log(photoUrl + ' sucessfully downloaded.'); }
						}));
						offset++;
						// if the end of the individual photoset is reached, call function again
						if (offset === begin + 20) {
							downloadPhotos();
						}
					});
				}
			});
		} else {
			console.log('Error, Tumblr responded with status code ' + res.statusCode);
		}
	});
})();
