(function () {
    var app = angular.module("mainApp", ["ngRoute"]);
    //$routeProvider needs ngRoute inluded in main module registration
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/main", {
            templateUrl: "main.html",
            controller:"mainController"
        })
        .when("/user/:userName", {
            templateUrl: "/User/userDetails.html",
            controller: "userController"
        })
        .otherwise({redirectTo:"/main"});
    });
}());