/**
 * Created by hxsd on 2017/1/18.
 */
angular.module("myapp", ["ionic"]);
angular.module("myapp")
    .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
        $ionicConfigProvider.tabs.position('bottom');

        $ionicConfigProvider.backButton.text("");
        $ionicConfigProvider.backButton.previousTitleText("");
        $stateProvider
            .state("tabs",{url:"/tabs",abstract:true,templateUrl:"templates/tabs/tabs.html",controller:"tabsCtrl"})
            .state("tour",{url:"/tour",templateUrl:"templates/tour/tour.html"})
            .state("tabs.home",{url:"/home",views:{"tab-home":{templateUrl:"templates/home/home.html"}}})
            .state("tabs.cart",{url:"/cart",views:{"tab-cart":{templateUrl:"templates/cart/cart.html",controller:"cartCtrl"}}})
            .state('tabs.classify',{url:'/classify',views:{'tabs-menuList':{templateUrl:'templates/classify/classify.html',controller:'classifyCtrl'}}})
            .state("tabs.menuList",{url:"/menuList",views:{"tab-menuList":{templateUrl:"templates/menuList/menuList.html",controller:"menuListCtrl"}}})
            .state("tabs.detail",{url:"/detail?:name",views:{"tab-menuList":{templateUrl:"templates/detail/detailPic.html",controller:"detailCtrl"}}})
            //.state("tabs.detailText",{url:"/detailText?:name",views:{"tab-menuList":{templateUrl:"templates/detail/detailText.html",controller:"detailTextCtrl"}}})
            //.state("tabs.detailCom",{url:"/detailCom?:name",views:{"tab-menuList":{templateUrl:"templates/detail/detailCom.html",controller:"detailComCtrl"}}})
            .state("tabs.user",{url:"/user",views:{"tab-user":{templateUrl:"templates/user/user.html",controller:"userCtrl"}}});
        $urlRouterProvider.otherwise("/tour")
    });


