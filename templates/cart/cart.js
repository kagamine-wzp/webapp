/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp")
    .controller("cartCtrl", function ($scope, shopCart,$ionicListDelegate) {
        $scope.cart = shopCart.findAll();

        $scope.add = function (item) {
            item.number++
        };
        $scope.reduce = function (item) {
            item.number--
            if (item.number < 0) item.number = 0
        };
        $scope.remove = function(item){
            shopCart.remove(item.product.name);
        };

        //---------------------------------------------------------------------------
        $scope.money = function () {
            var total = 0;
            angular.forEach($scope.cart, function (item) {
                total += item.number * item.product.price;
            });
            return total;
        };

        $scope.clear = function(){
            shopCart.clear()
        };
        $scope.toDetail = function(){
            alert("感谢您的惠顾")
            shopCart.clear();
            $scope.cart=[]
            $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
        };

    });