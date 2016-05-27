'use strict';

/**
 * @ngdoc function
 * @name inviteOperationManagementSystemApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the inviteOperationManagementSystemApp
 */
angular.module('inviteOperationManagementSystemApp')
    .controller('LoginCtrl', function ($location, Auth) {

        this.auth = Auth;

        // 如果用户已经登陆, 则访问登录页面时, 会跳转到系统默认首页
        if(this.auth.isUserLogin()){
            $location.path('/');
        }

    });
