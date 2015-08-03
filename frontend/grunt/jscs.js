'use strict';

module.exports = function(grunt, options){
  return {
    options: {
      force: true,
      config: '.jscsrc'
    },
    jenkins: {
      options: {
        reporter: 'checkstyle',
        reporterOutput: 'karma_reports/jscs/checkstyle-result.xml'
      },
      files: {
        src: options.jscs.jscsFiles
      }
    },
    dev: {
      files: {
        src: options.jscs.jscsFiles
      }
    }
  };
};