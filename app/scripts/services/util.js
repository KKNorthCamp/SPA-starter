'use strict';

/**
 * @ngdoc service
 * @name inviteOperationManagementSystemApp.util
 * @description
 * # util
 * Factory in the inviteOperationManagementSystemApp.
 */
angular.module('inviteOperationManagementSystemApp')
    .factory('util', function ($http, $httpParamSerializerJQLike) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function () {
                return meaningOfLife;
            },
            /**
             * 整合了大部分基础交互的 ajax 通信工具库
             * @param url {string} 接口地址
             * @param data {object=} 要向接口发送的数据
             * @param options {object=} 一些不常用的可扩展配置项都在这里:
             *          sendByFormData {boolean=} 是否修改为 form-data 的方式, eg. 在 PHP 下通过 $POST['xxx'] 接收数据的话, 需要使用这种方式
             *          successCallback {function=} 成功回调
             *          errorCallback {function=} 错误回调
             */
            awesomePost: function (url, data, options) {

                // loading提示层
                /*var dialogLoading = util.artDialogLoading();*/
                
                // 通过 formData 的形式发送数据
                if (options && options.sendByFormData) {

                    $http({
                        url: url,
                        method: 'POST',
                        data: $httpParamSerializerJQLike(data),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                    // 后端返回数据
                        .success(function (response) {

                            if (response.code != 200) {
                                /*util.artDialogHint(response.msg);*/
                                alert(response.msg);
                                return false;
                            }

                            options.successCallback(response);

                        })
                        // 后端返回异常 不关闭手机号对话框
                        .error(function (responseError) {
                            if (options.errorCallback) {
                                options.errorCallback(responseError);
                            } else {
                                /*dialogLoading.close();*/

                                /*util.artDialogHint('<p>啊哦~ 服务器好像有点忙, 请稍后再试...</p>');*/
                                alert('啊哦~ 服务器好像有点忙, 请稍后再试...');
                                console.error(responseError);
                            }
                        });
                }

                // 如果没有特别声明 - 则默认以 JSON 形式发送 data
                else {

                    $http.post(url, data || {})
                    // 后端返回数据
                        .success(function (response) {
                            /*dialogLoading.close();*/

                            if (response.code != 200) {
                                /*util.artDialogHint(response.msg);*/
                                alert(response.msg);
                                return false;
                            }

                            options.successCallback(response);
                        })
                        // 后端返回异常
                        .error(function (responseError) {
                            if (options.errorCallback) {
                                options.errorCallback(responseError);
                            } else {
                                /*dialogLoading.close();*/

                                /*util.artDialogHint('<p>啊哦~ 服务器好像有点忙, 请稍后再试...</p>');*/
                                alert('啊哦~ 服务器好像有点忙, 请稍后再试...');
                                console.error(responseError);
                            }
                        });

                }


            }
        };
    });
