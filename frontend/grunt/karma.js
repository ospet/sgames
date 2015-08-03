'use strict';

module.exports = function(grunt, options){
  var karmaFiles = [];
  karmaFiles = karmaFiles.concat(options.common.frameworksFiles);
  karmaFiles = karmaFiles.concat(options.common.appFiles);
  karmaFiles = karmaFiles.concat(options.common.utFiles);

  var karmaMinFiles = [];
  karmaMinFiles = karmaFiles.concat(options.common.frameworksConcatFile);
  karmaMinFiles = karmaFiles.concat(options.common.appMinFile);
  karmaMinFiles = karmaFiles.concat(options.common.utFiles);

  var customDirectoryCreator = function(browser){
    // Normalization process to keep a consistent browser name accross different OS
    return browser.toLowerCase().split(/[ /-]/)[0];
  };

  var coberturaReporter = {
    type: 'cobertura',
    dir: 'karma_reports/coverage-jenkins/',
    subdir: customDirectoryCreator
  };

  var htmlReporter = {
    type: 'html',
    dir: 'karma_reports/coverage/',
    subdir: customDirectoryCreator
  };

  return {
    options: {
      basePath: '',
      frameworks: ['jasmine'],
      exclude: [],
      port: 9876,
      colors: false,
      logLevel: 'ERROR',
      autoWatch: false,
      browsers: ['Chrome', 'Firefox', 'IE', 'PhantomJS'],
      browserNoActivityTimeout: 15000,
      reportSlowerThan: 0,
      singleRun: true
    },
    coverage: {
      options: {
        files: karmaFiles
      },
      preprocessors: {
        'app/**/*.js': 'coverage'
      },
      reporters: ['dots', 'coverage'],
      coverageReporter: {
        reporters: [coberturaReporter, htmlReporter]
      }
    },
    minimized: {
      options: {
        files: karmaMinFiles
      },
      reporters: ['dots', 'junit'],
      junitReporter: {
        outputFile: 'karma_reports/xml/karma-ut-results.xml',
        suite: ''
      }
    },
    dev: {
      options: {
        files: karmaFiles
      },
      preprocessors: {
        'app/**/*.js': 'coverage'
      },
      reporters: ['dots', 'coverage'],
      coverageReporter: {
        reporters: [htmlReporter]
      },
      browsers: ['Chrome'],
      colors: true,
      autoWatch: true,
      singleRun: false
    }
  };
};