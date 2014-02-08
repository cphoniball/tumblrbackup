/*
 * Script to download images from a Tumblr blog as backup or to upload to another location
 * Author: Chris Honiball
 * Author URL: chrishoniball.com
*/


// Object that will server as the instantiation for all future requests
var BlogRequest = function(url, options) {
	this.url = url;

	var defaults = {
		type: ['all'], // types of posts to download
		directory: 'downloadDir', // directory to download content to
		rename: 'post', // what files will be named
		save_meta: false, // if true, will save metadata in a separate file named post_#_meta.txt
	};

	if (options !== null && typeof options === 'object') {
		this.options = {
			type: options.type || defaults.type,
			directory: options.directory || defaults.directory,
			rename: options.rename || defaults.rename,
			save_meta: options.save_meta || defaults.save_meta
		};
	} else { this.options = defaults; }

	this.getBlogInfo = function() {

	};

	this.downloadPost = function() {

	};

	// Where options
	this.downloadPosts = function(options) {

	};

};



// Download functions
// These actually download the content of the post into a directory on the server/client machine
// They all accept the following arguments:
//

function downloadTextPost(post)  {

}

function downloadPhotoPost(post)  {

}

function downloadQuotePost(post)  {

}

function downloadLinkPost(post)  {

}

function downloadChatPost(post)  {

}

function downloadAudioPost(post)  {

}

function downloadVideoPost(post)  {

}

function downloadAnswerPost(post)  {

}

exports.newRequest = function(url, options) {
	return new BlogRequest(url, options);
};