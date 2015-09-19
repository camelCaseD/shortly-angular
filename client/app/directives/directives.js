angular.module('shortly.directives', [])

.directive('shortenedLink', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/links/shortened-link.html'
  };
});
