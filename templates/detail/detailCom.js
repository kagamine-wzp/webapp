/**
 * Created by hxsd on 2017/1/20.
 */
angular.module("myapp")
    .controller("detailComCtrl", function ($scope, $stateParams,$ionicHistory) {
        $scope.back=function(){
            $ionicHistory.goBack()
        };
        $scope.message={
            action:''
        };
        $scope.msg = [
            {"name": "midOne","date": "2016-11-25","text": "三上延《古书堂事件手帖》动画电影化 & 真人电影化 决定 ​​​​ ","picture": "images/touxiang.jpg"},
            {"name": "midControl","date": "2016-11-23","text": "男子带驾照复印件上路：我怕把驾照弄丢","picture": "images/touxiang.jpg"},
            {"name": "fata","date": "2016-11-23","text": "它叫“全角空格”，全称是Em Space，em是字体排印学的计量单位，相当于当前指定的点数。例如，1 em在16px的字体中就是16px。此空格也传承空格家族一贯的特性：透明的，此空格也有个相当稳健的特性","picture": "images/touxiang.jpg"},
            {"name": "matubama","date": "2016-11-22","text": "它叫窄空格，全称是Thin Space。我们不妨称之为“瘦弱空格”，就是该空格长得比较瘦弱，身体单薄，占据的宽度比较小。它是em之六分之一宽。","picture": "images/touxiang.jpg"},
            {"name": "iceiceice","date": "2016-11-21","text": "浏览器还会把以下字符当作空白进行解析：空格（&#x0020;）、制表位（&#x0009;）、换行（&#x000A;）和回车（&#x000D;）还有（&#12288;）等等","picture": "images/touxiang.jpg"},
            {"name": "kuroky","date": "2016-11-18","text": "以上用户言论只代表其个人观点，不代表CSDN网站的观点或立场","picture": "images/touxiang.jpg"}
        ];

        $scope.send = function(){
            if(!$scope.message.action) return;
            var item = {"name": "dark nova", "date": new Date(), "text": $scope.message.action, "picture": "images/touxiang.jpg"};
            $scope.msg.splice(0, 0, item);
            $scope.message.action = null;
        }


    });