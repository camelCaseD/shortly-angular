angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function () {
    $scope.loading = true;
    Links.addLink($scope.link).then(function (link) {
      $scope.loading = false;

      $scope.link = link.data;
    }, function () {
      $scope.loading = false;
    });
  };

});
