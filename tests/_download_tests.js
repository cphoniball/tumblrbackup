var tumblrBackup = require('../tumblrbackup');

var reflectPhoto = tumblrBackup.newRequest('reflectphoto.tumblr.com', {
	directory: 'testDownloads',
	rename: 'testPost'
});

// General plan for these tests:
// Use getBlogPost for a specific ID. Verify that the downloaded file contents for that post match the response returned by the Tumblr API.
// Remove posts after each test.

exports.setUp = function(callback) {

	callback();
};

exports.tearDown = function(callback) {

	callback();
};

exports.downloadTextPost = function(test) {



}