/**
 * User controllers.
 */
define([], function () {
    'use strict';

    var LoginCtrl = function ($scope, $location, $alert, userService) {
        $scope.credentials = {};

        $scope.login = function (credentials) {
            userService.loginUser(credentials).then(function (/*user*/) {
                $alert({
                    title: 'Holy guacamole!',
                    content: 'Best check yo self, you\'re not looking too good.',
                    placement: 'top',
                    type: 'info',
                    show: true
                });
                $location.path('/dashboard');
            });
        };
    };
    LoginCtrl.$inject = ['$scope', '$location', '$alert', 'userService'];

    return {
        LoginCtrl: LoginCtrl
    };

});
