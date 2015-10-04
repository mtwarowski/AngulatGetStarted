//(function () {
//     angular.module("mainApp", [])
//     .controller('mainController', function ($scope, $http) {

//         var onUserComplete = function (responce) {
//             $scope.user = responce.data;
//         };

//         var onError = function (reson) {
//             $scope.error = "Could not fetch the user.";
//         }

//         $http.get("https://api.github.com/users/mtwarowski")
//         .then(onUserComplete, onError);

//         $scope.message = "Hello from Ctrl";
//     });

//}());

(function () {
    var app = angular.module("mainApp", []);
    var mainCtrl = function ($scope, $http) {

        var onUserComplete = function (responce) {
            $scope.user = responce.data;
        };

        var onError = function (reson) {
            $scope.error = "Could not fetch the user.";
        }

        $http.get("https://api.github.com/users/mtwarowski")
        .then(onUserComplete, onError);

        $scope.message = "Hello from Ctrl";
    };


    //protection from minifier
    app.controller('mainController', ["$scope", "$http", mainCtrl]);

}());