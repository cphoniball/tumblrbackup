var tumblrBackup = require('../tumblrbackup');

exports.newRequestReturnsBlogRequestObjectNoOptions = function(test) {
	var request = tumblrBackup.newRequest('http://example.tumblr.com');

	test.ok(request.hasOwnProperty('url'), 'request has prop url');
	test.ok(request.hasOwnProperty('options'), 'request has prop options');
	test.ok(request.hasOwnProperty('getBlogInfo'), 'request has prop getBlogInfo');
	test.ok(request.hasOwnProperty('downloadPosts'), 'request has prop downloadPosts');
	test.done();
};

// exports.newRequestReturnsBlogRequestObjectWithOptions = function(test) {
// var request = tumblrBackup.newRequest('http://example.tumblr.com');


// };