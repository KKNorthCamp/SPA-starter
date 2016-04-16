'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('inviteOperationManagementSystemApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('用户登录状态验证(Auth)模块有问题', function () {
    expect(typeof LoginCtrl.auth).toBe('object');
    expect(typeof LoginCtrl.auth.isUserLogin).toBe('function');
    expect(typeof LoginCtrl.auth.isUserLogin()).toBe('boolean');
  });
});
