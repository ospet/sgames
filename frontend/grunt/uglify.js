'use strict';

module.exports = function(grunt, options){
  return {
    options: {
      //TODO Verificar como hacer andar el banner de nuevo.
      //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd, h:MM:ss TT") %> */\n',
      sourceMap: true,
      sourceMapIncludeSources: true,
      mangle: {
        except: ['angular']
      }
    },
    app: {
      options: {
        sourceMapIn: options.common.appConcatFile + options.common.mapExt
      },
      files: {
        './js/app/app.min.js': [options.common.appConcatFile]
      }
    }
  };
};