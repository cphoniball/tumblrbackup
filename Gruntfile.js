module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			all: {
				files: ['./tumblrbackup.js', 'app.js', 'tests/*.js'],
				tasks: ['jshint']
			}
		},
		jshint: {
			all: ['tests/*.js', './*.js']
		},
		nodeunit: {
			options: {
				reporter: 'verbose'
			},
			all: ['tests/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['nodeunit']);
};