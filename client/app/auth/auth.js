// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.isAuth = Auth.isAuth;

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.isDirty = function (name) {
    var $inputs = angular.element('input');

    var dirty = false;
    $inputs.each(function (index, el) {
      if (angular.element(el).attr('name') === name) {
        dirty = angular.element(el).hasClass('ng-dirty');
      }
    });

    return dirty;
  };

  $scope.logout = function () {
    Auth.signout();
  };
});
