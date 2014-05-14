module.exports = function(grunt) {
	"use strict";

	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", ["jshint"]);

	grunt.initConfig({
		"jshint": {
			"options": {
				"jshintrc": ".jshintrc"
			},
			"all": ["Gruntfile.js", "api.js"]
                }
	});
};
