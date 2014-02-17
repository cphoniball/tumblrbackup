var tumblrBackup = require('../tumblrbackup');

/******************
// Unit tests
******************/

var testRequest = tumblrBackup.newRequest('reflectphoto.tumblr.com');

exports.generateApiUrlIsCorrect = function(test) {
	var message = "GenerateApiUrl returns correct URL.";
	test.equal('http://api.tumblr.com/v2/blog/reflectphoto.tumblr.com/posts?api_key=myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd', testRequest.generateApiUrl('posts'), message);
	test.equal('http://api.tumblr.com/v2/blog/reflectphoto.tumblr.com/posts?api_key=myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd&id=73885771917', testRequest.generateApiUrl('posts', { id: '73885771917' }), message);
	test.equal('http://api.tumblr.com/v2/blog/reflectphoto.tumblr.com/posts?api_key=myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd&id=73885771917&type=image', testRequest.generateApiUrl('posts', { id: '73885771917', type: 'image' }), message);
	test.done();
};

exports.generateFileNameIsCorrect = function(test) {
	test.equal('./downloads/post_1.txt', testRequest.generateFileName('.txt'), 'Text file generates correct file name.');
	test.equal('./downloads/post_1.jpg', testRequest.generateFileName('.jpg'), 'JPG file generates correct file name.');
	test.done();
};

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
	testRequest.getBlogPosts(0, function(response) {
		test.ok(Array.isArray(response), 'getBlogPosts response is an array.');
		test.ok(response.length, 'getBlogPosts response has length');
		test.ok(response[0].id, 'getBlogPosts response first item has an id property');
		test.done();
	});
};

exports.getBlogPostReturnsObect = function(test) {
	testRequest.getBlogPost('73885771917', function(response) {
		test.ok(typeof response === 'object', 'getBlogPost returns an object.');
		test.ok(response.post_url, 'getBlogPost response has a post_url property.');
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