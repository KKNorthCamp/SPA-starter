'use strict';

/**
 * @ngdoc overview
 * @name inviteOperationManagementSystemApp
 * @description
 * # inviteOperationManagementSystemApp
 *
 * Main module of the application.
 */
angular
    .module('inviteOperationManagementSystemApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function ($location, Auth) {

        // 页面加载时, 如果用户没有登录, 则跳转到登录页
        Auth.checkLogin();
        
    });
