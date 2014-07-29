/**
 * Configure routes of user module.
 */
define(['angular', './controllers', 'common'], function (angular, controllers) {
    'use strict';

    var mod = angular.module('user.routes', ['user.services', 'yourprefix.common']);
    mod.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/assets/javascripts/user/login.html',
                controller: controllers.LoginCtrl
            });
        //.when('/users', {templateUrl:'/assets/templates/user/users.html', controller:controllers.UserCtrl})
        //.when('/users/:id', {templateUrl:'/assets/templates/user/editUser.html', controller:controllers.UserCtrl});
    }]);
    return mod;
});
