var app = angular.module("occupied", ["firebase"]);

app.controller('light', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
  var womenRef = new Firebase("https://insight-occupied.firebaseio.com/women");
  var womenSync = $firebaseObject(womenRef);
  womenSync.$bindTo($scope, "women");

  var menRef = new Firebase("https://insight-occupied.firebaseio.com/men");
  var menSync = $firebaseObject(menRef);
  menSync.$bindTo($scope, "men");

  $scope.changeStatus = function(gender) {
    gender.$value = gender.$value === false ? true: false;
  };

}]);