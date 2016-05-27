'use strict';

/**
 * @ngdoc function
 * @name inviteOperationManagementSystemApp.controller:MessagePushCtrl
 * @description
 * # MessagePushCtrl
 * Controller of the inviteOperationManagementSystemApp
 */
angular.module('inviteOperationManagementSystemApp')
    .controller('MessagePushCtrl', function ($scope, util) {



        // 初始化消息模板
        $scope.messagePoll = {
            // 存储单发消息
            single: {
                userId: '9657482648273648161018472',
                summary: '2',
                message: '3'
            },
            // 存储群发消息
            all: {
                time: '4',
                summary: '5',
                message: '6'
            }
        };

        // 当前要发送的消息内容
        $scope.messageCurrent = {};

        /**
         * 更改当前的推送方式
         * @param pushType 当前推送方式, 'single' 为指定号码单发, 'all' 为群发
         */
        $scope.changePushType = function (pushType) {
            $scope.messageCurrent = $scope.messagePoll[pushType];
        };
        // 初始化推送方式, 默认为单发
        $scope.changePushType('single');

        /**
         * 根据指定的 "推送方式" 推送当前消息, 如果没有指定推送方式, 则默认为单发
         * @param pushType 当前推送方式, 'single' 为指定号码单发, 'all' 为群发
         */
        $scope.pushMessage = function (pushType) {

            // 表单验证
            console.log($scope)

            // 初始化要使用的推送接口(单发/群发)
            var apiMessagePush = {
                'single': 'http://101.201.237.210/push/pushToOne',
                'all': 'http://101.201.237.210/push/pushToAll'
            };
            var apiCurrent = apiMessagePush[pushType || 'single'];

            util.awesomePost(apiCurrent, $scope.messageCurrent, {
                sendByFormData: true,
                successCallback: function (response) {
                    alert('推送成功!')
                }
            })

        }

    });
