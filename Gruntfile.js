module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		less: {
			dist: {
				files: {
					"dist/fluid-css.css": "src/fluid-css.less"
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					"dist/fluid-css.min.css": "dist/fluid-css.css"
				}
			}
		},

		watch: {

			less: {
				files: ["src/**/*.less"],
				tasks: ["less"]
			},

			css: {
				files: ["dist/fluid-css.css"],
				tasks: ["cssmin"]
			},

			grunt: {
				files: ["Gruntfile.js", "package.json"],
				options: {
					reload: true
				},
				tasks: ["build"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("build", ["less", "cssmin"]);
	grunt.registerTask("default", ["build", "watch"]);
}