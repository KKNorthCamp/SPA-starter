'use strict';

/**
 * @ngdoc directive
 * @name inviteOperationManagementSystemApp.directive:iomsHeader
 * @description
 * # iomsHeader
 */
angular.module('inviteOperationManagementSystemApp')
    .directive('iomsHeader', function ($templateCache) {
        console.log($templateCache);
        console.log($templateCache.get('views/templates/iomsheader.html'));
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get('views/templates/iomsheader.html'),
            /*templateUrl: '/views/templates/iomsheader.html',*/
            controller: 'IomsHeaderCtrl',
            controllerAs: 'iomsHeader'
            /*,
             link: function postLink(scope, element, attrs) {
             element.text('this is the iomsHeader directive');
             }*/
        };
    });
