module.exports = function(grunt) {

  //Project conf.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      dynamic_mappings:{
        files: [
          {
            expand: true,
            cwd: 'src/',
            src:['**/*.jsx'],
            dest: 'dest',
            ext: 'js'
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          'build/module.js': ['client/scripts/**/*.js'],
        },
        options: {
          transform: ['coffeeify']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask('default', ['react']);
};
