var app = angular.module("occupied", ["firebase"]);

app.controller('light', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
  var ref = new Firebase("https://insight-occupied.firebaseio.com/occupied");
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "occupied");

  $scope.changeStatus = function() {
    $scope.occupied.$value = $scope.occupied.$value === false ? true: false;
  };

}]);