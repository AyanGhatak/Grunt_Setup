module.exports = function(grunt) {
       'use strict';
       // Project configuration.
       grunt.initConfig({
         jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js']
          },
          watch: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            tasks: ['jshint']
          }
       });
       grunt.loadNpmTasks('grunt-contrib-jshint');
       grunt.loadNpmTasks('grunt-contrib-watch');
       grunt.registerTask('default', ['jshint']);
       grunt.registerTask('lint', ['jshint']);       
};
