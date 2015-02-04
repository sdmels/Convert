require.config({
  deps: ['main.js'],
  waitSeconds: 10,

  paths: {
    'jquery': 'libs/bower/jquery/dist/jquery',
    'underscore': 'libs/bower/underscore/underscore',
    'angular': 'libs/bower/angular/angular'
  },

  map: {
    '*': {
      '$': 'jquery',
      '_': 'underscore'
    }
  },

  // Declare dependencies for non AMD scripts.
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    }
  }
});

require.onError = function(err) {
  'use strict';
    throw err;
};
