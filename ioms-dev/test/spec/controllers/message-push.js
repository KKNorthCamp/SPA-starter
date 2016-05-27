'use strict';

describe('Controller: MessagePushCtrl', function () {

  // load the controller's module
  beforeEach(module('inviteOperationManagementSystemApp'));

  var MessagePushCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagePushCtrl = $controller('MessagePushCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MessagePushCtrl.awesomeThings.length).toBe(3);
  });
});
