(function(){
'use strict'
  angular.module('MyApp', [])
    .controller('MyController', MyController)

  MyController.$inject = ['$scope']
  function MyController($scope) {
    $scope.checkTooMuch = function(){
      if (!$scope.lunchItems){
        $scope.errMsg = "Please enter data first!"
        return
      }

      const items = $scope.lunchItems.split(',')
      if (items.length <= 3) {
        $scope.errMsg = "Enjoy!"
      }
      else {
        $scope.errMsg = "Too much!"
      }
    }
  }
})()
