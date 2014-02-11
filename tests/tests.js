var tumblrBackup = require('../tumblrbackup');

/******************
// Unit tests
******************/

exports.newRequestReturnsBlogRequestObjectNoOptions = function(test) {
	var request = tumblrBackup.newRequest('http://example.tumblr.com');
	testRequestProps(test, request);
};

exports.newRequestReturnsBlogRequestObjectWithOptions = function(test) {
	var request = tumblrBackup.newRequest('http://example.tumblr.com', {
		type: ['all'],
		directory: 'somedir',
		rename: 'clown',
		save_meta: true
	});
	testRequestProps(test, request);
};

exports.getValidBlogInfoReturnsObject = function(test) {
	// a valid blog URL
	var validRequest = tumblrBackup.newRequest('reflectphoto.tumblr.com');
	validRequest.getBlogInfo(function(response) {
		test.deepEqual(response.meta.status, 200, 'ValidRequest responds with status 200');
		test.ok(response.response.blog.hasOwnProperty('title'), 'Valid request returns blog object');
		test.done();
	});
};

exports.getBlogPostsReturnsArray = function(test) {
	var request = tumblrBackup.newRequest('reflectphoto.tumblr.com');
	request.getBlogPosts(0, function(response) {
		test.ok(Array.isArray(response), 'getBlogPosts response is an array.');
		test.ok(response.length, 'getBlogPosts response has length');
		test.ok(response[0].id, 'getBlogPosts response first item has an id property');
		test.done();
	});
};

/******************
// Helper functions
******************/

function testRequestProps(test, request) {
	test.ok(request.hasOwnProperty('url'), 'request has prop url');
	test.ok(request.hasOwnProperty('options'), 'request has prop options');
	test.ok(request.hasOwnProperty('getBlogInfo'), 'request has prop getBlogInfo');
	test.ok(request.hasOwnProperty('downloadPosts'), 'request has prop downloadPosts');
	test.done();
}