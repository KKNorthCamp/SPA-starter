'use strict';

describe('Directive: iomsHeader', function () {

  // load the directive's module
  beforeEach(module('inviteOperationManagementSystemApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('directive 成功注入.', inject(function ($compile) {
    element = angular.element('<ioms-header></ioms-header>');
    element = $compile(element)(scope);
    expect(typeof element.scope()).toBe('object');
  }));
});
