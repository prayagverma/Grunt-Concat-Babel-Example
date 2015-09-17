module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');

    var taskConfig = {
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: 'link'
            },
            js: {
                src: [
                    'Modules/**/js/*.js',
                ],
                dest: 'script.js'
            }
        },
        babel: {
            dist: {
                options: {
                    sourceMap: true,
                    inputSourceMap: grunt.file.readJSON('script.js.map')
                },
                src: [
                    'script.js',
                ],
                dest: 'app.js'
            }
        }
    };
    grunt.initConfig(grunt.util._.extend(taskConfig));
};
