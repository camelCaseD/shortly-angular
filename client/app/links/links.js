angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks().then(function (response) {
      $scope.data.links = response.data;
    });
  };
  $scope.getLinks();
});
