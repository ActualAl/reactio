module.exports = function(grunt) {

  //Project conf.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    react: {
      dynamic_mappings:{
        files: [
          {
            expand: true,
            //cwd: 'src',
            src:['src/**/*.jsx'],
            dest: 'dest',
            ext: '.js'
          }
        ]
      }
    },
    browserify: {
      dist: {
        options: {
          transform: [require('grunt-react').browserify ]
        },
        app: {
          src: 'src/js/main.js',
          dest: 'dest/output.js'
        }
      }
    },
    watch: {
    
    },
    copy:{
      main : {
        file: [
          {expand: true, src :['src/**/*'], dest: 'dest/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['react', 'browserify', 'copy']);

};
