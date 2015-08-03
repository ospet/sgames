'use strict';

module.exports = function(grunt, options){
  return {
    app: {
      options: {
        separator: ';',
        sourceMap: true
      },
      src: options.common.appFiles,
      dest: options.common.appConcatFile
    },
    framework: {
      src: options.common.frameworksFiles,
      dest: options.common.frameworksConcatFile
    }
  };
};