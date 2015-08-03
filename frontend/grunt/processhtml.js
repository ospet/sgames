'use strict';

module.exports = function(grunt, options){
  return {
    app: {
      files: {
        'index.html': [options.common.indexNonMin]
      }
    }
  };
};