'use strict';

module.exports = function(grunt){
  return {
    default: [
      'clean',
      'karma:coverage',
      'jshint:jenkins',
      'jscs:jenkins',
      'concat:framework',
      'concat:app',
      'uglify:app',
      'rename:index',
      'processhtml:app',
      'karma:minimized'
    ]
  };
};