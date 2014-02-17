var tumblrBackup = require('../tumblrbackup');
var fs = require('fs');

var reflectPhoto = tumblrBackup.newRequest('reflectphoto.tumblr.com', {
	directory: 'testDownloads',
	rename: 'testPost'
});

// General plan for these tests:
// Use getBlogPost for a specific ID. Verify that the downloaded file contents for that post match the response returned by the Tumblr API.
// Remove posts after each test.

// exports.setUp = function(callback) {

// 	callback();
// };

// exports.tearDown = function(callback) {

// 	callback();
// };

// exports.downloadTextPost = function(test) {
// 	reflectPhoto.getBlogPost('26635330056', function(response) {
// 		var postContent = response.body;
// 		reflectPhoto.downloadTextPost(response, function(err, file) {
// 			if (err) { throw err; }
// 			fs.readFile(file, function(err, data) {
// 				if (err) { throw err; }
// 				test.equal(postContent, data, 'DownloadTextPost Tumblr response === downloaded file contents.');
// 				test.done();
// 			});
// 		});
// 	});
// };