/**
 * Home routes.
 */
define(['angular', './controllers', 'common'], function (angular, controllers) {
    'use strict';

    var mod = angular.module('home.routes', ['yourprefix.common']);
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/notFound');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '/assets/javascripts/home/home.html',
                controller: controllers.HomeCtrl
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/assets/javascripts/home/notFound.html'
            });
    }]);
    return mod;
});
