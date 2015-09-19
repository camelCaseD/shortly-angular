angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, Auth) {
  $scope.data = {};
  $scope.$location = $location;

  $scope.logout = Auth.signout;

  $scope.getLinks = function () {
    Links.getLinks().then(function (response) {
      $scope.data.links = response.data;
    });
  };
  $scope.getLinks();
});
