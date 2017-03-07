/**
 * Created by hxsd on 2017/1/18.
 */
angular.module('myapp')
    .controller('menuListCtrl', function ($scope,$http) {
        $scope.product=[];
        $http.get('data/data.json').success(function(data){
            $scope.product=data
        });
        $('#menulist .aside').find('li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
        $scope.keyword=function(word){
            $http.get('data/data.json').success(function(data){
                $scope.product=[];
                for(var i=0;i<data.length;i++){
                    if(word=='all'){
                        $scope.product=data
                        return
                    }else if(word==data[i].keywords){
                        $scope.product.push(data[i])
                    }
                }
            });



        }
    });