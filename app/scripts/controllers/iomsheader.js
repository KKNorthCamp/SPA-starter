'use strict';

/**
 * @ngdoc function
 * @name inviteOperationManagementSystemApp.controller:IomsHeaderCtrl
 * @description
 * # IomsHeaderCtrl
 * Controller of the inviteOperationManagementSystemApp
 */
angular.module('inviteOperationManagementSystemApp')
    .controller('IomsHeaderCtrl', function (Auth) {

        // TODO(kavalon): 由于系统内部所有的页面都使用统一的一个头部导航, 所以决定在系统头部导航的逻辑部分, 增加用户登录状态验证.
        // 页面加载时, 如果用户没有登录, 则跳转到登录页
        Auth.checkLogin();

        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

    });
