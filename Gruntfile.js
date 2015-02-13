module.exports = function(grunt) {

  /*
  This file will:
    2. Concatenate JavaScript files into one
    3. Minify concatenated JS file
    4. Apply a banner to the minified file keep track of versions
    5. Compile LESS into CSS
    8. Copy all pertient files from /src/ to /deploy/ in proper structure
    8. Anything else you want it to do. Except make coffee.
  */

  grunt.initConfig({
    email: grunt.option('email'),
    password: grunt.option('password'),
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.site || pkg.name %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.domain ? " * " + pkg.domain + "\n" : "" %>' +
        ' * <%= pkg.author %>\n */'
    }, 
    // compile less into css, heavy compression with yuicompress
    less: {
      production: {
        options: {
          paths: ["less"],
          yuicompress: true
        },
        files: [
          {src:["less/style.less"], dest: "build/css/style.css"}
        ]
      }
    },
    // concatenate compiled coffeescript with any plugins or handmade js
    concat: {
      dist: {
        src: [
          'scripts/*.js'
          ],
        dest: 'build/scripts/scripts.js'
      }
    },

    watch: {
      html: {
        files: ['src/*.html'],
        tasks: ['svgmin', 'imagemin']
      },
      css: {
        files: ['src/less/**/*.less'],
        tasks: ['less', 'svgmin', 'imagemin']
      },
      js: {
        files: ['src/scripts/**/*.js', '! src/scripts/coffeScripts.js', '! src/scripts/script-concat.js'],
        tasks: ['coffee', 'concat', 'uglify:dist' ]
      },
      mustache: {
        files: ['src/templates/*.mustache'],
        tasks: ['copy', 'compress']
      },
      options: {
        livereload: true,
      }
    },
  })

  // required for less, coffee
  grunt.loadNpmTasks('grunt-contrib');

  // required for png/img compression
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // required for svg images
  grunt.loadNpmTasks('grunt-svgmin');

  // required for grunt contrib watch
  grunt.loadNpmTasks('grunt-contrib-watch');



  // Default task
  grunt.registerTask('default', ['less', 'concat',]);

  // Start the watcher
  grunt.registerTask('dev', ['watch']);

};

