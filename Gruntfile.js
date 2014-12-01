/*
 * grunt-tpcheck
 * https://github.com/alvinhui/grunt-tpcheck
 *
 * Copyright (c) 2014 Alvin Hui
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    tpcheckinclude: {
      parse: {
        options: {
          rootPath: 'test/fixtures/include/',
          regular: /#parse\((['"])([^(\1)]+)\1\)/g
        },
        src: 'test/fixtures/include/**/*.vm'
      },
      control: {
        options: {
          rootPath: 'test/fixtures/include/',
          regular: /\$control\.setTemplate\((['"])([^(\1)]+)\1\)/g,
          pathPre: 'control/',
          judge: function (re){
            return re.indexOf('vmcommon')!==0;
          }
        },
        src: 'test/fixtures/include/**/*.vm'
      }
    },

    tpcheckencoding: {
      all: {
        options: {
          rules: ['iso-8859-1','charset=us-ascii']
        },
        src: 'test/fixtures/encoding/**/*.vm'
      }
    },

    tpchecknote: {
      all: {
        options: {
          typeNote: '@type'
        },
        src: 'test/fixtures/note/**/*.vm'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'tpcheckinclude', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'tpcheckinclude', 'tpcheckencoding', 'tpchecknote']);

};
