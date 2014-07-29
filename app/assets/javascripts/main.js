// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named 'main.js"
        packages: ['common', 'home', 'user', 'dashboard'],
        shim: {
            'jsRoutes': {
                deps: [],
                // it's not a RequireJS module, so we have to tell it what var is returned
                exports: 'jsRoutes'
            },
            // Hopefully this all will not be necessary but can be fetched from WebJars in the future
            'angular': {
                deps: ['jquery'],
                exports: 'angular'
            },
            'angular-cookies': ['angular'],
            'angular-ui-router': ['angular'],
            'angular-strap-tpl': ['angular-strap'],
            'angular-strap': ['angular', 'bootstrap'],
            'bootstrap': ['jquery']
        },
        paths: {
            'requirejs': ['../lib/requirejs/require'],
            'jquery': ['../lib/jquery/jquery'],
            'angular': ['../lib/angularjs/angular'],
            'angular-cookies': ['../lib/angularjs/angular-cookies'],
            'angular-ui-router': ['../lib/angular-ui-router/angular-ui-router'],
            'angular-strap-tpl': ['../lib/angular-strap/angular-strap.tpl'],
            'angular-strap': ['../lib/angular-strap/angular-strap'],
            'bootstrap': ['../lib/bootstrap/js/bootstrap'],
            'jsRoutes': ['/jsroutes']
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    // Load the app. This is kept minimal so it doesn't need much updating.
    require(['angular', 'angular-cookies', 'angular-ui-router', 'angular-strap', 'angular-strap-tpl', 'jquery', 'bootstrap', './app'],
        function (angular) {
            angular.bootstrap(document, ['app']);
        }
    );
})(requirejs);
