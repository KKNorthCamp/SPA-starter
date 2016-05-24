'use strict';

/**
 * @ngdoc directive
 * @name inviteOperationManagementSystemApp.directive:iomsHeader
 * @description
 * # iomsHeader
 */
angular.module('inviteOperationManagementSystemApp')
    .directive('iomsHeader', function ($templateCache) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get('views/templates/ioms-header.html'),
            /*templateUrl: '/views/templates/ioms-header.html',*/
            controller: 'IomsHeaderCtrl',
            controllerAs: 'iomsHeader'
            /*,
             link: function postLink(scope, element, attrs) {
             element.text('this is the iomsHeader directive');
             }*/
        };
    });
