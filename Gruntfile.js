'use strict';
module.exports = function (grunt) {
 //require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  //require('time-grunt')(grunt);
    grunt.initConfig({
	
		concat: {
		  js: {
			src: 'src/js/*.js',
			dest: 'des/js/concat.js'
		  },
		  css: {
			src: 'src/css/*.css',
			dest: 'des/css/concat.css'
		  }
		},
		min: {
		  js: {
			src: 'des/js/concat.js',
			dest: 'des/js/concat.min.js'
		  }
		},
        cssmin: {
            target: {
                files: {
                    'des/css/concat.min.css': 'des/css/concat.css'
                }
            }
        },
		uncss: {
		  dist: {
			files: {
			  'src/css/style.css': ['chat.html']
			}
		  }
		},
        sass: {
			dist: {
				files: {
					'style.css' : 'style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '*.scss',
				tasks: ['sass']
			},
			js: {
				files: [
				  'des/js/*.js',
				  'Gruntfile.js'
				],
				tasks: ['jshint']
			}
		},
        jshint: {
			  all: ['Gruntfile.js', 'des/js/*.js']
        }
    });
    
    // Next one would load plugins
	grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-min');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.loadNpmTasks('grunt-contrib-sass');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	 //grunt.loadTasks('tasks');
	 
	 
    /////////// Here is where we would define our task
	//grunt.registerTask('default',['uncss']);
    grunt.registerTask('default', ['concat', 'cssmin']);
	//grunt.registerTask('default',['watch']);
	
};