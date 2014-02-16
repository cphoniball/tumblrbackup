#Todo for TumblrBackup.js

- Add support for different post types
	* Text
	- Photo
	- Quote
	- Link
	- Chat
	- Audio
	- Video
 - Create a JSON/Ghost compatible upload format for the data
 - Provide options for downloading text as HTML, Markdown, or plaintext


I want to be able to use the module like this;

var tumblrBackup = require('./tumblrbackup');

// Make a new request
// Args:
// 		1: url of the blog that is being request
// 		2: options object
var reflectPhoto = tumblrBackup.newRequest('http://reflectphoto.tumblr.com', {
	type: ['all'], // types of posts to download
	directory: 'downloadDir', // directory to download content to
	rename: 'post', // what files will be named
	save_meta: false, // if true, will save metadata in a separate file named post_#_meta.txt
});