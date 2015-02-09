define(['angular', 'angularRoute'],
  function(angular, ngRoute) {
    'use strict';

    // Define 'apply' module.
    var app = angular.module('convert', ['ngRoute']);

    app.controller('homeCtrl', function($scope) {
      $scope.model = {};
      console.debug('home controller');
      $scope.model.title = 'require & Angular JS\'s';

      $scope.setActiveMenu = function(item) {
        // console.log(this, item, arguments)
      };
    });

    app.controller('convertCtrl', function($scope) {
      console.debug('covert controller');
      $scope.model = {};
      $scope.model.category = ['Temperatures', 'Weight', 'Length', 'Area','Volume','Speed','Time'];
    });

    app.controller('contactCtrl', function($scope) {
      console.debug('covert controller');
    });


    app.directive('topNav', function() {
      return {
        restrict: 'E',
        templateUrl: 'convert/directives/topNav.html',
        link: function(scope, element, attr) {
          // console.log(scope, element, attr)
        }
      }
    });

    app.config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'partial/home.html',
        controller: 'homeCtrl'
      }).when('/convert', {
        templateUrl: 'partial/convert.html',
        controller: 'convertCtrl'
      }).when('/contact', {
        templateUrl: 'partial/contact.html',
        controller: 'contactCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    });

    // app.config(['$stateProvider', '$urlRouterProvider', 'sstConfigProvider',
    //   function($stateProvider, $urlRouterProvider, sstConfigProvider) {
    //     $stateProvider.state('app', {
    //       template: '<ui-view autoscroll/>',
    //       abstract: true,
    //       controller: 'appCtrl',
    //       resolve: {
    //         publicKeyResolve: ['publicKeyService',
    //           function(publicKeyService) {
    //             return publicKeyService.fetchPublicKey();
    //           }
    //         ]
    //       }
    //     });

    //     var defaultPage = sstConfigProvider.getSystemConfigProperty('defaultUrl');
    //     $urlRouterProvider.otherwise(defaultPage);
    //   }
    // ]);

    return app;
  });
