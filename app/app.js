define(['angular'],
  function(angular) {
    'use strict';

    // Define 'apply' module.
    var app = angular.module('convert', []);

    app.controller('homeCtrl',function($scope){
      $scope.model = {};
      $scope.model.title = 'require & Angular JS\'s';
    });

    return app;
  });
