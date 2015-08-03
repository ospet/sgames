'use strict';

module.exports = function(grunt, options){
  return {
    index: {
      src: options.common.indexFile,
      dest: options.common.indexNonMin
    }
  };
};