var app = angular.module('cheapDate');


app.controller('cuisCtrl',function($scope, dateFactory){
    $scope.price = [1,2,3,4];
  $scope.listItem = '';
  $scope.getlist = function(){
//  console.log('hey');
  dateFactory.dates().then(function successCallback(response) {
    $scope.food = dateFactory.datespot();
    console.log($scope.food);
  }).then(function successCallback(response) {
    $scope.food2 = dateFactory.datespot2();
//    console.log($scope.food2);
  }).then(function successCallback(response) {
    $scope.food3 = dateFactory.datespot3();
//    console.log($scope.food3);
  }).then(function successCallback(response) {
    $scope.food4 = dateFactory.datespot4();
//    console.log($scope.food3);
  }).then(function successCallback(response) {
    $scope.food5 = dateFactory.datespot5();
//    console.log($scope.food3);
  });

  }
    $scope.getlist();
    $scope.IsVisible = false;
           $scope.ShowHide = function () {
               //If DIV is visible it will be hidden and vice versa.
               $scope.IsVisible = $scope.IsVisible ? false : true;
             }
});
