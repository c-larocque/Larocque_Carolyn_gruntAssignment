module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
              src: [
                'js/modules/*.js',
                'js/global.js'
              ],
              dest: 'prod/production.js'
            }
        },

        uglify: {
          build: {
            src: 'prod/production.js',
            dest: 'prod/production.min.js'
          }
        },

        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'images/',
              src: ['**/*.{png,jpg,gif,svg}'],
              dest: 'images/build/'
            }]
          }
        },

        watch: {
          scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          },

          sass: {
            files: ['sass/global.scss'],
            tasks: ['sass']
          },

          css: {
            files: ['css/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            }
          }
        },

        sass: {
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              'css/build/global.css': 'css/global.scss'
            }
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);
    grunt.registerTask('watchFiles', ['watch', 'js', 'sass', 'css']);

};
