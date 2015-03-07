module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			srcLess : {
				files : ['src/*.less'],
				tasks : ['less:src', 'clean']
			},
			testLess : {
				files : ['test/*.less'],
				tasks : ['less:test']	
			},
		},
		less : {	//scans less files for errors
			src : {
				files : {
					'src/temp.css' : "src/*.less"
				}
			},
			test : {
				files : {
					'test/test.css' : 'test/*.less'
				}
			}
		},
		clean : ['src/temp.css']
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['less:src', 'clean']);
};