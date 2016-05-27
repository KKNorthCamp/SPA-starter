'use strict';

describe('Controller: IomsHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('inviteOperationManagementSystemApp'));

  var IomsHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IomsHeaderCtrl = $controller('IomsHeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IomsHeaderCtrl.awesomeThings.length).toBe(3);
  });
});
