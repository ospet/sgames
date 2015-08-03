'use strict';

module.exports = function(grunt, options){
  return {
    options: {
      force: true,
      jshintrc: true
    },
    jenkins: {
      options: {
        reporter: 'jslint',
        reporterOutput: 'karma_reports/jshint/jshint.xml'
      },
      src: options.jshint.jshintFiles
    },
    dev: {
      options: {
        force: false,
        reporter: require('jshint-stylish'),
        reporterOutput: null
      },
      files: {
        src: options.jshint.jshintFiles
      }
    }
  };
};