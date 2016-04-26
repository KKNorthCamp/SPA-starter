'use strict';

/**
 * @ngdoc service
 * @name inviteOperationManagementSystemApp.Auth
 * @description
 * # Auth
 * Factory in the inviteOperationManagementSystemApp.
 */
angular.module('inviteOperationManagementSystemApp')
    .factory('Auth', function ($location) {

        /**
         * 用户登录状态标记
         * 如果本地缓存信息中没有 token 或者 缓存时间过期, 则认为用户没有登录
         * @returns Boolean
         */
        function isUserLogin() {
            var ioms; // 本地缓存的用户登录状态等相关信息
            var tokenExist; // 是否有登陆凭证
            var tokenNotExpired; // 登陆凭证是否过期
            var userLoginStatus; // 用来标记用户登陆状态

            ioms = localStorage.getItem('ioms');
            if (angular.isObject(ioms)) {
                ioms = JSON.parse(ioms);
                // 初始化用户当前登陆状态
                tokenExist = ioms.token;
                tokenNotExpired = ioms.expired - (new Date()).getTime() > 0;
                userLoginStatus = tokenExist || tokenNotExpired;
            } else {
                userLoginStatus = false;
            }
            return true;
        }

        /**
         * 提供一个检查用户登录状态的方法, 如果没有登录则自动跳转到登录页
         */
        function autoCheckLoginState() {

            if (!isUserLogin()) {
                $location.path('/login');
            }

        }

        // Public API here
        return {
            isUserLogin: isUserLogin,
            autoCheckLoginState: autoCheckLoginState
        };
    });
