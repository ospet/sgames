'use strict';

module.exports = function(grunt, options){
  return {
    options: {
      force: true
    },
    karmaReports: ['karma_reports'],
    app: [
      options.common.appConcatFile,
      options.common.appMinFile,
      options.common.appMinFile + options.common.mapExt,
      options.common.appConcatFile + options.common.mapExt
    ],
    frameworks: [options.common.frameworksConcatFile],
    index: [options.common.indexNonMin]
  };
};