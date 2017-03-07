/**
 * Created by hxsd on 2017/1/20.
 */
angular.module("myapp")
    .controller("detailTextCtrl", function ($scope, $stateParams,$ionicHistory) {
        $scope.name=$stateParams.name
        $scope.back=function(){
            $ionicHistory.goBack()
        };
    });