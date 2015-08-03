'use strict';

module.exports = function(grunt){
  require('load-grunt-config')(grunt, {
    data: {
      common: {
        mapExt: '.map',
        appConcatFile: './js/app/app_concat.js',
        appMinFile: './js/app/app.min.js',
        appFiles: ['./js/app/config/init.js', './js/app/**/*.js'],
        frameworksConcatFile: './js/vendor/frameworks.js',
        indexNonMin: 'index-non-min.html',
        indexFile: 'index.html',
        frameworksFiles: [
          './js/vendor/jquery/jquery-1.11.3.min.js',
          './node_modules/underscore/underscore-min.js',
          './node_modules/angular/angular.min.js',
          './node_modules/angular-resource/angular-resource.min.js',
          './node_modules/angular-route/angular-route.min.js'
        ],
        utFiles: [
          './node_modules/angular-mocks/angular-mocks.js',
          './test/unittesting/**/*Spec.js'
        ]
      },
      jshint: {
        jshintFiles: [
          './js/app/**/*.js',
          './test/**/*.js'
        ]
      },
      jscs: {
        jscsFiles: [
          './js/app/**/*.js',
          './test/**/*.js',
          '!./js/app/app_concat.js',
          '!./js/app/app.min.js'
        ]
      }
    }
  });
};