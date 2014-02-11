/*
 * Script to download images from a Tumblr blog as backup or to upload to another location
 * Author: Chris Honiball
 * Author URL: chrishoniball.com
*/

var fs = require('fs');
var http = require('http');
var request = require('request');
var url = require('url');

// Object that will server as the instantiation for all future requests
var BlogRequest = function(url, options) {
	this.url = url;
	this.api_key = 'myRdVadkyg5oK9fKA5P31j4qhooSrxiUp4ba2XxHLhnsWw2qGd';
	this.secret_key = 'VZDqb392XyjWcetMsQheO9D8EU9tiXcl1DbPSm3jhWUhNGxq8a';

	var defaults = {
		type: ['all'], // types of posts to download
		directory: 'downloadDir', // directory to download content to
		rename: 'post', // what files will be named
		save_meta: false, // if true, will save metadata in a separate file named post_#_meta.txt
	};

	this.generateApiUrl = function(method, queries) {
		var endpoint = 'http://api.tumblr.com/v2/blog/' + this.url + '/' + method + '?api_key=' + this.api_key;
		if (typeof queries === 'object' && queries !== null) {
			// TODO
			//iterate over queries object and append params to url - Node might have a module to do this
		}
		return endpoint;
	};

	if (options !== null && typeof options === 'object') {
		this.options = {
			type: options.type || defaults.type,
			directory: options.directory || defaults.directory,
			rename: options.rename || defaults.rename,
			save_meta: options.save_meta || defaults.save_meta
		};
	} else { this.options = defaults; }

	// Should return the complete json object that is returned by the Tumblr API
	this.getBlogInfo = function(callback) {
		request(this.generateApiUrl('info'), function(error, response, body) {
			if (!error && response.statusCode === 200) {
				callback(JSON.parse(body));
			}
		});
	};

	// Get the array of posts from the Tumblr API, starting at the given offset
	// Callback will be passed the results as an array of JSON objects
	this.getBlogPosts = function(offset, callback) {
		request(this.generateApiUrl('posts', { offset: offset }), function(error, response, body) {
			if (!error && response.statusCode === 200) {
				body = JSON.parse(body);
				callback(body.response.posts);
			}
		});
	};

	// Download functions
	// These actually download the content of the post into a directory on the server/client machine
	// Args:
	//    post: A JSON post object, as returned by the Tumblr API
	this.downloadTextPost = function(post)  {

	};

	this.downloadPhotoPost = function(post)  {

	};

	this.downloadQuotePost = function(post)  {

	};

	this.downloadLinkPost = function(post)  {

	};

	this.downloadChatPost = function(post)  {

	};

	this.downloadAudioPost = function(post)  {

	};

	this.downloadVideoPost = function(post)  {

	};

	this.downloadAnswerPost = function(post)  {

	};

	// Generic download post function - this delegates to the above specific functions
	this.downloadPost = function() {

	};

	// Where options
	this.downloadPosts = function(options) {

	};

};





exports.newRequest = function(url, options) {
	return new BlogRequest(url, options);
};